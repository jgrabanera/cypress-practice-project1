class HomePage_PO {
  visitHomepage() {
    //cy.visit('/');  use as base URL
    cy.visit(Cypress.env('webdriveruni_homepage')); //use the environment variable
  }

  clickOn_ContactUs_Button() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
  }
}
export default HomePage_PO;
