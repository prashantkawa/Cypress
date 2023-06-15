/// <reference types="Cypress" />
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/Homepage";
import CartPage from "../../../../support/pageObjects/Cartpage";

const homePage = new HomePage();
const cartPage = new CartPage();


    Given('I open ecommerce page', ()=>{
    cy.visit(Cypress.env('url')+'/angularpractice/')
    })

    When('I add items to cart', ()=>{
    homePage.getShopTab().click()

    const productName = JSON.parse(this.userData.products)

    function selectProductByName(productName){
        for(var index in productName){
        cy.selectProduct(productName[index]);
        }
    };
    
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    })

    And('validate the total price', ()=>{
    var expTotalAmount = 0

    cy.get('tr td:nth-child(4) strong').each(($amountElement, index, $list)=>{
        const amountInString = $amountElement.text()
        var res = amountInString.split(" ")
        res = res[1].trim()
        expTotalAmount=Number(expTotalAmount)+Number(res)
        
    }).then(function(){

        cy.log(expTotalAmount)
    })

    cy.get('h3 strong').then(function(element){
        const amount = element.text()
        var res = amount.split(' ')
        var total = res[1].trim()

        expect(Number(total)).to.equal(expTotalAmount)
    })
    })

    Then('Select the country submit and verify Success message', ()=>{
        cartPage.getCheckoutButton().click()

         cy.get('#country').type('India')
         cy.get('.suggestions > ul > li > a').click()
         cy.get('#checkbox2').check({force: true}).should('be.checked')
         cy.get('.ng-untouched > .btn').click()

         cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
         cy.get('.alert').then(function(element){
         const actualTxt = element.text()
         expect(actualTxt.includes('Success')).to.be.true
    })
    })

    When('I fill the form details', (dataTable)=>{
        homePage.getNameEditBox().type(dataTable.rawTable[1][0])
        homePage.getEmailEditBox().type(dataTable.rawTable[1][1])
    })

    Then('validate the forms behaviuor', function(){
        homePage.getEntrepreneur().should('be.disabled')
    })

    And('select the shop page', ()=>{
        homePage.getShopTab().click()
    })