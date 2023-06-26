describe('Add products to cart', function () {
  it('Test Add to cart', function () {
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.product').should('have.length', 5);
    cy.get('.product:visible').should('have.length', 4);

    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get(':nth-child(3) > .product-action > button').click();
    cy.get('@productLocator')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click();
    cy.get('@productLocator')
      .find('.product')
      .each(($productElement, index, $list) => {
        const textVeg = $productElement.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          cy.wrap($productElement).find('button').click();
        }
      });

    cy.get('.brand').should('have.text', 'GREENKART');

    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});