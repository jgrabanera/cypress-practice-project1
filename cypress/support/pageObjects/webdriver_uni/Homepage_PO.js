class HomePage_PO {
  visitHomepage() {
    //cy.visit('/');  use as base URL
    cy.visit(Cypress.env('webdriveruni_homepage'), { timeout: 60000 }); //use the environment variable and add specific timeout on the page
  }

  clickOn_ContactUs_Button() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, { timeout: 60000 }); // add specific timeout on Click
  }
}
export default HomePage_PO;
