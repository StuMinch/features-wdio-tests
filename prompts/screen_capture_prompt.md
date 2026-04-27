## Describe a screen capture 

The goal of this task is to execute a test and if it fails, download the screenshot from the test results, and describe what happened on the screen at the time of failure.

### Data Center and API Base URL
|Data Center|API Base URL|
|-----|-----|
|US West|https://api.us-west-1.saucelabs.com/|
|US East|https://api.us-east-4.saucelabs.com/|
|Europe|https://api.eu-central-1.saucelabs.com/|

### Steps

- If the user does not specify a data center default to US West
- The Sauce Labs username is already stored in an environment variable $SAUCE_USERNAME
- The Sauce Labs access key is already stored in an environment variable $SAUCE_ACCESS_KEY
- Every Sauce Labs job has a unique job ID
- Must obtain the job ID from the session URL as early as possible. Example WebdriverIO output: [0-0] 2026-03-26T18:56:00.963Z INFO webdriver: [POST] https://ondemand.us-west-1.saucelabs.com/wd/hub/session/2956c75de0ba4154a8eee894b3e5c09a/execute/sync
- The command `grep -oE "[a-f0-9]{32}"` can help with this.
- Extract the job ID and store it in a variable named `job_id`
- Use the Get All Screenshots API endpoint: /rest/v1/{$SAUCE_USERNAME}/jobs/{job_id}/assets/screenshots.zip
- Download the screenshots to the `screenshots` folder
- Extract the ZIP archive
- Analyze and provide a summary of the most recent screenshot that was collected
