// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframeBody', (sel) => {
    return cy
    .get(sel)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
})

// e2e/automation-test-store/custom-command-usage.js
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add('addProductsToBasket', (productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName) {
            cy.get('.productcart').eq(index).click()
        }
    })
})