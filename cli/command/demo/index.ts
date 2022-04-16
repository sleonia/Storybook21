import {createCommand} from '@mail-core/cli';

export const demo = createCommand({
	name: 'demo',
	describe: 'Demo command',

	options: {
		val: {
			desc: 'Any value',
			type: 'string',
			default: 'Wow!',
		},
	},

	async handler(argv, {console, describe, options, style}) {
		// Print command description
		console.important(describe);

		// Prompt user for option or use default
		const value = await console.cli.require(options.val);

		// Print 'value' with style and color
		console.log('value:', style.bold.cyan(value), style.gray(argv.val));
	},
});

