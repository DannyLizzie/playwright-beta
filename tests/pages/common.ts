import { Base } from './base';
import { Locator, Page } from '@playwright/test';

export class Common extends Base {
	readonly _page: Page;
	private readonly _orangeHrmLink: Locator;

	constructor(page: Page) {
		super(page);
		this._orangeHrmLink = page.locator('text="OrangeHRM, Inc"');
		this._page = page;
	}

	async pressOrangeIrmLink() {
		await this.press(this._orangeHrmLink);
	}
}
