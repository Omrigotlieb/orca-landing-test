import { test, expect } from "@playwright/test";

const BASE_URL = process.env.PREVIEW_URL || "http://localhost:3000";

test.describe("Landing Page", () => {
  test("homepage loads with HTTP 200", async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBe(200);
  });

  test("has correct title", async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/ORCA/i);
  });

  test("no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(BASE_URL);
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("responsive layout - mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });

  test("responsive layout - tablet", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });

  test("responsive layout - desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(BASE_URL);
    const body = page.locator("body");
    await expect(body).toBeVisible();
  });

  test("no broken links", async ({ page }) => {
    await page.goto(BASE_URL);
    const links = await page.locator("a[href]").all();
    for (const link of links) {
      const href = await link.getAttribute("href");
      if (href && href.startsWith("http")) {
        const response = await page.request.get(href);
        expect(response.status()).toBeLessThan(400);
      }
    }
  });
});
