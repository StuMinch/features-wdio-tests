// test/screens/TextScreen.js
class TextScreen {
    get textField() {
      return $('//*[@value="Enter your text here"]');
    }

    get submitButton() {
      return $('~Submit');
    }

    async inputText(text) {
      await this.textField.waitForDisplayed({ timeout: 5000 });
      await this.textField.setValue(text);
    }

    async submitForm() {
      await this.submitButton.waitForDisplayed({ timeout: 5000 });
      await this.submitButton.click();
    }
  }
  
  export default new TextScreen();
