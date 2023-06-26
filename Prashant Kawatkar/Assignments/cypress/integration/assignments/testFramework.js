/// <reference types="cypress"/>

describe('Framework practice', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('first framework', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('#exampleFormControlSelect1').type(this.data.gender);
    cy.get('input[name="name"]:nth-child(1)').should(
      'have.value',
      this.data.name
    );

    cy.get(':nth-child(2) > .nav-link').click();
    cy.selectProduct('Blackberry');
  });
});