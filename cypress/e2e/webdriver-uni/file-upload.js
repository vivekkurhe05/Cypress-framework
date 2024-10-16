/// <reference types="Cypress" />

describe('Test file upload via webdriveruni', () => {

    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true})
    })

    it('upload a file', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/tree.png')
        cy.get('#submit-button').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Your file has now been uploaded!')
        })
    });

    it('upload no files', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('You need to select a file to upload!')
        })
    });
});