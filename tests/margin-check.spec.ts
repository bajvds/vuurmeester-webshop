import { test, expect } from '@playwright/test';

// Test margin issues across different viewports
const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('Margin and overflow checks', () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
      });

      test('Homepage should not have horizontal overflow', async ({ page }) => {
        await page.goto('http://localhost:3000');
        await page.waitForLoadState('networkidle');

        // Check for horizontal overflow
        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        // Take screenshot
        await page.screenshot({ path: `screenshots/homepage-${viewport.name}.png`, fullPage: true });

        expect(hasOverflow).toBe(false);
      });

      test('Product page should not have horizontal overflow', async ({ page }) => {
        await page.goto('http://localhost:3000/product/ovengedroogd-haardhout-bigbag');
        await page.waitForLoadState('networkidle');

        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        await page.screenshot({ path: `screenshots/product-${viewport.name}.png`, fullPage: true });

        expect(hasOverflow).toBe(false);
      });

      test('Checkout page should not have horizontal overflow', async ({ page }) => {
        // First add something to cart
        await page.goto('http://localhost:3000');
        await page.waitForLoadState('networkidle');

        // Click first "In winkelwagen" button
        const addToCartBtn = page.locator('button:has-text("In winkelwagen")').first();
        if (await addToCartBtn.isVisible()) {
          await addToCartBtn.click();
          await page.waitForTimeout(500);
        }

        // Go to checkout
        await page.goto('http://localhost:3000/afrekenen');
        await page.waitForLoadState('networkidle');

        const hasOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > document.documentElement.clientWidth;
        });

        await page.screenshot({ path: `screenshots/checkout-${viewport.name}.png`, fullPage: true });

        expect(hasOverflow).toBe(false);
      });

      test('Cart drawer should fit within viewport', async ({ page }) => {
        await page.goto('http://localhost:3000');
        await page.waitForLoadState('networkidle');

        // Add item to cart
        const addToCartBtn = page.locator('button:has-text("In winkelwagen")').first();
        if (await addToCartBtn.isVisible()) {
          await addToCartBtn.click();
          await page.waitForTimeout(1000);

          // Cart drawer should be open
          const cartDrawer = page.locator('[role="dialog"]');
          if (await cartDrawer.isVisible()) {
            await page.screenshot({ path: `screenshots/cart-drawer-${viewport.name}.png` });

            // Check drawer doesn't overflow
            const drawerBox = await cartDrawer.boundingBox();
            if (drawerBox) {
              expect(drawerBox.x).toBeGreaterThanOrEqual(0);
              expect(drawerBox.x + drawerBox.width).toBeLessThanOrEqual(viewport.width);
            }
          }
        }
      });
    });
  }
});
