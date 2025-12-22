// test/screens/AlertsScreen.js
class AlertsScreen {
    get generateAlertButton() {
      return $('~Generate Alert');
    }

    get okButton() {
      return $('~OK');
    }
  }
  
  export default new AlertsScreen(); 