const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/')
})

test.describe('All navigations of execution', () => {
    test('Dynamic ID', async ({ page }) => {
        await Promise.all([
            page.waitForNavigation(),
            page.click("(//div[@class='col-sm']//a)[3]")])
        await page.locator('button:has-text("Button with Dynamic ID")').click()
    })

    test('Class Attribute', async ({ page }) => {
        await page.click('text="Class Attribute"')
        page.on('dialog', dialog => dialog.accept());
        await page.waitForTimeout(2000)
        await page.click("//button[contains(@class,'btn class1')]")
        const noTY = await page.locator('//*[contains(text(),"Button")]').count()
        expect(noTY).toEqual(3)
    })
})