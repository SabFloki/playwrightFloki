const { test, expect } = require('@playwright/test');
const { firefox } = require('@playwright/test');
const login = require('./../screens/login.page')

test.describe('Login to the Letcode Application with correct Password', () => {
    test('Enter Email and Password and submit', async () => {
        const browser = await firefox.launch();
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        const page = await context.newPage();
        // Make sure to await close, so that videos are saved.
        await page.goto('https://letcode.in/signin')
        await page.locator(login.emailField).type('koushik350@gmail.com')
        await page.locator(login.passwordField).type('Pass123$')
        await page.locator(login.submit).click()
        await Promise.all([
            await page.waitForNavigation(),
            expect(page.locator(login.toast)).toBeVisible(),
            await page.locator(login.toast).click()
        ])
        await page.locator(login.signOut).click()
        await browser.close()
    })

})
