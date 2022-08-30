/// <reference types="Cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

describe('Inspect Automation Test Store items using chain of commands', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();

  beforeEach(() => {
    autostore_Homepage_PO.accessHomepage();
  });

  it('Click on the first item using item header', () => {
    // cy.visit(constants.automationTestStore_Url); //replace by beforeEach Hook
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
  });

  it('Click on the first item using item text', () => {
    // cy.visit(constants.automationTestStore_Url); //replace by beforeEach Hook
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then((itemHeaderText) => {
        cy.log('Selected the following item: ' + itemHeaderText.text());
      });
  });

  //Command chain to easy get the product based on the list index
  it('Click on the first item using index', () => {
    // cy.visit(constants.automationTestStore_Url); //replace by beforeEach Hook
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
