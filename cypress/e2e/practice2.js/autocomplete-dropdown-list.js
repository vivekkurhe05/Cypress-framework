/// <reference types="Cypress" />

describe('Verify autocomplete dropdown list via webdriveruni', () => {

    before(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
    })

    it('Select specific product via autocomplete list', () => {
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list div').each(($div) => {
            let fruitName = $div.text()
            if(fruitName === 'Apple'){
                $div.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('match',/Apple/g)
            }
        }).then(() => {
            cy.get('#myInput').type('I')
            cy.get('#myInputautocomplete-list div').each(($div) => {
                let fruitName = $div.text()
                if(fruitName.includes('Italian bread')){
                    $div.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('match',/Italian\+bread/g)
                }
            })
        })
    });

    it.only('throw your own exception', () => {
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list div').should(($div) => {
            if($div.length != 6){
                throw new Error('Did not find 6 elements')
            }
        })
    })
});