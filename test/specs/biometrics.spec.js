import MainScreen from '../screens/MainScreen';
import BiometricsScreen from '../screens/BiometricsScreen';

describe('Test Biometrics Authentication', () => {
    before(async () => {
        await MainScreen.biometrics.waitForDisplayed({ timeout: 10000 });
        await MainScreen.biometrics.click();
        await BiometricsScreen.waitForScreen();
    });

    beforeEach(async () => {
        await BiometricsScreen.resetToLockedState();
    });

    it('should authenticate successfully with biometrics', async () => {
        await BiometricsScreen.authenticateSuccessfully();
        await BiometricsScreen.waitForAccessGranted();

        expect(await BiometricsScreen.accessGrantedMessage.isDisplayed()).toBe(true);
        expect(await BiometricsScreen.lockButton.isDisplayed()).toBe(true);
    });

    it('should reject biometric authentication when biometrics fails', async () => {
        await BiometricsScreen.authenticateUnsuccessfully();
        await BiometricsScreen.waitForAuthenticationFailure();

        expect(await BiometricsScreen.canceledByUserMessage.isDisplayed()).toBe(true);
        expect(await BiometricsScreen.lockedLabel.isDisplayed()).toBe(true);
    });
});