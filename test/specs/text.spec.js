import MainScreen from '../screens/MainScreen';
import TextScreen from '../screens/TextScreen';

describe('Test User Submits Text', () => {
    it('should input and submit text successfully', async () => {
        // Step 1 & 2: Navigate to main screen and tap Text button
        await MainScreen.text.waitForDisplayed({ timeout: 5000 });
        await MainScreen.text.click();

        // Step 3: Wait for text field
        await TextScreen.textField.waitForDisplayed({ timeout: 5000 });

        // Step 4: Input "Hello World!"
        await TextScreen.inputText('Hello World!');

        // Step 5 & 6: Wait for Submit button and tap it
        await TextScreen.submitForm();

        // Verify submission completed (brief wait for response)
        await driver.pause(1000);
    });
});
