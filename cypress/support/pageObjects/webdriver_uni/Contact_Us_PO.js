class Contact_Us_PO {
  webdrivderUni_ContactForm_Submit(first_name, last_name, email, textMsg, $selector, successMsg) {
    cy.get('[name="first_name"]').type(first_name);
    cy.get('[name="last_name"]').type(last_name);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(textMsg);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(successMsg);
  }
}

export default Contact_Us_PO;
