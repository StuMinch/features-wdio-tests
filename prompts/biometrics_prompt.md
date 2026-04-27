Using the rules and conventions defined in `wdio-skill`, generate a new WebdriverIO test for my iOS app that validates the biometrics authentication flow.

The test must include two scenarios:
1. Successful biometric authentication
2. Unsuccessful biometric authentication

Requirements:
- Follow the Page Object Model exactly as defined in `wdio-skill`
- Reference the appropriate biometrics simulation commands located in the Sauce Labs RDC skill `sauce-rdc`
- Reference `elements.md` within the Sauce Labs RDC skill
- Use explicit waits.

Test steps:
- Tap `Authenticate` button.
- Initiate success biometrics authentication.
- Must tap the `Lock` button to reset state.
- Initiate unsuccessful biometrics scenario.