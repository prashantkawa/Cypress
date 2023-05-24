import CartPage from "../pageObjects/CartPage"
import HomePage from "../pageObjects/HomePage"

describe('Add product to cart', function(){

    before(function(){
        cy.fixture('data').then(function(userData){
            this.userData = userData
        })
    })

    it('Test add to cart and proceed to checkout', function(){
        const homePage = new HomePage();
        const cartPage = new CartPage();

        cy.visit(Cypress.env('url')+'/angularpractice/')

        homePage.getNameEditBox().type(this.userData.name)
        homePage.getEmailEditBox().type(this.userData.email)
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getSubmitButton().click()

        homePage.getShopTab().click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')
        cy.selectProduct('iphone X')

        cartPage.getCheckoutButton().click()

        var sum = 0

        cartPage.getProductsAmount().each(($amountElement, index, $list)=>{
            const actualAmount = $amountElement.text()
            var result = actualAmount.split(' ')
            result = result[1].trim()
            sum = Number(sum) + Number(result)
        })

        cartPage.getTotalAmount().then(function(totalAmtElement){
            const actualAmount = totalAmtElement.text()
            var result = actualAmount.split(' ')
            var total = result[1].trim()

            expect(Number(total)).to.equal(sum)
        })

        cartPage.getCartCheckoutButton().click()

        cartPage.getCountryEditBox().type('India')
        cartPage.getCountry().click()
        cartPage.getAgreementCheckbox().click({force:true})
        cartPage.getPurchaseButton().click()

        cartPage.getSuccessText().then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})