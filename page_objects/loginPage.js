const ActionHelper = require('../helpers/actionHelpers')
const { test, expect } = require('@playwright/test');
const { login, emailField, passwordField, submit, signOut } = require('./../screens/login.page');

class loginPage {
    async launchURL(url) {
        ActionHelper.launchBrowserUrl(url)
    }

    async fillEmailDetails(email, emailField) {
        ActionHelper.enterEmailDetails(email, emailField)
    }

    async fillPasswordDetails(password, passwordField) {
        ActionHelper.enterPasswordDetails(password, passwordField)
    }

    async loginSuccessCriteria(signOut) {
        ActionHelper.loginSuccess(signOut)
    }

}

module.exports = new loginPage;