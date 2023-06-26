/// <reference types="cypress"/>
import HomePage from '../pageObjects/homepage';
import ProductPage from '../pageObjects/productpage';
import CartPage from '../pageObjects/cartpage';

describe('Framework practice', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('first framework', function () {
    const homePage = new HomePage();
    const cartPage = new CartPage();

    cy.visit(Cypress.env('url') + '/angularpractice/');
    homePage.getNameEditBox().type(this.data.name);
    homePage.getGenderEditBox().type(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);

    homePage.getShopTab().click();

    cy.selectProduct('Blackberry');
    cy.selectProduct('Samsung Note 8');
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();

    var expTotalAmount = 0;

    cy.get('tr td:nth-child(4) strong')
      .each(($el, index, $list) => {
        const amountInString = $el.text();
        var res = amountInString.split(' ');
        res = res[1].trim();
        expTotalAmount = Number(expTotalAmount) + Number(res);
      })
      .then(function () {
        cy.log(expTotalAmount);
      });

    cy.get('h3 strong').then(function (element) {
      const amount = element.text();
      var res = amount.split(' ');
      var total = res[1].trim();

      expect(Number(total)).to.equal(expTotalAmount);
    });

    cartPage.getCheckoutButton().click();

    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').check({ force: true }).should('be.checked');
    cy.get('.ng-untouched > .btn').click();

    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualTxt = element.text();
      expect(actualTxt.includes('Success')).to.be.true;
    });
  });
});