/// <reference types="Cypress" />

describe('Handle js alerts', () => {
    it.only('Confirm js alert contains the correct text', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button1').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq("I am an alert box!")
        })
    });

    it('Validate js confirm alert box works correctly when clicking ok', () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('Press a button!')
            return true
        })
        cy.get('p#confirm-alert-text').contains('you pressed ok!',{matchCase:false})
    })

    it('Validate js confirm alert box works correctly when clicking cancel', () =>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('Press a button!')
            return false
        })
        cy.get('p#confirm-alert-text').contains('you pressed cancel!',{matchCase:false})
    })

    it('Validate js confirm alert box works correctly when clicking cancel', () =>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('h3').contains('JavaScript Alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get('#content ul li button').eq(2).should('have.text','Click for JS Prompt').click()
        cy.get('#result').contains('you entered: welcome',{matchCase:false})
    })
});