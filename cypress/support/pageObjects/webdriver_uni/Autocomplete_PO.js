class Autocomplete_PO {
  clickOn_Autocomplete_Button() {
    cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });
  }
}
export default Autocomplete_PO;
