import MainScreen from '../screens/MainScreen';
import TextScreen from '../screens/TextScreen';

const EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;

describe('Test Text Input', () => {
    it('should tap on text', async () => {
        await MainScreen.text.waitForDisplayed({ timeout: 5000});
        await MainScreen.text.click();
    });

    it('should assert visibility of all elements', async () => {
      await TextScreen.textField.waitForDisplayed({ timeout: 5000 });
      await TextScreen.submitButton.waitForDisplayed({ timeout: 5000 });
      await TextScreen.backButton.waitForDisplayed({ timeout: 5000 });
    });

    it('should input text', async () => {
      await TextScreen.textField.setValue("This is some text");
    });

    it('should tap the submit button', async () => {
      await TextScreen.submitButton.click();
    });

    it('should tap the back button', async () => {
      await TextScreen.backButton.click();
    });
/*
    it('should take visual snapshot', async () => {
      await browser.sauceVisualCheck('TextView Screen');
      await browser.sauceVisualResults();
      expect((await browser.sauceVisualResults()).UNAPPROVED).toBe(EXPECTED_TOTAL_UNAPPROVED_DIFFS);
    });
*/
  });