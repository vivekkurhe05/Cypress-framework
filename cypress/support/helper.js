/// <reference types="Cypress" />

export const getIframeBody = () => {
    return cy.get('#frame')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
}