// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

// ----------------AUTOMATION TEST STORE------------
Cypress.Commands.add('selectProduct', (productName) => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add('addProductToBasket', (productName) => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get('.productcart').eq(index).click();
    }
  });
});

// ---------------END OF THE LINE---------------------

// ----------------WEBDRIVER UNI------------

// This is added on Homepage Page Object
// Cypress.Commands.add('navigateToContactPage', () => {
//   cy.visit('/' + '/Contact-Us/contactus.html');
// });

Cypress.Commands.add('webdrivderUni_ContactForm_Submit', (first_name, last_name, email, textMsg, $selector, successMsg) => {
  cy.get('[name="first_name"]').type(first_name);
  cy.get('[name="last_name"]').type(last_name);
  cy.get('[name="email"]').type(email);
  cy.get('textarea.feedback-input').type(textMsg);
  cy.get('[type="submit"]').click();
  cy.get($selector).contains(successMsg);
});
// ---------------END OF THE LINE---------------------

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
