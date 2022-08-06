/// <reference types="Cypress" />
import { constants } from '../../support/constants';

describe('Inspect Automation Test Store items using chain of commands', () => {
  it('Click on the first item using item header', () => {
    cy.visit(constants.automationTestStore_Url);
    cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
  });

  it.only('Click on the first item using item text', () => {
    cy.visit(constants.automationTestStore_Url);
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then((itemHeaderText) => {
        cy.log('Selected the following item: ' + itemHeaderText.text());
      });
  });

  //Command chain to easy get the product based on the list index
  it('Click on the first item using index', () => {
    cy.visit(constants.automationTestStore_Url);
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
  });
});
