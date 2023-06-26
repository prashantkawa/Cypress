class ProductPage {

  getCheckoutButton() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
  }

  selectProductByName(productName) {
    cy.selectProduct(productName);
  }

  clickOnCheckoutButton() {
    this.getCheckoutButton().click();
  }
}

export default ProductPage;