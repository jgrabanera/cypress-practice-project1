/// <reference types="cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO';

describe('Add multiple items to basket', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();
  const autostore_Haircare_PO = new AutoStore_HairCare_PO();

  before(() => {
    cy.fixture('products').then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autostore_Homepage_PO.accessHomepage();
    autostore_Homepage_PO.clickOn_HairCare_Link();
  });

  it('Add specific items to basket', () => {
    autostore_Haircare_PO.addHairCareProductToBasket();
  });
});
