const path = require("path");

exports.config = {

    specs: [
        './src/features/**/*.feature'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    logLevel: 'info',
    outputDir: path.join(__dirname, "../log"),
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: [
            './src/steps/*.js'
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}