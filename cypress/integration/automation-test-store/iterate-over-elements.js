/// <reference types="cypress" />
import { constants } from '../../support/constants';

describe('Iterate over elements', () => {
  it('Log information of all hair care products', () => {
    cy.visit(constants.automationTestStore_Url);
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
  });
  it.only('Add specific product to basket', () => {
    cy.visit(constants.automationTestStore_Url);
    cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //   if ($el.text().includes('Eau Parfumee au The Vert Shampoo')) {
    //     cy.wrap($el).click();

    //     cy.log('Index: ' + index + ' : ' + $el.text() + ' Test completed ');
    //   }

    cy.selectProduct('Eau Parfumee au The Vert Shampoo');

    //const firstNameText = text.find("#field_11").text()
    //cy.log("Index: " + index + " : " + $el.text())
  });
});
