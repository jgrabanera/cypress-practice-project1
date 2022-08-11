import HomePage_PO from '../../support/pageObjects/webdriver_uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver_uni/Contact_Us_PO';

/// <reference types="Cypress" />

describe('Test Contact Us Form via WebdriverUni', () => {
  const homepage_PO = new HomePage_PO();
  const contactus_PO = new Contact_Us_PO();

  before(() => {
    cy.fixture('example').then((data) => {
      globalThis.data = data; // use this.data = data; if not work
    });
  });

  beforeEach(() => {
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();

    //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }); Added on Homepage's Page Object
  });

  it('Validate active document properties', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //validate active document properties
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
  });

  it('Should be able to submit a successful submission via contact us form', () => {
    contactus_PO.webdrivderUni_ContactForm_Submit(Cypress.env('first_name'), data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    contactus_PO.webdrivderUni_ContactForm_Submit(data.first_name, data.last_name, ' ', data.body, 'body', 'Error: Invalid email address');
  });
});
