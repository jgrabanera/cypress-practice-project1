/// <reference types="cypress" />

describe('Handle js alerts', () => {
  beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com');
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  });

  //Validate JS Alert Text
  it('Confirm js alert contains the correct text', () => {
    cy.get('#button1').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!');
    });
  });

  //click "OK" on Alert
  it('Validate js confirm alert box works correctly when clicking ok', () => {
    cy.get('#button4').click();

    cy.on('window:confirm', (str) => {
      return true;
    });
    cy.get('#confirm-alert-text').contains('You pressed OK!');
  });

  //click "Cancel" on Alert
  it('Validate js confirm alert box works correctly when clicking cancel', () => {
    cy.get('#button4').click();

    cy.on('window:confirm', (str) => {
      return false;
    });
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');
  });

  it('Validate js confirm alert box using a stub', () => {
    const stub = cy.stub();
    cy.on('window:confirm', stub);

    cy.get('#button4')
      .click()
      .then(() => {
        //the value is stored in stub index 0
        expect(stub.getCall(0)).to.be.calledWith('Press a button!'); //assertion validate text in the button
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get('#confirm-alert-text').contains('You pressed OK!');
      });
  });
});
