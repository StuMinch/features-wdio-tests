import MainScreen from '../screens/MainScreen';
import NetworkCaptureScreen from '../screens/NetworkCaptureScreen';

const NETWORK_PROFILES = [
    'no-throttling',
    'no-network',
    '2G-packet-loss',
    '2G',
    '3G-slow',
    '3G-fast',
    '4G-slow',
    '4G-fast',
];

let activeNetworkProfile = 'unknown';

describe(`Test Network Capture - ${browser.capabilities['sauce:options']?.networkProfile || 'unknown'}`, () => {
    before(async () => {
        const capabilities = browser.capabilities;
        activeNetworkProfile = capabilities['sauce:options']?.networkProfile;

        await MainScreen.networkCapture.waitForDisplayed({ timeout: 10000 });
        await MainScreen.networkCapture.click();
        await NetworkCaptureScreen.waitForScreen();
    });

    it('should run with a valid network profile from SAUCE-RDC table', async () => {
        expect(NETWORK_PROFILES).toContain(activeNetworkProfile);
    });

    it('should send requests while network capture is enabled', async () => {
        await NetworkCaptureScreen.sendRequests();
        await NetworkCaptureScreen.waitForRequestStatus();
        expect(await NetworkCaptureScreen.requestStatus.isDisplayed()).toBe(true);
    });
});