/// <reference types="cypress" />

describe("Interact with drowpdown list via webdriveruni", () => {
  it("Select specific values via select dropdoen list", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng"); //assertion have value testng
    cy.get("#dropdowm-menu-3").select("javascript").contains("JavaScript"); //assertion have contains JavaScript
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven"); //assertion have value
    cy.get("#dropdowm-menu-2").select("testng").contains("TestNG"); //assertion have contains JavaScript
  });
});
