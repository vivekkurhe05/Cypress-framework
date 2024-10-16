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

    //this is working as we use cy.origin to access different URLs in a single test.
    it('Origin command', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.origin('https://www.automationteststore.com', () => {
            cy.visit('/')
        })
    });

    // but this is working too as it has different superdomains, how?
    it('Redirecting to different superdomains in one test', () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.visit('https://www.automationteststore.com/')
    });

    // this test will pass
    it('Same origin', () => {
        cy.visit("https://www.webdriveruniversity.com")
        cy.visit("https://selectors.webdriveruniversity.com")
    });

});