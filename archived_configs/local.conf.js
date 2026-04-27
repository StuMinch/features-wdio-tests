import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * PATH LOGIC:
 * If your tests are at: /Users/runner/work/Features/Features/features-wdio-tests/
 * And your WDA is at:  /Users/runner/work/Features/Features/wda_derived_data/
 * We must ensure 'workspace' points to /Users/runner/work/Features/Features/
 */
const workspace = process.env.GITHUB_WORKSPACE || path.resolve(__dirname, '..');
const wdaPath = path.join(workspace, 'wda_derived_data');

export const config = {
    // ==================
    // Appium Connection
    // ==================
    hostname: 'localhost',
    port: 4723,

    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    specs: ['./test/specs/**/ios-text-test.js'],
    maxInstances: 1,

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',
            'appium:deviceName': 'iPhone 17 Pro',
            'appium:app': '/Users/stuart.minchington@saucelabs.com/Developer/features.zip',
            
            // Link to the pre-built WDA
            //'appium:usePrebuiltWDA': true,
            //'appium:derivedDataPath': wdaPath,
            //'appium:derivedDataPath': '/Users/runner/work/Features/Features/wda_derived_data',
            
            'appium:wdaLaunchTimeout': 300000, // 5 mins
            'appium:wdaLocalPort': 8100,
            'appium:newCommandTimeout': 480,
            'appium:connectHardwareKeyboard': false,
            'appium:noReset': false,
            'appium:fullReset': false,
        },
    ],

    // ============
    // Test Options
    // ============
    logLevel: 'debug',
    waitforTimeout: 20000,
    
    // This must be higher than wdaLaunchTimeout to prevent WDIO from killing the session request
    connectionRetryTimeout: 600000, 
    connectionRetryCount: 1,

    framework: 'mocha',
    mochaOpts: {
        timeout: 120000,
    },

    services: [],

    // ============
    // Hooks
    // ============
    before() {
        console.log('--- SESSION STARTING ---');
        console.log('Workspace Root:', workspace);
        console.log('WDA DerivedData Path:', wdaPath);
        console.log('APP_PATH:', process.env.APP_PATH);
        console.log('------------------------');
    },
};