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

  //validate if the number of .thumbnail class is exact 16
  it.only("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/")

    //Invoke = extract
    //.as() is use a variable
    cy.get(".thumbnail").as("productThumbnail")
    cy.get("@productThumbnail").should("have.length", 16)
    cy.get("@productThumbnail")
      .find(".productcart") //Find the class .productcart within the alias @productThumbnail
      .invoke("attr", "title") // Extract the attribute = title within the line
      .should("include", "Add to Cart") //include or contain may work

    cy.log("Alias and invoke challenge is completed")
  })
})
