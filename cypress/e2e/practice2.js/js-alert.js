/// <reference types='Cypress' />

describe('Handle js alerts', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
    })

    it('Confirm js alert contains the correct text', () => {
        cy.get('#button1').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am an alert box!')
        })
    });

    it('Validate js confirm alert box works correctly when clicking ok', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return true
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it('Validate js confirm alert box works correctly when clicking cancel', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

});