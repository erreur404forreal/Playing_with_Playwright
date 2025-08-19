import { test, expect } from '@playwright/test';

test('validate YouTube title', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByPlaceholder('Search').fill('Abel Selaocoe - Emmanuele (Official Video)');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click(); 
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Abel Selaocoe - Emmanuele (Official Video) 4 minutes, 52 seconds' }).first().click();
    await expect(page).toHaveTitle('Abel Selaocoe - Emmanuele (Official Video) - YouTube');
});