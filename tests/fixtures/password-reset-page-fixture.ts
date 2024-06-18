import { test as testContext } from '@playwright/test';
import { Base } from '../pages/base';
import { Common } from '../pages/common';
import { LoginPage } from '../pages/login-page';
import { PasswordResetPage } from '../pages/password-reset';

type pages = {
	base: Base;
	common: Common;
	loginPage: LoginPage;
	passwordResetPage: PasswordResetPage;
};

const passwordResetPageContext = testContext.extend<pages>({
	base: async ({ page }, use) => {
		await use(new Base(page));
	},
	common: async ({ page }, use) => {
		await use(new Common(page));
	},
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	passwordResetPage: async ({ page }, use) => {
		await use(new PasswordResetPage(page));
	},
});

export const test = passwordResetPageContext;
