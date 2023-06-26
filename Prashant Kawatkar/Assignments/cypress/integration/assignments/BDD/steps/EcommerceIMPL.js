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
  homePage.clickOnShopTab();

  const productName = JSON.parse(this.userData.products);

  function selectProductByName(productName) {
    for (var index in productName) {
      productPage.selectProductByName(productName[index]);
    }
  }

  productPage.clickOnCheckoutButton();
});

When('validate the total price', () => {
  cartPage.validateTotalAmount();
});

Then('Select the country submit and verify Success message', () => {
  cartPage.clickOnCheckoutButton();

  cartPage.enterCountryDetails('India');
  cartPage.clickOnCountry();
  cartPage.clickOnAgreementCheckbox();
  cartPage.clickOnPurchaseButton();

  cartPage.validateSuccessText();
});

When('I fill the form details', (dataTable) => {
  homePage.enterUserName(dataTable.rawTable[1][0]);
  homePage.enterUserEmail(dataTable.rawTable[1][1]);
});

Then('validate the forms behaviuor', function () {
  homePage.validateRadioBtnVisibility();
});

Then('select the shop page', () => {
  homePage.clickOnShopTab();
});
