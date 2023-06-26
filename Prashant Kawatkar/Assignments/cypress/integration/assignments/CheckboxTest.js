describe('Test suite for checkbox, Dropdown and Radion button', function () {
  it('Test case for checkbox, Dropdown and Radion button', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Check box
    cy.get('#checkBoxOption2').check().should('be.checked');
    cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
    cy.get("input[type='checkbox']").check(['option1', 'option3']);

    //Static dropdown
    cy.get('select').select('option3').should('have.value', 'option3');

    //Dynamic dropdown
    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {
      if ($e1.text() === 'India') {
        cy.wrap($e1).click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');

    //Visible and Invisible elements
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');

    //Radio buttons
    cy.get('[value="radio2"]').check().should('be.checked');
  });
});