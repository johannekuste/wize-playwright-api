// @ts-check
const { test, expect } = require('@playwright/test')

test('Visitar página de PokeAPI y realizar una consulta', async ({ page }) => {
    const [response] = await Promise.all([
        page.waitForResponse(response => 
          response.url() === 'https://pokeapi.co/api/v2/type' &&
          response.request().method() === 'GET'
        ),
        await page.goto('https://pokemon-apirest.netlify.app/')
      ]);
    
    expect(response.status()).toBe(200);
    await page.waitForTimeout(5000)
})