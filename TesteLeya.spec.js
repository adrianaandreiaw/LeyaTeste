const { test, expect } = require('@playwright/test');

test('scenario 1', async ({ page }) => {
//scenario 1

  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('George');
  await page.locator(".icon-lupa").first().click();
  await page.waitForTimeout(3000);
  await page.locator(".icon-lupa").first().click();

  await expect(page.getByText('O Triunfo dos Porcos')).toBeVisible();
  await page.getByRole('link', { name: 'O Triunfo dos Porcos GEORGE' }).click();
  await page.waitForTimeout(3000);
  await expect(page.getByText('Quinta Manor')).toBeVisible();

});

test('scenario 2', async ({ page }) => {
//scenario 2
await page.goto('https://www.leyaonline.com/pt/');
await page.getByPlaceholder('pesquisa').click();
await page.waitForTimeout(3000);
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.waitForTimeout(3000);
  await page.locator(".icon-lupa").first().click();
  await page.waitForTimeout(3000);
  await page.locator(".book-title").first().click();
  await page.waitForTimeout(3000);
  expect(await page.locator('.author').locator('.nome_autor').textContent()).toEqual('GEORGE ORWELL');
  await expect(page.getByText('ISBN: 9789722071550')).toBeVisible();
  await expect(page.getByText('Páginas: 344')).toBeVisible();
  await expect(page.getByText('Dimensões: 235 x 157 x 23 mm')).toBeVisible();
});

  test('scenario 3', async ({ page }) => {
  //scenario 3

  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.waitForTimeout(3000);
  await page.locator(".icon-lupa").first().click();
  await page.waitForTimeout(3000);
  await page.locator(".book-title").first().click();
  const author1 = await page.locator('.author').locator('.nome_autor').textContent();
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('');
  await page.getByPlaceholder('pesquisa').press('CapsLock');
  await page.getByPlaceholder('pesquisa').fill('A');
  await page.getByPlaceholder('pesquisa').press('CapsLock');
  await page.getByPlaceholder('pesquisa').fill('A quinta dos animais');
  await page.locator(".icon-lupa").first().click();

  const author2 =  await page.locator('.author').locator('.nome_autor').textContent();

  expect(author1).toEqual(author2);

});

  test('scenario 4', async ({ page }) => {
  //scenario 4 
  await page.goto('https://www.leyaonline.com/pt/');
  await page.getByPlaceholder('pesquisa').click();
  await page.getByPlaceholder('pesquisa').fill('1984');
  await page.waitForTimeout(3000);

  await page.locator(".icon-lupa").first().click();
  await page.waitForTimeout(3000);
  await page.locator('.buy-button').first().click();
  const cartn = await page.locator(".b-count").first().textContent()
  expect(cartn).toEqual("1");

});

  test('scenario 5', async ({ page }) => {
  //scenario 5
  await page.goto('https://www.leyaonline.com/pt/');
  await page.locator('.icon-sun').click();
  await expect(page.locator('.icon-moon')).toBeVisible();
});

test('scenario 6', async ({ page }) => {

//scenario 6
//Ir ao menu Ebooks e validar que o livro A Princesa de Duna tem disponivel a imagem que corresponde a audiobook
  await page.goto('https://www.leyaonline.com/pt/');
  await page.locator(".icon-hamburguer").first().click();
  await page.getByRole('link', { name: 'Ebooks' }).click();
  await page.getByRole('link', { name: '-10% A Princesa de Duna' }).click();
  await expect(page.locator('section').filter({ hasText: '-10% A Princesa de Duna BRIAN' }).locator('img').nth(1)).toBeVisible();
});

test('scenario 7', async ({ page }) => {

//scenario 7
//Verificar que no footer da página tem a secção Politica de Cookies e Politica de Privacidade

await page.goto('https://www.leyaonline.com/pt/');
await page.getByRole('button', { name: 'Close' }).click();
await page.getByRole('link', { name: 'Política de Cookies' }).click();
await expect(page.getByRole('heading', { name: 'Política de Cookies' })).toBeVisible();
await page.getByRole('contentinfo').getByRole('link', { name: 'Política de Privacidade' }).click();
await expect(page.getByRole('heading', { name: 'Política de Privacidade' })).toBeVisible();
});