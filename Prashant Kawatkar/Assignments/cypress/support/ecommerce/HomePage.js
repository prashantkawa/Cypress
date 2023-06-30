class HomePage {
  
  getNameEditBox() {
    return cy.get('input[name="name"]:nth-child(2)');
  }

  enterUserName(userName) {
    this.getNameEditBox().type(userName);
  }

  getEmailEditBox() {
    return cy.get(':nth-child(2) > .form-control');
  }

  enterUserEmail(userEmail) {
    this.getEmailEditBox().type(userEmail);
  }

  getTwoWayDataBinding() {
    return cy.get('input[name="name"]:nth-child(1)');
  }

  getGenderEditBox() {
    return cy.get('select');
  }

  getEntrepreneur() {
    return cy.get('#inlineRadio3');
  }

  validateRadioBtnVisibility() {
    this.getEntrepreneur().should('be.disabled');
  }

  getShopTab() {
    return cy.get(':nth-child(2) > .nav-link');
  }

  selectShopTab() {
    this.getShopTab().click();
  }

  getSubmitButton() {
    return cy.get('.btn');
  }

  enterFormDetails(dataTable) {
    enterUserName(dataTable.rawTable[1][0]);
    enterUserEmail(dataTable.rawTable[1][1]);
  }
}

export default HomePage;
