/// <reference types="cypress" />

// usually env variable is used when you have to send data from command line
describe('Env Variable', () => {
    it('Access data thru env variable', () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name=first_name]').type(Cypress.env("first_name"))
        cy.get('[name=last_name]').type('Kurhe')
        cy.get('[name=email]').type('vivek.kurhe@gmail.com')
        cy.get('[name=message]').type('Hi Vivek, How are you doing?')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
});