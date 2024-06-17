import { expect } from '@playwright/test';
import { test } from './fixtures/login-page-fixture';

test('A user attempts to interact with the OrangeHRM.Inc link on the login page', async ({
	base,
	common,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [homePage] = await Promise.all([page.waitForEvent('popup'), common.pressOrangeIrmLink()]);

	await homePage.waitForLoadState();

	await expect(homePage).toHaveURL('https://www.orangehrm.com/');
	await homePage.close();
	await page.close();
});

test('A previously registered user successfully logs in to the Orange HRM service', async ({
	base,
	loginPage,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	await loginPage.fillUserName('Admin');
	await loginPage.fillPassword('admin123');
	await loginPage.pressLoginButton();

	await expect(page).toHaveURL(
		'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
	);

	await page.close();
});

test('A user attempts to use the LinkedIn link on the login page', async ({
	base,
	loginPage,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [linkedInPage] = await Promise.all([
		page.waitForEvent('popup'),
		loginPage.pressLinkedInButton(),
	]);
	await linkedInPage.waitForLoadState();

	await expect(linkedInPage).toHaveURL('https://www.linkedin.com/company/orangehrm');
	await linkedInPage.close();
	await page.close();
});

test('A user attempts to use the Twitter/X link on the login page', async ({
	base,
	loginPage,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [twitterPage] = await Promise.all([
		page.waitForEvent('popup'),
		loginPage.pressTwitterButton(),
	]);
	await twitterPage.waitForLoadState();

	await expect(twitterPage).toHaveURL('https://x.com/orangehrm?lang=en');
	await twitterPage.close();
	await page.close();
});

test('A user attempts to use the Facebook link on the login page', async ({
	base,
	loginPage,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [facebookPage] = await Promise.all([
		page.waitForEvent('popup'),
		loginPage.pressFacebookButton(),
	]);
	await facebookPage.waitForLoadState();

	await expect(facebookPage).toHaveURL('https://www.facebook.com/OrangeHRM/');
	await facebookPage.close();
	await page.close();
});

test('A user attempts to use the YouTube link on the login page', async ({
	base,
	loginPage,
	page,
}) => {
	await base.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

	const [youTubePage] = await Promise.all([
		page.waitForEvent('popup'),
		loginPage.pressYouTubeButton(),
	]);
	await youTubePage.waitForLoadState();

	const orangeHome = youTubePage.getByTitle('(1) OrangeHRM Inc - YouTube', { exact: true });
	const consentPage = youTubePage.getByTitle('Before you continue to YouTube', { exact: true });

	expect(orangeHome.or(consentPage)).toBeDefined();

	await youTubePage.close();
	await page.close();
});
