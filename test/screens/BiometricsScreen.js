class BiometricsScreen {
    get authenticateButton() {
        return $('~Authenticate');
    }

    get biometrics() {
        return $('~Biometrics');
    }

    get lockedMessage() {
        return $('~Locked');
    }

    get accessGrantedMessage() {
        return $('~Access Granted');
    }
    
    get canceledMessage() {
        return $('~Canceled by user.');
    }

    get lockButton() {
        return $('~Lock');
    }
}

export default new BiometricsScreen();
