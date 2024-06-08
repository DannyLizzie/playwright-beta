import { Locator, Page } from '@playwright/test';
import { Base } from './base';

export class Common extends Base {
	readonly _page: Page;
	readonly _locator: Locator;
	readonly _orangeIrmLink: Locator;

	constructor(page: Page) {
		super(page);
		this._page = page;
		this._orangeIrmLink = page.locator('text="OrangeHRM, Inc"');
	}

	async pressOrangeIrmLink() {
		await this.press(this._orangeIrmLink);
	}
}
