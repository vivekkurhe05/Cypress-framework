describe('Cypress web security', () => {
    
    it.skip('Validate visiting two different domains', () => {
        // this test is hanging cypress test runner
        cy.visit('https://webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
    });

    it('Validate visiting two different domains via user actions', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    //this is not working, it still throws an error
    it('Origin command', () => {
        cy.origin('https://www.webdriveruniversity.com', () => {
            cy.visit('/')
        })
        cy.origin('https://www.automationteststore.com', () => {
            cy.visit('/')
        })
    });

    // this test will pass
    it.only('Same origin', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.visit("https://selectors.webdriveruniversity.com")
    });

});