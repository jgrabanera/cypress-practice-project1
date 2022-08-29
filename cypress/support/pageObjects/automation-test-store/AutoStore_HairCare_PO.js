class AutoStore_HairCare_PO {
  addHairCareProductToBasket() {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element).then(() => {
        //debugger;
      });
    });
    cy.get('.dropdown-toggle > .fa').click({ force: true });
  }
}

export default AutoStore_HairCare_PO;
