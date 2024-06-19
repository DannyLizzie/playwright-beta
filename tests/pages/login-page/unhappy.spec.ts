import { test } from '../../fixtures/login-page-fixture';

test.describe(
	'Invalid user attempts to login - variations',
	{
		tag: ['@login-page', '@unhappy'],
		annotation: { type: 'Feature', description: 'Feat(OHRM-007): Login page - unhappy path' },
	},
	() => {
		test(
			'An invalid user attempts to login with an unknown password only',
			{
				annotation: {
					type: 'Acceptance Criteria',
					description:
						'AC1: The one where an invalid user attempts to login with an unknown password only',
				},
			},
			async ({ page }) => {},
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
			async ({ page }) => {},
		);

		test(
			'An invalid user attempts to login with an unknown username and unknown password',
			{
				annotation: {
					type: 'Acceptance Criteria',
					description:
						'AC3: The one where an invalid user attempts to login with an unknown username and password',
				},
			},
			async ({ page }) => {},
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
			async ({ page }) => {},
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
			async ({ page }) => {},
		);
	},
);
