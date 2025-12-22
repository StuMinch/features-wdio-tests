// test/screens/MainScreen.js
class MainScreen {
    get alerts() {
      return $('//*[@name="Alerts"]');
    }

    get networkThrottling() {
      return $('//*[@name="Network Throttling"]');
    }

    get networkCapture() {
      return $('//*[@name="Network Capture"]');
    }

    get applePay() {
      return $('//*[@name="Apple Pay"]');
    }

    get geoLocation() {
      return $('//*[@name="Geolocation"]');
    }
    
    get text() {
      return $('//*[@name="Text"]');
    }

    get qrCodeScanner() {
      return $('//*[@name="QR Code Scanner"]');
    }

    get biometrics() {
      return $('//*[@name="Biometrics"]');
    }
  
  }
  
  export default new MainScreen(); 