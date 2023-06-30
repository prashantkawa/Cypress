/// <reference types="Cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../../support/ecommerce/Homepage';
import CartPage from '../../../../support/ecommerce/Cartpage';
import ProductPage from '../../../../support/ecommerce/ProductPage';

const homePage = new HomePage();
const cartPage = new CartPage();
const productPage = new ProductPage();

Given('I open ecommerce page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
});

When('I add items to cart', () => {
  productPage.addItemToCart();
});

Then('Validate the total price', () => {
  cartPage.validateTotalAmount();
});

When('Select country and submit the order', () => {
  cartPage.purchaseProduct();
});

Then('Verify Success message', () => {
  cartPage.validateSuccessText();
});

When('I fill the form details', (dataTable) => {
  homePage.enterFormDetails(dataTable);
});

Then('Validate the forms behaviuor', function () {
  homePage.validateRadioBtnVisibility();
});

Then('Select the shop page', () => {
  homePage.selectShopTab();
});
