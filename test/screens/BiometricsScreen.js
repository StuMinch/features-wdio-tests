class BiometricsScreen {
    get authenticateButton() {
        return $('~biometrics.authenticateButton');
    }

    get lockButton() {
        return $('~biometrics.lockButton');
    }

    get accessGrantedLabel() {
        return $('~Access Granted');
    }

    get errorLabel() {
        return $('~biometrics.errorLabel');
    }
}

export default new BiometricsScreen();
