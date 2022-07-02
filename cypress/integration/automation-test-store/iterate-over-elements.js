/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text())
    })
  })
  it.only("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click()

        cy.log("Index: " + index + " : " + $el.text() + " Test completed ")
      } else {
        // do something else
      }

      //const firstNameText = text.find("#field_11").text()
      //cy.log("Index: " + index + " : " + $el.text())
    })
  })
})
