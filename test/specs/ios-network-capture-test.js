import MainScreen from '../screens/MainScreen';
import NetworkCaptureScreen from '../screens/NetworkCaptureScreen';

describe('Test Sending 25 GET Requests', () => {
    it('should tap on network capture', async () => {
        await MainScreen.networkCapture.waitForDisplayed({ timeout: 5000 });
        await MainScreen.networkCapture.click();
      });
    
    it('should tap send get requests button', async () => {
      await NetworkCaptureScreen.sendRequests.waitForDisplayed({ timeout: 5000 });
      await NetworkCaptureScreen.sendRequests.click();
    });

    it('should wait for the requests to send', async () => {
      await driver.pause(5000);
    });
  });