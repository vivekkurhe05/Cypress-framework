/// <reference types='cypress' />

describe('its() usage', () => {
    it('should log age value', () => {
        cy.wrap({ age: 52 }).its('age').then(cy.log)
    });

    it('should verify length', () => {
        cy.wrap(['Wai Yan', 'Yu']).its("length").should('eq', 2)
    });
});