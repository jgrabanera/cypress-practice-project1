/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    //Cypress code
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    cy.document().should("have.property", "charset").and("eq", "UTF-8"); //validate active document properties
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    //cy.get("#contact-us").click({ force: true })
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Doesn't");
    cy.get('[name="email"]').type("joe.doesnt@email.com");
    cy.get('[name="email"]').should("have.attr", "name", "email"); //validate email input

    cy.get("textarea.feedback-input").type("Test message");
    cy.get('[type="submit"]').click();

    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //Cypress code
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Doesn't");
    cy.get("textarea.feedback-input").type("Test message");
    cy.get('[type="submit"]').click();

    cy.get("body").contains("Error: all fields are required");
  });
});
