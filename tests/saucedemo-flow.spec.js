const { test, expect } = require("@playwright/test");

test("Login - Add to Cart - View Chart - Checkout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Login
  await page.fill("#user-name", "standard_user"); // Mencari textfield/input dengan id 'user-name' kemudian diisi dengan 'standard_user'
  await page.fill("#password", "secret_sauce"); // Mencari textfield/input dengan id 'password' kemudian diisi dengan 'secret_sauce'
  await page.click("#login-button"); // Mencari button dengan id 'login-button' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html"); // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/inventory.html'
  // Add to Cart
  await page.click(".inventory_item:nth-child(1) .btn_primary"); // Mencari elemen dengan class 'inventory_item' yang merupakan child ke-1 kemudian mencari button dengan class 'btn_primary' kemudian di klik
  await page.click(".inventory_item:nth-child(2) .btn_primary"); // Mencari elemen dengan class 'inventory_item' yang merupakan child ke-2 kemudian mencari button dengan class 'btn_primary' kemudian di klik
  await expect(page.locator(".shopping_cart_badge")).toHaveText("2"); // Memastikan elemen dengan class 'shopping_cart_badge' memiliki teks '2' (sudah add 2 item ke cart)
  // View Cart
  await page.click(".shopping_cart_link"); // Mencari elemen dengan class 'shopping_cart_link' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");  // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/cart.html'
  // Checkout
  await page.click("#checkout"); // Mencari elemen dengan id 'checkout' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html"); // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/checkout-step-one.html'
  await page.fill("#first-name", "Retno"); // Mencari textfield/input dengan id 'first-name' kemudian diisi dengan 'Retno'
  await page.fill("#last-name", "Sari"); // Mencari textfield/input dengan id 'last-name' kemudian diisi dengan 'Sari'
  await page.fill("#postal-code", "12345"); // Mencari textfield/input dengan id 'postal-code' kemudian
  await page.click("#continue"); // Mencari elemen dengan id 'continue' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html"); // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/checkout-step-two.html'
  // Finish Checkout
  await page.click("#finish"); // Mencari elemen dengan id 'finish' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html"); // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/checkout-complete.html'
  await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!"); // Memastikan elemen dengan class 'complete-header' memiliki teks 'Thank you for your order!'
  // Logout
  await page.click("#react-burger-menu-btn"); // Mencari elemen dengan id 'react-burger-menu-btn' kemudian di klik
  await page.click("#logout_sidebar_link"); // Mencari elemen dengan id 'logout_sidebar_link' kemudian di klik
  await expect(page).toHaveURL("https://www.saucedemo.com/"); // Memastikan URL yang dituju adalah 'https://www.saucedemo.com/'
});
