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
  it("Validate product thumbnail", () => {
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

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/")

    //.as() is use a variable
    cy.get(".thumbnail").as("productThumbnail")
    // cy.get("@productThumbnail").find(".oneprice").each(($el, index, $list) => {
    //     cy.log($el.text())
    //   })

    // Get total number of non-sale price
    cy.get(".thumbnail") // get * element with class .thumbnail
      .find(".oneprice") // find .oneprice class within .thumbnail
      .invoke("text") //extract all the value produce
      .as("itemPrice") // save in alias(variable) @itemPrice

    let itemsTotal = 0
    cy.get("@itemPrice").then(($linkText) => {
      //callback fn
      let itemPrice = $linkText.split("$") // split the extracted value and return as an array of itemPrice
      let itemsTotalPrice = 0
      for (let i = 0; i < itemPrice.length; i++) {
        // cy.log(itemPrice[i])
        itemsTotalPrice += Number(itemPrice[i])
      }

      itemsTotal += itemsTotalPrice
      cy.log(
        "Total non-sale price of " +
          itemPrice.length +
          " items is: $" +
          itemsTotalPrice
      )
    })

    // Get total number of Sale price
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice")

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        //callback fn
        let saleItemPrice = $linkText.split("$") // split the extracted value and return as an array of itemPrice
        let salesItemsTotalPrice = 0
        for (let i = 0; i < saleItemPrice.length; i++) {
          // cy.log(saleItemPrice[i])
          salesItemsTotalPrice += Number(saleItemPrice[i])
        }

        itemsTotal += salesItemsTotalPrice
        cy.log(
          "Total sale price of " +
            saleItemPrice.length +
            " items is: $" +
            salesItemsTotalPrice
        )
      })

      .then(() => {
        cy.log("Total: " + itemsTotal)
        expect(itemsTotal).to.equal(648.5)
      })
  })
})
