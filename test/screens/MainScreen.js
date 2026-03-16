// test/screens/MainScreen.js
class MainScreen {
    get alerts() {
      return $('~Alerts');
    }

    get networkThrottling() {
      return $('~Network Throttling');
    }

    get networkCapture() {
      return $('~Network Capture');
    }

    get applePay() {
      return $('~Apple Pay');
    }

    get geoLocation() {
      return $('~Geolocation');
    }
    
    get text() {
      return $('~Text');
    }

    get qrCodeScanner() {
      return $('~QR Code Scanner');
    }

    get biometrics() {
      return $('~Biometrics');
    }
  
  }
  
  export default new MainScreen(); 