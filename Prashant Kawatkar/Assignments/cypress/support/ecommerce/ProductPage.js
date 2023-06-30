import ProductPage from '../../../../support/ecommerce/ProductPage';
import HomePage from '../../../../support/ecommerce/Homepage';

const productPage = new ProductPage();
const homePage = new HomePage();

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

  addItemToCart() {
    homePage.clickOnShopTab();

    const productName = JSON.parse(this.userData.products);

    function selectProductByName(productName) {
      for (var index in productName) {
        productPage.selectProductByName(productName[index]);
      }
    }

    productPage.clickOnCheckoutButton();
  }
}

export default ProductPage;
