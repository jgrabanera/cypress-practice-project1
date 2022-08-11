/// <reference types="cypress" />
import { constants } from '../../support/constants';

describe('Add multiple items to basket', () => {
  before(() => {
    cy.fixture('products').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit(constants.automationTestStore_Url);
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
  });
  it('Add specific items to basket', () => {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get('.dropdown-toggle > .fa').click();
  });
});
