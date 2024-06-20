import 'dotenv/config';
import { Common } from './common';
import { Locator, Page } from '@playwright/test';

export class PasswordResetPage extends Common {
	readonly _page: Page;
	private readonly _usernameInput: Locator;
	private readonly _cancelButton: Locator;
	private readonly _resetButton: Locator;
	private readonly _goodActorUserName = `${process.env.GOOD_ACTOR_USERNAME}`;
	private readonly _emptyString = `${process.env.EMPTY_INPUT}`;

	constructor(page: Page) {
		super(page);

		this._usernameInput = page.locator('//input[@placeholder="Username"]');
		this._cancelButton = page.locator('//button[@type="button"]');
		this._resetButton = page.locator('//button[@type="submit"]');
	}

	async fillGoodActorUserName() {
		await this.fillFieldSequentially(this._usernameInput, this._goodActorUserName);
	}

	async fillUserNameWithEmptyString() {
		await this.fillFieldSequentially(this._usernameInput, this._emptyString);
	}

	async pressCancelButton() {
		await this.press(this._cancelButton);
	}

	async pressResetButton() {
		await this.press(this._resetButton);
	}
}
