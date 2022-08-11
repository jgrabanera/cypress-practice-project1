import HomePage_PO from '../../support/pageObjects/webdriver_uni/Homepage_PO';
import Autocomplete_PO from '../../support/pageObjects/webdriver_uni/Autocomplete_PO';

/// <reference types="cypress" />

describe('Verify Autocomplete dropdown list via Webdriveruni', () => {
  const homepage_PO = new HomePage_PO();
  const autocomplete_PO = new Autocomplete_PO();

  before(() => {
    //cy.visit('/');
    homepage_PO.visitHomepage();
    autocomplete_PO.clickOn_Autocomplete_Button();
    //cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
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
