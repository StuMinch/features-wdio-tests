const timestamp = new Date().toISOString();

const networkProfiles = [
    'no-throttling',
    'no-network',
    '2G-packet-loss',
    '2G',
    '3G-slow',
    '3G-fast',
    '4G-slow',
    '4G-fast',
];

export const config = {
    runner: 'local',
    port: 443,

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',

    specs: [
        './test/specs/networkCapture.spec.js',
    ],

    maxInstances: 10,

    capabilities: networkProfiles.map((profile) => ({
        platformName: 'iOS',
        'appium:app': 'storage:filename=Features-18.ipa',
        'appium:deviceName': 'iPhone.*',
        'appium:automationName': 'XCUITest',
        'sauce:options': {
            resigningEnabled: true,
            networkCapture: true,
            networkProfile: profile,
            appiumVersion: 'latest',
            build: 'Agentic Testing - Network Profiles - ' + timestamp,
            name: `Network Capture - ${profile}`,
        },
    })),

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium', 'sauce'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
};