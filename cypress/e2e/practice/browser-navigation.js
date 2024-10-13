/// <reference types="Cypress" />

describe('Validate webdrive uni homepage links', () => {
    it('Confirm links redirect to the correct pages', () => {
        /**
         * visit the site
         * click on contact us link
         * assert url
         * go back
         * reload the page
         * assert url
         * go forward
         * assert the url
         * go back again
         * go to login portal
         * assert the url
         */

        cy.visit("https://webdriveruniversity.com/")
        cy.get("#contact-us").invoke("removeAttr","target").click({force:true})
        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload()
        cy.url().should('include','https://webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include','contactus')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
        cy.url().should('match',/Login-Portal/g)
    });

    it.only('confirm user redirects to the to-do page', () => {
        /**
         * visit the site
         * go to to-do list page
         * assert the url
         */
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr','target').click({force:true})
        cy.url().should('match',/to-do-list/gi)
    })
});