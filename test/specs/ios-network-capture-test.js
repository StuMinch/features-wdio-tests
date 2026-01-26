import MainScreen from '../screens/MainScreen';
import NetworkCaptureScreen from '../screens/NetworkCaptureScreen';

describe('Test Network Capture', () => {
    it('should tap on network capture', async () => {
        await MainScreen.networkCapture.waitForDisplayed({ timeout: 5000 });
        await MainScreen.networkCapture.click();
      });
    
    it('should tap generate alert button', async () => {
      await NetworkCaptureScreen.requestsButton.waitForDisplayed({ timeout: 5000 });
      await NetworkCaptureScreen.requestsButton.click();
    });

    it('should wait for requests to send', async () => {
      await driver.pause(5000);
    });

  });