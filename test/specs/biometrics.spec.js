import MainScreen from '../screens/MainScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

describe('Test Biometrics Authentication', () => {
    it('should simulate successful biometric authentication', async () => {
        await MainScreen.biometrics.waitForDisplayed({ timeout: 5000 });
        await MainScreen.biometrics.click();

        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticateButton.click();

        // Simulate successful biometric authentication on Sauce Labs real devices
        await driver.execute('sauce:biometrics-authenticate=true');

        await BiometricsScreen.accessGrantedMessage.waitForDisplayed({ timeout: 5000 });
    });

    it('should simulate unsuccessful biometric authentication', async () => {
        // First lock the app again to prepare for another authentication
        await BiometricsScreen.lockButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.lockButton.click();

        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticateButton.click();

        // Simulate unsuccessful biometric authentication on Sauce Labs real devices
        await driver.execute('sauce:biometrics-authenticate=false');

        await BiometricsScreen.canceledMessage.waitForDisplayed({ timeout: 5000 });
    });
});
