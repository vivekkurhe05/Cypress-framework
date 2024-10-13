/// <reference types="Cypress" />

describe('Handling IFrame and Modals', () => {
    it('Handle webdriveruni iframe and modal', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#iframe").invoke('removeAttr','target').click({force:true}) // this is a button click which opens a new tab

        cy.get('#frame').then($iframe => {
            /**
             * contents() method can also be used to get the content document of an iFrame,
             * if the iframe is on the same domain as the main page.
             */
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of')
        })

        cy.get('@modal').contains('Close').click()
    });
});