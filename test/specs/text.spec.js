import MainScreen from '../screens/MainScreen';
import TextScreen from '../screens/TextScreen';

describe('Test Text Input', () => {
    it('should tap on text', async () => {
        await MainScreen.text.waitForDisplayed({ timeout: 5000});
        await MainScreen.text.click();
    });
    
    it('should input text', async () => {
      await TextScreen.textField.setValue("This is some text");
      await browser.sauceVisualCheck('TextView Screen');
    });

    it('should tap the submit button', async () => {
      await TextScreen.submitButton.click();
    });

    it('should tap the back button', async () => {
      await TextScreen.backButton.click();
    });
  });