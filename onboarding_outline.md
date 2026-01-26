# Features WDIO Tests - Onboarding Guide Outline and Structure

Welcome to the `features-wdio-tests` repository! This guide is designed to help you, as a new Customer Success Manager (CSM), understand the structure of our mobile test automation framework so you can confidently start writing your own tests.

## 1. Repository Overview

This generic repository demonstrates a robust mobile automation setup using [WebdriverIO](https://webdriver.io/) and [Appium](https://appium.io/). It is designed to be "forked" and extended.

**Key Directories:**
-   **`test/`**: The heart of our automation.
    -   **`screens/`**: Contains the "Page Objects" (representations of app screens).
    -   **`specs/`**: Contains the actual test scripts.
-   **`wdio.conf.js`**: The configuration file that tells WebdriverIO how to run, where to find tests, and what device capabilities to use (e.g., which iOS version, app path).

## 2. The Page Object Model (POM)

We use a design pattern called the **Page Object Model (POM)**.
*   **Why?** It keeps code clean and maintainable. Instead of writing complex selectors (like `$('//*[@name="Submit"]')`) inside every test file, we define them *once* in a "Screen" class.
*   **How it works:**
    *   A **Screen** file (e.g., `LoginScreen.js`) defines the elements (buttons, inputs) and actions (login function) for that specific screen.
    *   A **Spec** file (e.g., `login.test.js`) imports the Screen and simply says `LoginScreen.login()`.
*   **Benefit:** If the "Submit" button ID changes in the app, you update it in *one place* (`LoginScreen.js`), and all 50 tests that use it are automatically fixed!

## 3. Structure of `screens` (`test/screens/`)

Files in this directory represent the screens of the application.

**Example Structure (`AlertsScreen.js`):**

```javascript
class AlertsScreen {
    // Defines the 'Generate Alert' button
    get generateAlertButton() {
      return $('~Generate Alert'); // Uses accessibility ID
    }

    // Defines the 'OK' button on the alert
    get okButton() {
      return $('~OK');
    }
}

// Exports an INSTANCE of the class so specs can use it directly
export default new AlertsScreen();
```

**Key Takeaways:**
-   **Classes:** Each file exports a class instance.
-   **Getters:** We use `get` methods to define elements. This means the code finds the element *fresh* every time you assume it in a test, avoiding "stale element" errors.
-   **Selectors:** We prefer accessibility IDs (starting with `~`) or highly stable XPaths.

## 4. Structure of `specs` (`test/specs/`)

Files in this directory are the actual tests that run. We use the **Mocha** framework (`describe`, `it`).

**Example Structure (`ios-alerts-test.js`):**

```javascript
// 1. Import the Screens (Page Objects)
import MainScreen from '../screens/MainScreen';
import AlertsScreen from '../screens/AlertsScreen';

// 2. Define the Test Suite
describe('Test Generating Alerts', () => {

    // 3. Define Individual Test Cases
    it('should tap on alerts', async () => {
        // Use the Page Object to interact
        await MainScreen.alerts.waitForDisplayed({ timeout: 5000 });
        await MainScreen.alerts.click();
    });

    it('should tap generate alert button', async () => {
        await AlertsScreen.generateAlertButton.waitForDisplayed({ timeout: 5000 });
        await AlertsScreen.generateAlertButton.click();
    });
});
```

**Key Takeaways:**
-   **Imports:** Always import the screens you need at the top.
-   **`describe`**: Groups related tests together (e.g., "Login Tests").
-   **`it`**: A single test scenario (e.g., "should login successfully").
-   **`async/await`**: All Appium commands are asynchronous. You MUST use `await` (e.g., `await button.click()`) or the test will fail/skip steps.

## 5. Logic Flow of a Test

When you write your first test, follow this mental model:

1.  **State the Goal:** What specific user flow am I testing? (e.g., "User can toggle location").
2.  **Identify Screens:** Which app screens does this flow touch? (e.g., Main Menu -> Location Screen).
3.  **Check Page Objects:** Do `MainScreen.js` and `LocationScreen.js` exist?
    *   *Yes:* Do they have the buttons I need?
    *   *No:* Create the new Screen file or add the missing selectors to the existing file.
4.  **Write the Spec:**
    *   Navigate to the screen.
    *   Perform the action (Click, Type).
    *   **Assert** (Verify): Did it work? (e.g., `expect(await toggle.isOn()).toBe(true)`).

## Next Steps for You
1.  **Read:** Open `test/screens/MainScreen.js` and see how it maps to the app's home screen.
2.  **Run:** Try running the existing `ios-alerts-test.js` to see it in action.
3.  **Create:** Pick a simple feature not yet tested (e.g., a simple toggle or button tap) and try to implement the Screen and Spec for it.
