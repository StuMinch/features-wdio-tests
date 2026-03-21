class NetworkCaptureScreen {
    get send25GetRequestsButton() {
        return $('~Send 25 GET Requests');
    }

    get requestStatus() {
        return $('~Request Status');
    }

    async waitForScreen() {
        await this.send25GetRequestsButton.waitForDisplayed({ timeout: 10000 });
        await this.requestStatus.waitForDisplayed({ timeout: 10000 });
    }

    async sendRequests() {
        await this.send25GetRequestsButton.waitForDisplayed({ timeout: 10000 });
        await this.send25GetRequestsButton.click();
    }

    async waitForRequestStatus() {
        await this.requestStatus.waitForDisplayed({ timeout: 10000 });
    }
}

export default new NetworkCaptureScreen();