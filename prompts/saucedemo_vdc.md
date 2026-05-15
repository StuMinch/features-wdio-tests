Using the rules and conventions defined in `wdio-skill`, generate a new WebdriverIO test for a browser based test that logs into https://saucedemo.com and adds a backpack to the cart.

The test must include the following scenarios:
1. Successful authentication into the web application.
2. Successfully add one backpack to the cart. 

Requirements:
- Follow the Page Object Model exactly as defined in `wdio-skill`
- Reference the Sauce Labs VDC skill `sauce-vdc` for the appropriate test configurations
- Use waitUntilDisplayed when searching for elements.
- The test must be run on the latest Chrome, Firefox, Edge, and Safari browsers on macOS 15 and Windows 11.

Test steps:
- Navigate to https://saucedemo.com.
- Login to the application using the following credentials:
    - Username = {{process.env.SAUCEDEMO_USERNAME}}
    - Password = {{process.env.SAUCEDEMO_PASSWORD}}
- Add one Sauce Labs Backpack to the cart.
- Navigate to the cart to verify that one backpack has been successfully added.