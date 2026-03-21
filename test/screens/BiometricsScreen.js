class BiometricsScreen {
    get title() {
        return $('~Biometrics');
    }

    get authenticateButton() {
        return $('~Authenticate');
    }

    get lockedLabel() {
        return $('~Locked');
    }

    get accessGrantedMessage() {
        return $('~Access Granted');
    }

    get lockButton() {
        return $('~Lock');
    }

    get canceledByUserMessage() {
        return $('~Canceled by user.');
    }

    async waitForScreen() {
        await this.title.waitForDisplayed({ timeout: 10000 });
        await this.authenticateButton.waitForDisplayed({ timeout: 10000 });
    }

    async waitForLockedState() {
        await this.lockedLabel.waitForDisplayed({ timeout: 10000 });
        await this.authenticateButton.waitForDisplayed({ timeout: 10000 });
    }

    async tapAuthenticate() {
        await this.authenticateButton.waitForDisplayed({ timeout: 10000 });
        await this.authenticateButton.click();
    }

    async authenticateSuccessfully() {
        await this.tapAuthenticate();
        await driver.execute('sauce:biometrics-authenticate=true');
    }

    async authenticateUnsuccessfully() {
        await this.tapAuthenticate();
        await driver.execute('sauce:biometrics-authenticate=false');
    }

    async waitForAccessGranted() {
        await this.accessGrantedMessage.waitForDisplayed({ timeout: 10000 });
        await this.lockButton.waitForDisplayed({ timeout: 10000 });
    }

    async waitForAuthenticationFailure() {
        await this.canceledByUserMessage.waitForDisplayed({ timeout: 10000 });
        await this.lockedLabel.waitForDisplayed({ timeout: 10000 });
    }

    async resetToLockedState() {
        if (await this.lockButton.isExisting()) {
            await this.lockButton.waitForDisplayed({ timeout: 10000 });
            await this.lockButton.click();
        }

        await this.waitForLockedState();
    }
}

export default new BiometricsScreen();