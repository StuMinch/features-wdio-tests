import MainScreen from '../screens/MainScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

describe('Biometrics Authentication', () => {
    it('should authenticate successfully', async () => {
        await MainScreen.biometrics.waitForDisplayed({ timeout: 5000 });
        await MainScreen.biometrics.click();

        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticate();

        // Simulate successful biometric authentication
        await driver.execute('sauce:biometrics-authenticate=true');

        await BiometricsScreen.accessGrantedText.waitForDisplayed({ timeout: 5000 });
        expect(await BiometricsScreen.accessGrantedText.isDisplayed()).toBe(true);
    });

    it('should fail authentication', async () => {
        await BiometricsScreen.lockButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.lock();

        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticate();

        // Simulate failed biometric authentication
        await driver.execute('sauce:biometrics-authenticate=false');

        await BiometricsScreen.canceledByUserText.waitForDisplayed({ timeout: 5000 });
        expect(await BiometricsScreen.canceledByUserText.isDisplayed()).toBe(true);
    });
});