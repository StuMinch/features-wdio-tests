# Test Requirement: Input Text Flow Validation

## Document Metadata
- **Version:** 1.0
- **Date:** 2026-05-14
- **Status:** Active
- **Target Platform:** iOS

## 1. Overview
Validate the text input flow in the iOS app, confirming users can input and submit text through the dedicated Text feature.

## 2. Functional Requirements

### 2.1 Test Objective
Create an automated test that validates end-to-end text input and submission.

### 2.2 Test Framework & Environment
- **Framework:** WebdriverIO + Mocha
- **Pattern:** Page Object Model
- **Platform:** Sauce Labs RDC (iOS real device)
- **Capabilities Source:** `elements.md` (sauce-rdc skill)

### 2.3 Prerequisites
- Sauce Labs credentials configured
- Features.ipa app available in Sauce storage
- iPhone 15+ (or compatible device pool)

## 3. Test Scenario: User Submits Text

### 3.1 Test Steps
| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Navigate to main screen | Features home visible |
| 2 | Tap "Text" button | Text input screen opens |
| 3 | Wait for text field | Text field displayed with 5s timeout |
| 4 | Input "Hello World!" | Text field populated |
| 5 | Wait for Submit button | Submit button visible with 5s timeout |
| 6 | Tap Submit button | Form submitted successfully |

### 3.2 Acceptance Criteria
- ✓ All element waits use explicit `waitForDisplayed({ timeout: 5000 })`
- ✓ Test executes on Sauce RDC with screenshot recording enabled
- ✓ Failure screenshots automatically captured to `artifacts/sauce/failures/`
- ✓ Session ID logged for traceability
- ✓ Test completes or fails within 60s

## 4. Technical Requirements

### 4.1 Selectors
- Text button: Accessibility ID `~Text`
- Text field: XPath `//*[@value="Enter your text here"]`
- Submit button: Accessibility ID `~Submit`

### 4.2 Waits & Timeouts
- All element visibility checks: 5000ms explicit wait
- Test execution timeout: 60000ms

### 4.3 Artifacts & Reporting
- Screenshots on failure: enabled (automatic via afterTest hook)
- Video recording: enabled
- Device logs: captured
- Sauce job URL: logged for reference

## 5. Execution & Debugging

### 5.1 Execution
- The agent must execute the test directly in order to retain the context of the Sauce Labs session
```bash
npx wdio run wdio.conf.js --spec ./test/specs/text.spec.js
```

### 5.2 Failure Diagnosis
1. Capture Sauce session ID from test output
2. Inspect failure screenshot in `artifacts/sauce/failures/`
3. Review device logs if needed: `artifacts/sauce/<job_id>/deviceLogs`
4. Check video: `artifacts/sauce/<job_id>/video.mp4`

## 6. Known Issues & Workarounds
- **Issue:** Special Offer interstitials may block text screen
- **Workaround:** Dismiss or allow auto-timeout; consider adding retry logic

## 7. Success Criteria
- Test passes on Sauce RDC iOS device
- No hangs or timeout violations
- Screenshot evidence captured on any failure 