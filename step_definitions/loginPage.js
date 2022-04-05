const { test, expect } = require('@playwright/test');
const login = require('./../screens/login.page')

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Login to the Letcode Application with correct Password', () => {
    test('Enter Email and Password', async ({ page }) => {
        await page.fill('koushik350@gmail.com', login.emailField)
        await page.fill('Pass123$', login.passwordField)
    })

    test('Submit', async ({ page }) => {
        await page.locator(login.signOut).click()
    })
})
