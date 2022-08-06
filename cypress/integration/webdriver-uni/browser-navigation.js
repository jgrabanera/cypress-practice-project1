/// <reference types="Cypress" />

describe('Validate WebdriverUni homepage links', () => {
  it.only('Confirm links redirect to the correct pages', () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")

    cy.visit('/');
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'contactus');

    //cy.navigateToContactPage();

    cy.go('back');
    cy.reload();
    //cy.reload(true) // reload without loading cache

    cy.go('forward');
    cy.url().should('include', 'contactus');
    cy.wait(1000);
    cy.go('back');

    cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'Login-Portal');
    cy.wait(1000);
    cy.go('back');

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'To-Do-List');
    cy.wait(1000);
    cy.go('back');

    cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true });
    cy.url().should('include', 'To-Do-List');
    cy.wait(1000);
    cy.go('back');
  });
});
