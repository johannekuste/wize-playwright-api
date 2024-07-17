// @ts-check
const { test, expect } = require('@playwright/test')

test('Visitar página de PokeAPI y realizar una consulta', async ({ page }) => {
    await page.goto('https://pokemon-apirest.netlify.app/')
    const searchInput = await page.locator('//input[@id="search"]')
    
    await searchInput.scrollIntoViewIfNeeded()
    await page.locator('//div[@class="searchbox"]').hover()
    await page.waitForTimeout(1000)
    await searchInput.fill('Pikachu')
    await searchInput.press('Enter')
  
    const response = await page.waitForResponse(response => 
        response.url() === 'https://pokeapi.co/api/v2/pokemon/25/' &&
        response.request().method() === 'GET'
      );
        
      // Assert that the response status is 200
      expect(response.status()).toBe(200);
    
      // Assert that the response status is 200
      expect(response.status()).toBe(200);
    await page.waitForTimeout(5000)
})