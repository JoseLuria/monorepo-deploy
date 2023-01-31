const { test, expect } = require('@playwright/test')

test('has title after fetch', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'Fetch Data' }).click()
  const text = await page.getByRole('heading').textContent()
  expect(text).toBe('Hello World')
})
