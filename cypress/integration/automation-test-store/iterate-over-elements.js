/// <reference types="cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

describe('Iterate over elements', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();
  //const autostore_Haircare_PO = new AutoStore_HairCare_PO();

  beforeEach(() => {
    autostore_Homepage_PO.accessHomepage();
    autostore_Homepage_PO.clickOn_HairCare_Link();
  });

  it('Log information of all hair care products', () => {
    //cy.visit(constants.automationTestStore_Url);
    //cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
  });
  it.only('Add specific product to basket', () => {
    //cy.visit(constants.automationTestStore_Url);
    //cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});
