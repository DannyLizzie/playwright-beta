import { expect } from '@playwright/test';
import { test } from '../../fixtures/login-page-fixture';

test(
	'A previously registered user successfully logs in to the Orange HRM service',
	{ tag: ['@happy-path', '@login-page'] },
	async ({ base, loginPage, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillUserName('Admin');
		await loginPage.fillPassword('admin123');
		await loginPage.pressLoginButton();

		await expect(page).toHaveURL('/web/index.php/dashboard/index');

		await page.close();
	},
);
