/// <reference types="Cypress" />

describe("test contact us form via webdriveruni", () => {

    it("should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#contact-us").scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#contact_form').find("[name='first_name']").type('Vivek')
        cy.get('#contact_form').find("[name='last_name']").type('Kurhe')
        cy.get('#contact_form').find("[name='email']").type('vivek@gmail.com')
        cy.get('#contact_form').find("[name='message']").type('This is a test message')
        cy.get("[type='submit']").click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it.only("should not be able to submit a succesful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#contact-us").scrollIntoView().invoke("removeAttr","target").click({force:true})
        cy.get("[type='submit']").click()

        cy.get('body').contains('error: all fields are required', {matchCase: false})
    })
})

