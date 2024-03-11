import { test, expect } from '@playwright/test';

test('has default location', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('body').textContent()).toContain('London');
});

test('invalid location shows error', async ({ page }) => {
  await page.goto('/?location=ggg&unit=celcius');

  expect(await page.locator('body').textContent()).toContain('Error');
});

test('invalid temperature measure unit shows error', async ({ page }) => {
  await page.goto('/?location=london&unit=ggg');

  expect(await page.locator('body').textContent()).toContain('Error');
});

test('location Bristol shows', async ({ page }) => {
  await page.goto('/?location=bristol&unit=celcius');

  expect(await page.locator('body').textContent()).toContain('Bristol');
});

test('location Brighton shows', async ({ page }) => {
  await page.goto('/?location=brighton&unit=celcius');

  expect(await page.locator('body').textContent()).toContain('Brighton');
});

test('location New York shows', async ({ page }) => {
  await page.goto('/?location=new+york&unit=celcius');

  expect(await page.locator('body').textContent()).toContain('New York');
});
