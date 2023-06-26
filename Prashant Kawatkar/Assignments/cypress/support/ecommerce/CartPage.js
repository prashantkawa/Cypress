class CartPage {

  getCheckoutButton() {
    return cy.contains('Checkout');
  }

  clickOnCheckoutButton() {
    this.getCheckoutButton().click();
  }

  getCartCheckoutButton() {
    return cy.contains('Checkout');
  }

  clickOnCartCheckoutButton() {
    this.getCartCheckoutButton().click();
  }

  getCountryEditBox() {
    return cy.get('#country');
  }

  enterCountryDetails(countryName) {
    this.getCountryEditBox().type(countryName);
  }

  getCountry() {
    return cy.get('.suggestions > ul > li > a');
  }

  clickOnCountry() {
    this.getCountry().click();
  }

  getAgreementCheckbox() {
    return cy.get('#checkbox2');
  }

  clickOnAgreementCheckbox() {
    this.getAgreementCheckbox().check({ force: true }).should('be.checked');
  }

  getPurchaseButton() {
    return cy.get('.ng-untouched > .btn');
  }

  clickOnPurchaseButton() {
    this.getPurchaseButton().click();
  }

  getSuccessText() {
    return cy.get('.alert');
  }

  validateSuccessText() {
    this.getSuccessText().should(
      'have.text',
      'Success! Thank you! Your order will be delivered in next few weeks :-).'
    );
    this.getSuccessText().then(function (element) {
      const actualTxt = element.text();
      expect(actualTxt.includes('Success')).to.be.true;
    });
  }

  getProductsAmount() {
    return cy.get('tr td:nth-child(4) > strong');
  }

  getTotalAmount() {
    return cy.get('h3 strong');
  }

  validateTotalAmount() {
    var expTotalAmount = 0;

    this.getProductsAmount()
      .each(($amountElement, index, $list) => {
        const amountInString = $amountElement.text();
        var res = amountInString.split(' ');
        res = res[1].trim();
        expTotalAmount = Number(expTotalAmount) + Number(res);
      })
      .then(function () {
        cy.log(expTotalAmount);
      });

    this.getTotalAmount().then(function (element) {
      const amount = element.text();
      var res = amount.split(' ');
      var total = res[1].trim();

      expect(Number(total)).to.equal(expTotalAmount);
    });
  }
}

export default CartPage;