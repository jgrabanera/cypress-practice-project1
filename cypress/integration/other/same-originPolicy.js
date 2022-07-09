/// <reference types="Cypress" />

describe("Cypress Web Security", () => {
  it("Validate visiting two different domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://automationteststore.com/");
  });

  it.only("Validate visiting two different domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.xpath("//a[@id='automation-test-store']")
      .invoke("removeAttr", "target")
      .click({ force: true }); //load in the same tab
  });
});
