const { test, expect } = require('@playwright/test');


test.describe('UI tests', async () => {
  test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

  test('verify page title for UI', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/')
    const title = page.locator('#title')
    await expect(title).toContainText('UI Test Automation')
  })

  test('next test of launch for UI', async ({ page }) => {
    await page.goto('/Scrollbars')
    await page.click("//button[@class='btn btn-primary']")
  })
});