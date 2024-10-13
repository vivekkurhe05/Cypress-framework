/// <reference types="Cypress" />

describe('Verify checkboxes via webdriveruni', () => {
    it('Check and validate the first checkbox', () => {
        /**
         * visit the site
         * go to checkboxes page
         * check the first checkbox
         * assert that the checkbos is checked
         */

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').first().check().should('be.checked')
    });

    it('Check and validate the last checkbox', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').last().check().should('be.checked')
    });

    it('Uncheck and validate the checkbox', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').eq(2).uncheck().should('not.be.checked')
    });

    it('Check and validate all checkboxes', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').check().should('be.checked')
    });

    it('Check and validate desired checkboxes', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').check(['option-1','option-4']).should('be.checked')
    });

    it.only('Check and validate desired checkbox using value', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#checkboxes').find('input').check('option-4').should('be.checked')
    });
});