const { validateConfig } = require('renovate/dist/config/validation');
const pkg = require('../package.json');

const configs = pkg['renovate-config'];

test('Renovate config should be valid', async () => {
	for (const presetName in configs) {
		const config = configs[presetName];

		const { errors, warnings } = await validateConfig(config);

		expect(errors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	}
});
