const { assertStderrIncludes } = require('../../../utils.js');

module.exports = {
	description: 'warns for circular dependencies',
	command: 'rollup -c',
	stderr: stderr =>
		assertStderrIncludes(stderr, '(!) Circular dependency\n' + 'main.js -> dep.js -> main.js\n')
};
