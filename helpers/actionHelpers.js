const { test, expect, page } = require('@playwright/test');

class ActionHelper {

    async launchBrowserUrl(urlToLaunch) {
        await page.goto(urlToLaunch)
    }

    async enterEmailDetails(email, locator) {
        await page.fill(locator, email)
    }

    async enterPasswordDetails(Password, locator) {
        await page.fill(locator, Password)
    }

    async loginSuccess(locator) {
        await page.locator(locator).isVisible()
    }
}

module.exports = new ActionHelper;
