/// <reference types="Cypress" />

describe('Amazon test', () => {
    it('When searching for books, the correct category should appear', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('books{enter}')
        cy.get('.bxc-grid__image.bxc-grid__image--light > img[alt="Books at Amazon"]').as('bookImage')
        cy.get('@bookImage').should('have.attr', 'alt', 'Books at Amazon')
    });
});