Using the rules and conventions defined in `skills/SKILL.md`, generate a new WebdriverIO test for my iOS app that validates the biometrics authentication flow.

The test must include two scenarios:
1. Successful biometric authentication
2. Unsuccessful biometric authentication

Requirements:
- Follow the Page Object Model exactly as defined in `skills/SKILL.md`
- Reference the appropriate biometrics simulation commands located in `reference/SAUCE-RDC.md`
- Reference the appropriate elements located in `reference/ELEMENTS.md`
- Use explicit waits.

Test steps:
- Tap `Authenticate` button.
- Initiate success biometrics authentication.
- Must tap the `Lock` button to reset state.
- Initiate unsuccessful biometrics scenario.