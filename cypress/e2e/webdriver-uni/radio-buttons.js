describe('Verify radio button via webdriveruni', () => {
    it('Check specific radio button', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#radio-buttons").find("[type='radio']").first().check().should("be.checked")
    });

    it('Check radio button by value', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#radio-buttons").find("[type='radio']").check(['yellow']).should("be.checked")
    });

    it('Check radio button by index', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check().should("be.checked")
    });

    it.only('Validate the state of each radio button', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check().should("be.checked")
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='lettuce']").should('be.enabled')
        cy.get("[value='cabbage']").should('be.disabled')
        cy.get("[value='pumpkin']").should('be.checked')
    });
});