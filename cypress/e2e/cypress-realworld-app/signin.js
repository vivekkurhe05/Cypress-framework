/// <reference types="Cypress" />

describe('Sign-in screen', () => {
    it('SIGN IN button should be enabled when username and password are provided', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get('#username').type('Heath93')
        cy.get('#password').type('s3cret')
        cy.get('[data-test="signin-submit"]').should('be.enabled')
    });

    it.only('should display an error when backend returns 401', () => {
        cy.visit('http://localhost:3000/signin')
        // we have stubbed the POST response with status code 401
        // This ensures that no matter what the values of username/password are,
        // cypress will assume that the backend always returns a status code 401.
        // To stub network request responses, we are using intercept() command
        cy.intercept({method: "POST", url: "/login"},{statusCode: 401})
        cy.get('#username').type('Heath93')
        cy.get('#password').type('s3cret{enter}')
        cy.get('[data-test="signin-error"]').find('div').last().should('have.text','Username or password is invalid')
    });
});