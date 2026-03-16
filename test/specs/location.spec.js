import MainScreen from '../screens/MainScreen';
import LocationScreen from '../screens/LocationScreen';

describe('Test Updating Geolocation', () => {
    it('should tap on location', async () => {
        await MainScreen.geoLocation.waitForDisplayed({ timeout: 5000 });
        await MainScreen.geoLocation.click();
      });

    it('should tap location permission button', async () => {
      try {
        await LocationScreen.locationPermissionButton.waitForDisplayed({ timeout: 5000 });
        await LocationScreen.locationPermissionButton.click();
      } catch (err) {
        console.log('Location permission prompt not displayed');
        }
      });

    it('should update the location to the New York Stock Exchange', async () => {
      await driver.setGeoLocation({
        latitude: 40.70703,
        longitude: -74.01121})
      });

    it('should wait for location to update', async () => {
      await driver.pause(5000);
      });
  });