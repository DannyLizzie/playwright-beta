import { Locator, Page } from '@playwright/test';
import { Common } from './common';

export class LoginPage extends Common {
	readonly _page: Page;
	private readonly _usernameInput: Locator;
	private readonly _passwordInput: Locator;
	private readonly _loginButton: Locator;
	private readonly _forgotPasswordButton: Locator;
	private readonly _linkedInButton: Locator;
	private readonly _twitterButton: Locator;
	private readonly _facebookButton: Locator;
	private readonly _youTubeButton: Locator;
	private readonly _genericValidationElement: Locator;
	private readonly _usernameValidationElement: Locator;
	private readonly _passwordValidationElement: Locator;

	constructor(page: Page) {
		super(page);
		this._usernameInput = page.locator('input[placeholder="Username"]');
		this._passwordInput = page.locator('input[placeholder="Password"]');
		this._loginButton = page.locator('//button[@type="submit"]');
		this._forgotPasswordButton = page.locator('text=Forgot your password? ');
		this._linkedInButton = page.getByRole('link').first();
		this._facebookButton = page.getByRole('link').nth(1);
		this._twitterButton = page.getByRole('link').nth(2);
		this._youTubeButton = page.getByRole('link').nth(3);
		this._genericValidationElement = page.getByText('Required');
		this._usernameValidationElement = page.getByText('Required').first();
		this._passwordValidationElement = page.getByText('Required').nth(1);
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

	async pressLinkedInButton() {
		await this.press(this._linkedInButton);
	}

	async pressTwitterButton() {
		await this.press(this._twitterButton);
	}

	async pressFacebookButton() {
		await this.press(this._facebookButton);
	}

	async pressYouTubeButton() {
		await this.press(this._youTubeButton);
	}

	async genericValidationElementIsPresent() {
		await this.elementIsPresentOnDom(this._genericValidationElement);
	}

	async usernameValidationElementIsPresent() {
		await this.elementIsPresentOnDom(this._usernameValidationElement);
	}

	async passwordValidationElementIsPresent() {
		await this.elementIsPresentOnDom(this._passwordValidationElement);
	}
}
