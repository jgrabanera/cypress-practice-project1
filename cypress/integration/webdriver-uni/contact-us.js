/// <reference types="Cypress" />

describe('Test Contact Us Form via WebdriverUni', () => {
  before(() => {
    cy.fixture('example').then((data) => {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
  });

  it('Validate active document properties', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //validate active document properties
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
  });

  it('Should be able to submit a successful submission via contact us form', () => {
    cy.webdrivderUni_ContactForm_Submit(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    cy.webdrivderUni_ContactForm_Submit(data.first_name, data.last_name, ' ', data.body, 'body', 'Error: Invalid email address');
  });
});
