import MainScreen from '../screens/MainScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

describe('Test Biometrics Authentication', () => {
    it('should authenticate successfully and then reject an unsuccessful attempt', async () => {
        await MainScreen.biometrics.waitForDisplayed({ timeout: 5000 });
        await MainScreen.biometrics.click();

        await BiometricsScreen.tapAuthenticate();
        await driver.execute('sauce:biometrics-authenticate=true');
        await BiometricsScreen.waitForAccessGranted();
        expect(await BiometricsScreen.accessGrantedLabel.isDisplayed()).toBe(true);

        await BiometricsScreen.tapLock();
        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });

        await BiometricsScreen.tapAuthenticate();
        await driver.execute('sauce:biometrics-authenticate=false');
        await BiometricsScreen.waitForError();
        expect(await BiometricsScreen.errorLabel.isDisplayed()).toBe(true);
    });
});