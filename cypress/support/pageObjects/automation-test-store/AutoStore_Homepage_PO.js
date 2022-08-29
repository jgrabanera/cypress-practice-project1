class AutoStore_Homepage_PO {
  accessHomepage() {
    cy.visit('https://automationteststore.com/');
  }

  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  }

  clickOn_Contact_Us_Page() {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact/');
  }
}

export default AutoStore_Homepage_PO;
