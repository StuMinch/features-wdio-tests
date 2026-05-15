// test/screens/TextScreen.js
class TextScreen {
    get textField() {
      return $('//*[@value="Enter your text here"]');
    }

    get submitButton() {
      return $('~Submit');
    }

    get backButton() {
      return $('~Back');
    }
  }
  
  export default new TextScreen(); 