// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.floristeriamundoflor.com/',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
  projects: [
    // Proyecto base normal (si quieres seguir corriendo tu suite habitual)
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // testMatch: ['tests/**/*.spec.ts'], // tu patrón normal
    },

    // Setup del carrito (solo el/los tests que agregan)
    {
      name: 'cart-setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: ['tests/e2e/add.two.products.spec.ts'],
    },

    // Cleanup del carrito (depende de cart-setup y arranca con ese estado)
    {
      name: 'cart-cleanup',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.state/cart.json', // lo genera el setup
      },
      testMatch: ['tests/e2e/delete.products.spec.ts'],
      dependencies: ['cart-setup'],
    },
  ],
});
