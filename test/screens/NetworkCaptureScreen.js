// test/screens/NetworkCaptureScreen.js
class NetworkCaptureScreen {
    get requestsButton() {
      return $('//*[@text=\"Generate Network Traffic\"]');
    }
  }

  export default new NetworkCaptureScreen(); 