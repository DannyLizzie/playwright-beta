import { Locator, Page } from '@playwright/test';

export class Base {
	readonly _page: Page;

	constructor(page: Page) {
		this._page = page;
	}

	async navigateToUrl(url: string) {
		await this._page.goto(url, { waitUntil: 'load' });
	}

	async fillField(locator: Locator, input: string) {
		await locator.fill(input);
	}

	async fillFieldSequentially(locator: Locator, input: string) {
		await locator.pressSequentially(input);
	}

	async press(locator: Locator) {
		await locator.click();
	}

	async elementIsPresentOnDom(locator: Locator) {
		await locator.isVisible();
	}
}
