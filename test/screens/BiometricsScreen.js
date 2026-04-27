class BiometricsScreen {
    get authenticateButton() {
      return $('~biometrics.authenticateButton');
    }

    get accessGrantedLabel() {
      return $('~Access Granted');
    }

    get lockButton() {
      return $('~biometrics.lockButton');
    }

    get errorLabel() {
      return $('~biometrics.errorLabel');
    }

    async tapAuthenticate() {
      await this.authenticateButton.waitForDisplayed({ timeout: 5000 });
      await this.authenticateButton.click();
    }

    async tapLock() {
      await this.lockButton.waitForDisplayed({ timeout: 5000 });
      await this.lockButton.click();
    }

    async waitForAccessGranted() {
      await this.accessGrantedLabel.waitForDisplayed({ timeout: 5000 });
    }

    async waitForError() {
      await this.errorLabel.waitForDisplayed({ timeout: 5000 });
    }
}

export default new BiometricsScreen();