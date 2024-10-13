/// <reference types="Cypress" />

describe('Handling IFrame and Modals', () => {
    it('Handle webdriveruni iframe and modal', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr','target').click({force:true})

        cy.get('#frame').then($iframe => {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').should('be.visible')
    });

    it.only('Handle webdriveruni iframe using helper function', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr','target').click({force:true})
        cy.getIframeBody().find('#button-find-out-more').click()
        cy.getIframeBody().find('#myModal').should('be.visible')
    })
});