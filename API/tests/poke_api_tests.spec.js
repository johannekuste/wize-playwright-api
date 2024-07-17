//@ts-check
const { test, expect } = require('@playwright/test');
const baseUrl = 'https://pokeapi.co/api/v2/'

test.describe('Buscar un pokemon existente', () => {
    // Test login endpoint for each user
    test('200, 304 - Pikachu localizado', async ({ request }) => {
        const response = await request.get(`${baseUrl}/pokemon/25`)
        expect(response.ok()).toBeTruthy();
    });

});

test.describe('Buscar un pokemon no existente', () => {
    test('404 NOT FOUND - Pichaku', async ({request}) => {
        const response = await request.get(`${baseUrl}/pokemon/pichaku`);
        expect(response.ok()).toBeFalsy();
    });
});