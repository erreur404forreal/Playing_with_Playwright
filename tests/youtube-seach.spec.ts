//Playwright module
import { test, expect } from '@playwright/test';

//Test
test('validate YouTube title', async ({ page }) => {
 //Go to url
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
        //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByPlaceholder('Search').fill('Abel Selaocoe - Emmanuele (Official Video)');
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click(); 
        //click on video
        await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Abel Selaocoe - Emmanuele (Official Video) 4 minutes, 52 seconds' }).first().click();
        //validate title
    await expect(page).toHaveTitle('Abel Selaocoe - Emmanuele (Official Video) - YouTube');
});