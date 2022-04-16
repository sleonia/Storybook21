import {initCLI} from '@mail-core/cli';
import {demo} from './command/demo';

initCLI(
	// Env
	{__dirname},

	// Command List
	demo,
);

