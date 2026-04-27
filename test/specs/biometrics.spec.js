import MainScreen from '../screens/MainScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

describe('Biometric Authentication', () => {
    it('should navigate to the Biometrics screen', async () => {
        await MainScreen.biometrics.waitForDisplayed({ timeout: 5000 });
        await MainScreen.biometrics.click();
    });

    it('should successfully authenticate with biometrics', async () => {
        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticateButton.click();
        await driver.execute('sauce:biometrics-authenticate=true');
        await BiometricsScreen.accessGrantedLabel.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.lockButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.lockButton.click();
    });

    it('should fail biometric authentication', async () => {
        await BiometricsScreen.authenticateButton.waitForDisplayed({ timeout: 5000 });
        await BiometricsScreen.authenticateButton.click();
        await driver.execute('sauce:biometrics-authenticate=false');
        await BiometricsScreen.errorLabel.waitForDisplayed({ timeout: 5000 });
    });
});
