const { join } = require('path');

exports.config = {
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
  path: '/wd/hub',

  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,

  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',

      // Device name does not need to match exactly — Appium will attach to the booted simulator
      'appium:deviceName': 'iPhone',

      // The workflow passes APP_PATH into the environment
      'appium:app': process.env.APP_PATH,

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
  before: function () {
    console.log('Running tests on local iOS simulator via Appium');
    console.log('APP_PATH:', process.env.APP_PATH);
  },
};
