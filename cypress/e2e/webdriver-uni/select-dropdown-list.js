describe('Interact with dropdown lists via webdriveruni', () => {
    it('Select specific values via select dropdown lists', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})

        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('testng')
        cy.get("#dropdowm-menu-3").select('jquery')
        
        // or

        cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng') // select by value and perform assertion
        cy.get("#dropdowm-menu-3").select('JQuery').contains('JQuery') // select by text and perform assertion

        cy.get("#dropdowm-menu-2").select('maven').should('have.value', 'maven')
        cy.get("#dropdowm-menu-2").select('TestNG').contains('TestNG') // use contains to check text of element

    });
});