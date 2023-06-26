describe('Test suite for Alerts and pop-ups', function () {
  it('Test cases for Alerts and pop-ups', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Alerts
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    //Window:alert
    cy.on('window:alert', (strValue) => {
      expect(strValue).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    cy.on('window:confirm', (strValue) => {
      expect(strValue).to.equal('Hello , Are you sure you want to confirm?');
    });

    //Handling windows
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'qaclickacademy');
    cy.go('back');
  });
});
