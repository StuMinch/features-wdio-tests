# WebdriverIO Automation Skill

## Step 1 — Execution Target

Always execute tests on Sauce Labs via WDIO SauceLabs service.

## Step 2 — Framework

| Signal | Runner |
|--------|--------|
| Default | Mocha |

- Use describe / it syntax.
- Use async/await for all commands.

## Core Patterns

### Page Object
All generated tests must follow this folder layout:
features-wdio-test/
  test/
    screens/   → Page Object classes
    specs/     → Test files

| Item | Convention |
|------|-------------|
| Page Object file | SomethingScreen.js |
| Class Name | SomethingScreen |
| Export | `export default new SomethingScreen();` |
| Test file | something.spec.js |

### Screen Structure
Each screen must:
- Be a class.
- Expose elements via getters.
- Expose actions as async methods.
- Be exported as a singleton.

```javascript
class AlertsScreen {
    get generateAlertButton() {
      return $('~Generate Alert');
    }

    get okButton() {
      return $('~OK');
    }
  }
  
  export default new AlertsScreen(); 
```

### Test Structure

```javascript
import MainScreen from '../screens/MainScreen';
import AlertsScreen from '../screens/AlertsScreen';

describe('Test Generating Alerts', () => {
    it('should tap on alerts', async () => {
        await MainScreen.alerts.waitForDisplayed({ timeout: 5000 });
        await MainScreen.alerts.click();
      });
    // rest of the test case...
  });
```

### Selectors

Check that the file in the path `reference/ELEMENTS.md` exists and use it as a reference for the locators to be used in the generated tests. 
If the file does not exist, flag the user that the file is missing and then do the following:
- Run an appium server in the background by executing `appium` in the terminal.
- Then run the commnd `npx mobile-element-explorer run ./explorer.conf.js` in the terminal.
- Save the output.md file and move it to the path `reference/ELEMENTS.md` for future reference.

```javascript
// ✅ Preferred: Accessibility ID Selectors
await $('~Example').click();

// ❌ Avoid XPath
await $('//*[@name="Example"]').click(); 
```

Rules:
- Prefer accessibility IDs.
- Avoid XPath unless no alternative exists.

### Sauce Labs Config
When generating or modifying configs:
- Always include services: ['saucelabs']
- Always set capabilities for iOS + XCUITest
- Always use appium:deviceName patterns (e.g., iPhone.*)
- Always include a build name
- Always target cloud execution

```javascript
export const config = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    port: 443,
    path: '/wd/hub',
    region: 'us',
    services: ['saucelabs'],
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'iOS',
        'appium:app': 'storage:filename=Features-18.ipa',
        'appium:deviceName': 'iPhone.*',
        'appium:automationName': 'XCUITest',
        'sauce:options': {
            resigningEnabled: true,
            appiumVersion: 'latest',
            build: 'Testing Agent Skills - Build 1',
        },
    }],
};
```

### Wait Strategies
- Always use explicit waits:
```javascript
describe('Test Generating Alerts', () => {
    it('should tap on alerts', async () => {
        await MainScreen.alerts.waitForDisplayed({ timeout: 5000 });
        await MainScreen.alerts.click();
      });
  });
```

## Execution Reference
| Task | Command |
|------|---------|
| Run all | `npx wdio run wdio.conf.js` |
| Run specific | `npx wdio run wdio.conf.js --spec ./test/login.js` |
| Parallel | Set `maxInstances: 10` in config |

## Sauce Labs Advanced Functionality
- Use `sauce:options` in capabilities for advanced features (e.g., video recording, custom build names).
- Resigning must be set to true `resigningEnabled: true` for all advanced features to work.

### Biometric Authentication
- Use capability `biometricsInterception: true` to enable biometric interception.
- For iOS include `allowTouchIdEnroll: true` to allow Touch ID enrollment.
- To simulate a passing biometric authentication scenario use:
```javascript
driver.execute('sauce:biometrics-authenticate=true');
```
- To simulate a failing biometric authentication scenario use:
```javascript
driver.execute('sauce:biometrics-authenticate=false');
```

## Self‑Checklist for Test Generation
Before outputting any test, the agent must verify all items below:

Structure
[ ] Did I place Page Objects in test/screens?
[ ] Did I place test specs in test/specs?
[ ] Did I use correct naming conventions (SomethingScreen.js, something.spec.js)?

Page Objects
[ ] Did I create a class with getters for elements?
[ ] Did I export a singleton (export default new XScreen();)?
[ ] Did I avoid putting test logic inside Page Objects?

Selectors
[ ] Did I use accessibility IDs (~id)?
[ ] Did I avoid XPath unless absolutely required?

Test Logic
[ ] Did I import the correct Page Objects?
[ ] Did I use describe and it with Mocha?
[ ] Did I use async/await for all WDIO commands?
[ ] Did I include explicit waits (waitForDisplayed, waitUntil)?

Sauce Labs
[ ] Did I assume cloud execution?
[ ] Did I avoid generating local Appium configs?
[ ] Did I use iOS + XCUITest capabilities when needed?

Quality
[ ] Is the test deterministic (no race conditions)?
[ ] Is the test readable and minimal?
[ ] Does the test follow the same style as existing examples?