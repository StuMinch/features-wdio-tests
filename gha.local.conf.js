import { join } from 'path';

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  //
  // ==================
  // Appium Connection
  // ==================
  hostname: '127.0.0.1',
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

      // Force Appium to attach to the simulator you booted in CI
      'appium:udid': 'C681C3DC-9FA2-4B02-A1A3-B8705A35E86D',

      // Optional: helps Appium validate the device, and improves logs
      'appium:deviceName': 'iPhone 17',
      'appium:platformVersion': '26.0',

      // Path to the built .app bundle
      //'appium:app': process.env.APP_PATH,
      'appium:app': '/Users/stuart.minchington@saucelabs.com/Developer/Features.app',

      // Stability settings for CI
      'appium:newCommandTimeout': 240,
      'appium:connectHardwareKeyboard': false,
      'appium:noReset': false,
      'appium:fullReset': false,
    },
  ],

  //
  // ===================
  // Test Files Location
  // ===================
  specs: ['./test/specs/**/*.js'],

  //
  // ============
  // Test Options
  // ============
  logLevel: 'info',

  waitforTimeout: 20000,
  connectionRetryTimeout: 180000,
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
