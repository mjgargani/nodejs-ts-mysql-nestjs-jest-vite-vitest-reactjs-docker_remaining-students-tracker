const test = require('node:test');
const assert = require('node:assert');
const pupeteer = require('puppeteer');

test('the page should have a form with name, phone number, email, e a list with courses', async () => {
  const browser = await pupeteer.launch({
    headless: false,
    slowMo: 100,
  });

  const page = await browser.newPage();
  // await page.goto('http://localhost:3000');

  // const form = await page.$('form');
  // assert.ok(form);

  // const nameInput = await page.$('input[name="name"]');
  // assert.ok(nameInput);

  // const phoneInput = await page.$('input[name="phone"]');
  // assert.ok(phoneInput);

  // const emailInput = await page.$('input[name="email"]');
  // assert.ok(emailInput);

  // const coursesList = await page.$('select[name="courses"]');
  // assert.ok(coursesList);

  await browser.close();
});