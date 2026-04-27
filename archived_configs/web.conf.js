const timestamp = new Date().toISOString();

export const config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    maxInstances: 100,
    capabilities: [{
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'latest-1',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'beta',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: 'dev',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '143',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '142',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '141',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'MicrosoftEdge',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 11',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    },
    {
      browserName: 'firefox',
      platformName: 'Windows 10',
      browserVersion: '140',
      'sauce:options': {
        tunnelName: 'sc-5545-version-5-2-1',
        build: 'Multiple Browser Tests ' + timestamp
      },
    }],
    specs: [
      './test/**/testingTheInternet.js'
    ]
  };
  