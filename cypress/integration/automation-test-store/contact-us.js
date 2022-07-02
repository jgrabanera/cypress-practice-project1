/// <reference types="Cypress" />

describe("Test Contact Us Form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    //Cypress code
    cy.visit("https://automationteststore.com/")

    //cy.get(".info_links_footer > :nth-child(5) > a").click(); //normal Cypress selector
    cy.get("a[href$='contact']").click() //CSS selector href that end's with

    //xpath selector
    //cy.xpath("//a[contains(@href, 'contact')]").click()

    //cy.get("#ContactUsFrm_first_name").type("Joe")
    cy.xpath("//input[contains(@name, 'first')]").type("Joe")

    //cy.get("#ContactUsFrm_email").type("joe.doesnt@email.com");
    cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").type(
      "joe.doesnt@email.com"
    )
    cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").should(
      "have.attr",
      "name",
      "email"
    )

    //cy.get("#ContactUsFrm_enquiry").type("Message details here");
    cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type(
      "Message details here"
    )

    //cy.get(".col-md-6 > .btn").click();
    cy.xpath("(//button[contains(@type, 'submit')])[i]").click()

    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    )

    
    cy.log("Text has completed!")
  })

  //Cypress Promise Challenge
  it.only("Should be able to show the text from the link", () => {
    //Cypress code
    cy.visit("https://automationteststore.com/")

    cy.get("a[href$='contact']").click().then((linkText) => {
      cy.log("Clicked the following link: " + linkText.text())
    })

  })

})
