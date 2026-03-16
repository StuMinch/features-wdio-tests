// test/screens/LocationScreen.js
class LocationScreen {
    get locationPermissionButton() {
      return $('~Allow While Using App');
    }

    get addressLabel() {
      return $('//XCUIElementTypeOther[@name=\"VKPointFeature\" and @label=\"New York Stock Exchange\"]');
    }
  }
  
  export default new LocationScreen(); 