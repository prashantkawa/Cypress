/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Working with IFrame', function () {
  it('Test to handle IFrame', function () {
    cy.visit(Cypress.env('url') + '/AutomationPractice/');
    cy.frameLoaded('#courses-iframe');
  });
});