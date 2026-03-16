// test/screens/BiometricsScreen.js
class BiometricsScreen {
    get backButton() {
      return $('~BackButton');
    }

    get authenticateButton() {
      return $('~Authenticate');
    }

    get accessGrantedText() {
      return $('~Access Granted');
    }

    get canceledByUserText() {
      return $('~Canceled by user.');
    }

    get lockButton() {
      return $('~Lock');
    }

    get lockedText() {
      return $('~Locked');
    }

    async authenticate() {
      await this.authenticateButton.click();
    }

    async lock() {
      await this.lockButton.click();
    }
  }
  
  export default new BiometricsScreen();