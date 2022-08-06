/// <reference types="Cypress" />

describe('Tes file upload via webdriveruni', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
  });

  it('Upload a file...', () => {
    cy.fixture('wallpaper.png', 'base64').then((fileContent) => {
      cy.get('#myFile').attachFile(
        {
          fileContent,
          fileName: 'wallpaper.png',
          mimeType: 'image/png',
        },
        {
          uploadTye: 'input',
        }
      );
    });
    cy.get('#submit-button').click({ force: true });
  });

  it('Upload no file...', () => {
    cy.get('#submit-button').click({ force: true });
  });
});
