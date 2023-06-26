/// <reference types="cypress"/>

describe('Checking checkboxes and dropdowns', () => {
  xit('Checkbox', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1').check().should('be.checked');
  });

  it('Dropdown', () => {
    //Static dropdown
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('Select').select('option2').should('have.value', 'option2');
    //Dynamic dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
      if ($e1.text() === 'India') {
        cy.wrap($e1).click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');

    //Visible not visible verification
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');

    //Handling Radio buttons

    cy.get('[value="radio2"]').check().should('be.checked');
  });
});