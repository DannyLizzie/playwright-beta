import { expect } from '@playwright/test';
import { test } from '../../fixtures/password-reset-page-fixture';

test(
	'A user attempts to request a password reset',
	{ tag: ['@generic-user', '@password-reset-page'] },
	async ({ base, loginPage, page, passwordResetPage }) => {
		await base.navigateToUrl('/web/index.php/auth/login');

		await loginPage.pressForgotPasswordButton(),
			expect(page).toHaveURL('/web/index.php/auth/requestPasswordResetCode');

		await passwordResetPage.fillGoodActorUserName();
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

		await passwordResetPage.fillGoodActorUserName();
		await passwordResetPage.pressCancelButton();

		await expect(page).toHaveURL('/web/index.php/auth/login');
	},
);

test.describe(
	'Feat(OHRM-022): User inputs empty string when requesting password reset',
	{ tag: ['@generic-user', '@password-reset-page'] },
	() => {
		test(
			'An invalid user attempts to login with an unknown password only',
			{
				annotation: {
					type: 'Acceptance Criteria',
					description:
						'AC1: The one where a user attempts to request a password reset with an empty string',
				},
			},
			async ({ base, loginPage, page, passwordResetPage }) => {
				await base.navigateToUrl('/web/index.php/auth/login');

				await loginPage.pressForgotPasswordButton(),
					expect(page).toHaveURL('/web/index.php/auth/requestPasswordResetCode');

				await passwordResetPage.fillUserNameWithEmptyString();
				await passwordResetPage.pressCancelButton();

				await expect(page).toHaveURL('/web/index.php/auth/login');
			},
		);
	},
);
