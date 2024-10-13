/// <reference types="Cypress" />

describe('Verify autocomplete dropdown list via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {
        /**
         * Visit the site
         * Go to autocomplete page
         * Type a character to get suggestions
         * select an option
         * submit
         * Assert the url
         */

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each($el => {
            const prod = $el.text()
            const productName = 'Avacado'

            if(prod === productName) {
                cy.wrap($el).click()
                cy.get('#submit-button').click()
                cy.url().should('match',/Avacado/g)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each($el => {
                const prod = $el.text()
                const productName = 'Grapes'
    
                if(prod === productName) {
                    cy.wrap($el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('match',/Grapes/g)
                }
            })
        })
    });
});