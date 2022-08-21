/// <reference types="cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

describe('Add multiple items to basket', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();
  before(() => {
    cy.fixture('products').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autostore_Homepage_PO.AutoStore_Homepage_PO();
  });

  it('Add specific items to basket', () => {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get('.dropdown-toggle > .fa').click();
  });
});
