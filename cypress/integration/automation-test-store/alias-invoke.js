/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific haircare product", () => {
    cy.visit("https://automationteststore.com/")
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    //Invoke = extract
    //.as() is use a variable
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail")

    cy.get("@productThumbnail").its("length").should("be.gt", 5) //validate if its length is greater than 5

    cy.get("@productThumbnail").should("include", "Seaweed Conditioner")
  })
})
