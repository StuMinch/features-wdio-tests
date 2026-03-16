import MainScreen from '../screens/MainScreen';
import NetworkCaptureScreen from '../screens/NetworkCaptureScreen';

describe('Network Capture', () => {
    it('should send requests and validate network capture', async () => {
        await MainScreen.networkCapture.waitForDisplayed({ timeout: 5000 });
        await MainScreen.networkCapture.click();

        await NetworkCaptureScreen.sendRequestsButton.waitForDisplayed({ timeout: 5000 });
        await NetworkCaptureScreen.sendRequestsButton.click();

        await browser.waitUntil(async () => {
            const success = await NetworkCaptureScreen.getSuccessCount();
            const failures = await NetworkCaptureScreen.getFailuresCount();
            return success + failures === 25;
        }, { timeout: 30000 });

        const success = await NetworkCaptureScreen.getSuccessCount();
        const failures = await NetworkCaptureScreen.getFailuresCount();

        expect(success + failures).toBe(25);
    });
});