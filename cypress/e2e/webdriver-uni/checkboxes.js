describe('Verify checkboxes via webdriveruni', () => {
    it('Check and validate checkbox', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#checkboxes input[type='checkbox']").first().check() // check the checkbox
        cy.get("#checkboxes input[type='checkbox']").first().should('be.checked') // asserts that checkbox is checked
    });

    it('uncheck and validate checkbox', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get("#checkboxes [type='checkbox'][value='option-3']").as('option-3')
        cy.get("@option-3").uncheck().should("not.be.checked") // uncheck the checkbox and assert at the same time
    });

    it('Check and validate all checkbox', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('[type="checkbox"]').check().should('be.checked')
    });

    it('Check and validate desired checkboxes', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('[type="checkbox"]').check(['option-1','option-4']).should('be.checked')
    });
});