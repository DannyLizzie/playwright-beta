import { expect } from '@playwright/test';
import { test } from './fixtures/password-reset-page-fixture';

test(
	'A user attempts to request a password reset',
	{ tag: ['@generic-user', '@password-reset-page'] },
	async ({ base, loginPage, page, passwordResetPage }) => {
		await base.navigateToUrl('/web/index.php/auth/login');

		await loginPage.pressForgotPasswordButton(),
			expect(page).toHaveURL('/web/index.php/auth/requestPasswordResetCode');

		await passwordResetPage.fillUserName('Admin');
		await passwordResetPage.pressResetButton();

		await expect(page).toHaveURL('/web/index.php/auth/sendPasswordReset');
	},
);

test(
	'A user attempts to request a password reset, then cancels the request',
	{ tag: ['@generic-user', '@password-reset-page'] },
	async ({ base, loginPage, page, passwordResetPage }) => {
		await base.navigateToUrl('/web/index.php/auth/login');

		await loginPage.pressForgotPasswordButton(),
			expect(page).toHaveURL('/web/index.php/auth/requestPasswordResetCode');

		await passwordResetPage.fillUserName('Admin');
		await passwordResetPage.pressCancelButton();

		await expect(page).toHaveURL('/web/index.php/auth/login');
	},
);
