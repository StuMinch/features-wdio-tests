import MainScreen from '../screens/MainScreen';
import AlertsScreen from '../screens/AlertsScreen';

describe('Test Generating Alerts', () => {
    it('should tap on alerts', async () => {
        await MainScreen.alerts.waitForDisplayed({ timeout: 5000 });
        await MainScreen.alerts.click();
      });
    
    it('should tap generate alert button', async () => {
      await AlertsScreen.generateAlertButton.waitForDisplayed({ timeout: 5000 });
      await AlertsScreen.generateAlertButton.click();
    });

    it('should tap the ok button', async () => {
      await AlertsScreen.okButton.waitForDisplayed({ timeout: 5000 });
      await AlertsScreen.okButton.click();
    });

    it('should confirm generate button is visible again', async () => {
      await AlertsScreen.generateAlertButton.waitForDisplayed({ timeout: 5000 });
      expect(await AlertsScreen.generateAlertButton.isDisplayed()).toBe(true);
    });
  });