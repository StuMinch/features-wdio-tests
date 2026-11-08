// test/screens/AlertsScreen.js
class AlertsScreen {
    get generateAlertButton() {
      return $('~alerts.generateButton');
    }

    get okButton() {
      return $('~OK');
    }
  }
  
  export default new AlertsScreen(); 
