import { expect } from '@playwright/test';
import { test } from '../../fixtures/login-page-fixture';

test(
	'An invalid user attempts to login with an unknown password only',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC1: The one where an invalid user attempts to login with an unknown password only',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillUserNameWithEmptyString();
		await loginPage.fillBadActorPassword();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Required')).toBeVisible();
	},
);

test(
	'An invalid user attempts to login with an unknown username only',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC2: The one where an invalid user attempts to login with an unknown username only',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillBadActorUserName();
		await loginPage.fillPasswordWithEmptyString();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Required')).toBeVisible();
	},
);

test(
	'An invalid user attempts to login with an unknown username and unknown password',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC3: The one where an invalid user attempts to login with an unknown username and unknown password',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillBadActorUserName();
		await loginPage.fillBadActorPassword();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Invalid credentials')).toBeVisible();
	},
);

test(
	'An invalid user attempts to login with a known username and an unknown password',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC4: The one where an Invalid user attempts to login with a known username with an unknown password',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillGoodActorUserName();
		await loginPage.fillBadActorPassword();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Invalid credentials')).toBeVisible();
	},
);

test(
	'An invalid user attempts to login with an unknown username and a known password',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC5: The one where an invalid user attempts to use a known password with an unknown username',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillBadActorUserName();
		await loginPage.fillGoodActorPassword();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Invalid credentials')).toBeVisible();
	},
);

test(
	'An invalid user attempts to login by inputting nothing into either the username or password input fields',
	{
		annotation: {
			type: 'Acceptance Criteria',
			description:
				'AC6: The one where a user attempts to login by inputting nothing into either password or username fields',
		},
	},
	async ({ base, loginPage, page }): Promise<void> => {
		await base.navigateToUrl('/web/index.php/auth/login');
		await loginPage.fillUserNameWithEmptyString();
		await loginPage.fillPasswordWithEmptyString();
		await loginPage.pressLoginButton();

		await expect(page.getByText('Required').first()).toBeVisible();
		await expect(page.getByText('Required').nth(1)).toBeVisible();
	},
);
