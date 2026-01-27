import { join } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Helper to mimic __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// If GITHUB_WORKSPACE isn't set, we fall back to the project root
const workspace = process.env.GITHUB_WORKSPACE || path.join(__dirname, '..');

export const config = {
  // Increase the global WDIO timeout for the initial session request
    connectionRetryTimeout: 600000,
    connectionRetryCount: 0,
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  //
  // ==================
  // Appium Connection
  // ==================
  hostname: 'localhost',
  port: 4723,

  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,

  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:udid': process.env.DEVICE_UDID,
      'appium:deviceName': 'iPhone 16',
      'appium:app': process.env.APP_PATH,
      
      'appium:usePrebuiltWDA': true,
      'appium:derivedDataPath': path.join(workspace, 'wda_derived_data'),
      'appium:wdaLaunchTimeout': 300000,
      'appium:wdaLocalPort': 8100,
      'appium:newCommandTimeout': 480,
      'appium:connectHardwareKeyboard': false,
      'appium:noReset': false,
      'appium:fullReset': false,
    },
  ],

  //
  // ===================
  // Test Files Location
  // ===================
  specs: ['./test/specs/**/ios-alerts-test.js'],

  //
  // ============
  // Test Options
  // ============
  logLevel: 'debug',

  waitforTimeout: 20000,
  connectionRetryTimeout: 240000,
  connectionRetryCount: 3,

  //
  // ============
  // Framework
  // ============
  framework: 'mocha',
  mochaOpts: {
    timeout: 120000,
  },

  //
  // =================
  // WDIO Services
  // =================
  services: [],

  //
  // ============
  // Hooks
  // ============
  before() {
    console.log('Running tests on local iOS simulator via Appium');
    console.log('APP_PATH:', process.env.APP_PATH);
    console.log('DEVICE_UDID:', process.env.DEVICE_UDID);
    console.log('DEVICE_NAME:', process.env.DEVICE_NAME);
  },
};
