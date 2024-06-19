import { expect } from '@playwright/test';
import { test } from '../../fixtures/login-page-fixture';

test(
	'A user attempts to interact with the OrangeHRM.Inc link on the login page',
	{ tag: ['@generic-user', '@login-page'] },
	async ({ base, common, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');

		const [homePage] = await Promise.all([
			page.waitForEvent('popup'),
			common.pressOrangeIrmLink(),
		]);

		await homePage.waitForLoadState();

		await expect(homePage).toHaveURL('https://www.orangehrm.com/');
		await homePage.close();
		await page.close();
	},
);

test(
	'A user attempts to use the LinkedIn link on the login page',
	{ tag: ['@generic-user', '@login-page'] },
	async ({ base, loginPage, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');
		const linkedInPage = page.waitForEvent('popup');
		await loginPage.pressLinkedInButton();
		const linkedIn = await linkedInPage;

		await expect(linkedIn).toHaveURL('https://www.linkedin.com/company/orangehrm');
		await linkedIn.close();
		await page.close();
	},
);

test(
	'A user attempts to use the Twitter/X link on the login page',
	{ tag: ['@generic-user', '@login-page'] },
	async ({ base, loginPage, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');
		const twitterPage = page.waitForEvent('popup');
		await loginPage.pressTwitterButton();
		const twitter = await twitterPage;

		await expect(twitter).toHaveURL('https://x.com/orangehrm?lang=en');
		await twitter.close();
		await page.close();
	},
);

test(
	'A user attempts to use the Facebook link on the login page',
	{ tag: ['@generic-user', '@login-page'] },
	async ({ base, loginPage, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');
		const facebookPage = page.waitForEvent('popup');
		await loginPage.pressFacebookButton();
		const facebook = await facebookPage;

		await expect(facebook).toHaveURL('https://www.facebook.com/OrangeHRM/');
		await facebook.close();
		await page.close();
	},
);

test(
	'A user attempts to use the YouTube link on the login page',
	{ tag: ['@generic-user', '@login-page'] },
	async ({ base, loginPage, page }) => {
		await base.navigateToUrl('/web/index.php/auth/login');
		const youTubePage = page.waitForEvent('popup');
		await loginPage.pressYouTubeButton();
		const youTube = await youTubePage;

		const orangeHome = youTube.getByTitle('(1) OrangeHRM Inc - YouTube', {
			exact: true,
		});
		const consentPage = youTube.getByTitle('Before you continue to YouTube', {
			exact: true,
		});

		expect(orangeHome.or(consentPage)).toBeDefined();

		await youTube.close();
		await page.close();
	},
);
