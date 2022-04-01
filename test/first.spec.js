const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('next test of launch', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/')
    const title = page.locator('#title')
    await expect(title).toContainText('UI Test Automation')
})