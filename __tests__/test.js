const { validateConfig } = require('renovate/lib/config/validation');
const pkg = require('../package.json');

const configs = pkg['renovate-config'];

test('Renovate config should be valid', () => {
	Object.keys(configs).forEach(presetName => {
		const { errors, warnings } = validateConfig(configs[presetName]);
		expect(errors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	});
});
