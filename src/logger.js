const envLevel = typeof process.env.LOGGER_LEVEL === 'string' ? parseInt(process.env.LOGGER_LEVEL) : null;

export default class Logger {
	static NONE = 0;
	static LOG = 1;
	static INFO = 2;
	static WARN = 3;
	static ERROR = 4;
	static DEBUG = 5;

	static level = typeof envLevel === 'number' ? envLevel : Logger.ERROR;

	static setLevel(level) {
		if (typeof envLevel !== 'number') {
			if (typeof level === 'number') {
				Logger.level = level;
			}
		}
	}

	static log(...args) {
		if (Logger.level >= Logger.LOG) {
			console.log(...args);
		}
	}

	static info(...args) {
		if (Logger.level >= Logger.INFO) {
			console.info(...args);
		}
	}

	static warn(...args) {
		if (Logger.level >= Logger.WARN) {
			console.warn(...args);
		}
	}

	static error(...args) {
		if (Logger.level >= Logger.ERROR) {
			console.error(...args);
		}
	}

	static debug(...args) {
		if (Logger.level >= Logger.DEBUG) {
			console.log('[debug]:', ...args);
		}
	}
}