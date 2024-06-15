import { Locator, Page } from '@playwright/test';
import { Common } from './common';

export class LoginPage extends Common {
	readonly _page: Page;
	private readonly _usernameInput: Locator;
	private readonly _passwordInput: Locator;
	private readonly _loginButton: Locator;
	private readonly _forgotPasswordButton: Locator;

	constructor(page: Page) {
		super(page);
		this._usernameInput = page.locator('input[placeholder="Username"]');
		this._passwordInput = page.locator('input[placeholder="Password"]');
		this._loginButton = page.locator('//button[@type="submit"]');
		this._forgotPasswordButton = page.locator('text=Forgot your password? ');
	}

	async navigateToLoginPage(loginPageUrl: string) {
		await this.navigateToUrl(loginPageUrl);
	}

	async fillUserName(username: string) {
		await this.fillFieldSequentially(this._usernameInput, username);
	}

	async fillPassword(password: string) {
		await this.fillFieldSequentially(this._passwordInput, password);
	}

	async pressLoginButton() {
		await this.press(this._loginButton);
	}

	async pressForgotPasswordButton() {
		await this.press(this._forgotPasswordButton);
	}
}
