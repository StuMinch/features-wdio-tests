import MainScreen from '../screens/MainScreen';
import LocationScreen from '../screens/LocationScreen';

describe('Test Updating Geolocation', () => {
    it('should tap on location', async () => {
        await MainScreen.geoLocation.waitForDisplayed({ timeout: 5000 });
        await MainScreen.geoLocation.click();
      });

    it('should tap location permission button', async () => {
      await LocationScreen.locationPermissionButton.waitForDisplayed({ timeout: 5000 });
      await LocationScreen.locationPermissionButton.click();
    });

    it('should update the location', async () => {
      await driver.setGeoLocation({
        latitude: 40.7128,
        longitude: -74.0060
        });
    });

    it('should wait for location to update', async () => {
      await driver.pause(5000);
    });

  });