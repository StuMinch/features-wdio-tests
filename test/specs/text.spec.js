import MainScreen from '../screens/MainScreen';
import TextScreen from '../screens/TextScreen';

describe('Test Text Input', () => {
    it('should tap on text', async () => {
        await MainScreen.text.waitForDisplayed({ timeout: 5000});
        await MainScreen.text.click();
    });
    
    it('should input text', async () => {
      await driver.pause(5000);
      await TextScreen.textField.waitForDisplayed({ timeout: 5000 });
      expect(await TextScreen.textField.isDisplayed()).toBe(true);
      await TextScreen.textField.setValue("This is some text");
      await browser.sauceVisualCheck('TextView Screen');
    });

    it('should tap the submit button', async () => {
      await TextScreen.submitButton.waitForDisplayed({ timeout: 5000 });
      expect(await TextScreen.submitButton.isDisplayed()).toBe(true);
      await TextScreen.submitButton.click();
    });

    it('should tap the back button', async () => {
      await TextScreen.backButton.waitForDisplayed({ timeout: 5000 });
      expect(await TextScreen.backButton.isDisplayed()).toBe(true);
      await TextScreen.backButton.click();
    });
  });