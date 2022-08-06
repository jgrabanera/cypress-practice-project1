/// <reference types="cypress" />

describe('Verify Autocomplete dropdown list via Webdriveruni', () => {
  before(() => {
    cy.visit('/');
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
  });

  it('Select specific vproduct via autocomplete list', () => {
    cy.get('#myInput').type('A');
    cy.get('#myInputautocomplete-list > *')
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = 'Avacado';

        if (prod === productToSelect) {
          //$el.click();
          $el.trigger('click');

          cy.get('#submit-button').click();
          cy.url().should('include', productToSelect);
        }
      })
      .then(() => {
        cy.get('#myInput').type('g');

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = 'Grapes';

          if (prod === productToSelect) {
            //$el.click();// deprecated JQuery .click()
            $el.trigger('click');

            cy.get('#submit-button').click();
            cy.url().should('include', productToSelect);
          }
        });
      });
  });
});
