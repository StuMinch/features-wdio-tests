// test/screens/NetworkCaptureScreen.js
class NetworkCaptureScreen {
    get backButton() {
      return $('~BackButton');
    }

    get sendRequestsButton() {
      return $('~Send 25 GET Requests');
    }

    get requestStatus() {
      return $('~Request Status');
    }

    get successText() {
      return $('//XCUIElementTypeStaticText[starts-with(@name, "Success:")]');
    }

    get failuresText() {
      return $('//XCUIElementTypeStaticText[starts-with(@name, "Failures:")]');
    }

    async getSuccessCount() {
      const text = await this.successText.getText();
      return parseInt(text.split('/')[0].split(':')[1].trim());
    }

    async getFailuresCount() {
      const text = await this.failuresText.getText();
      return parseInt(text.split('/')[0].split(':')[1].trim());
    }
  }
  
  export default new NetworkCaptureScreen();