class CartPage
{
    getCheckoutButton(){
        return cy.contains('Checkout')
    }

    getCartCheckoutButton(){
        return cy.contains('Checkout')
    }

    getCountryEditBox(){
        return cy.get('#country')
    }

    getCountry(){
        return cy.get('.suggestions > ul > li > a')
    }

    getAgreementCheckbox(){
        return cy.get('#checkbox2')
    }

    getPurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    } 

    getSuccessText(){
        return cy.get('.alert')
    }

    getProductsAmount(){
        return cy.get('tr td:nth-child(4) > strong')
    }

    getTotalAmount(){
        return cy.get('h3 strong')
    }
}

export default CartPage