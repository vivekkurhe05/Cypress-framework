/// <reference types="Cypress" />

describe('Verify radio button via webdriveruni', () => {
    it('Check specific radio button', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#radio-buttons').find('input').first().check().should('be.checked')
    });

    it('Check radio button by value', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#radio-buttons').find('input').check('yellow').should('be.checked')
    });

    it('Check radio button by index', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#radio-buttons').find('input').eq(4).check().should('be.checked')
    });

    it('Validate the state of each radio button', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#radio-buttons-selected-disabled').find('input').check('cabbage',{force:true}).should('be.checked')
    });
});