class HomePage{

    getNameEditBox(){
        return cy.get('input[name="name"]:nth-child(2)');
    }

    getEmailEditBox(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getTwoWayDataBinding(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGenderEditBox(){
        return cy.get('select')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3');
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getSubmitButton(){
        return cy.get('.btn');
    }
}

export default HomePage;