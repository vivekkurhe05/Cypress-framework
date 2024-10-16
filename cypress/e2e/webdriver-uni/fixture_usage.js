/// <reference types="Cypress" />

describe('Test contact us form via webdriveruni', () => {

    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })

    describe('using globalThis', () => {
        before(() => {
            cy.fixture("contact").then(function(data) {
                globalThis.data = data
            })
        })

        it('should submit a contact us form', () => {
            cy.get('[name=first_name]').type(data.first_name)
            cy.get('[name=last_name]').type(data.last_name)
            cy.get('[name=email]').type(data.email)
            cy.get('[name=message]').type(data.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });
    
    });
    
    describe('using alias', () => {
        before(() => {
            cy.fixture("userDetails").as('user')
        })

        it('should submit a contact us form', () => {
            cy.get('@user').then((user) => {
                cy.get('[name=first_name]').type(user.first_name)
                cy.get('[name=last_name]').type(user.last_name)
                cy.get('[name=email]').type(user.email)
                cy.get('[name=message]').type(user.message)
            })
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });
    });

});