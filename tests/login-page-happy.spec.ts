import { expect } from '@playwright/test';
import { test } from './fixtures/login-page-fixture';

test('A user attempts to interact with the OrangeHRM.Inc link on the login page', async ({ base, common, page }) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [homePage] = await Promise.all([page.waitForEvent('popup'), common._orangeIrmLink.click()]);

	await homePage.waitForLoadState();

	await expect(homePage).toHaveURL('https://www.orangehrm.com/');
	await homePage.close();
	await page.close();
});
