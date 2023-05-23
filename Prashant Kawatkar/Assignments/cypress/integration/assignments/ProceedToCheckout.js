describe('Green cart proceed to checkout', function() 
{
 
it('Test proceed to checkout',function() {
 
cy.visit(Cypress.env('url')+'/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')

cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').each(($productElement, index, $list) => {    
 
const textVeg=$productElement.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
cy.wrap($productElement).find('button').click()
}
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()

} )
} )