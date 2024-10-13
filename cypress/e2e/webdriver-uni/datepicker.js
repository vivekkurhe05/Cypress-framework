/// <reference types="Cypress" />

describe('Test datepicker via webdriveruni', () => {
    it('Select date from the datepicker', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr','target').click({force:true})
        cy.get('#datepicker').click()

        var date = new Date()
        date.setDate(date.getDate() + 2)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default",{month:"long"})
        var futureDate = date.getDate()

        cy.log('Future year to select: '+futureYear)
        cy.log('Future month to select: '+futureMonth)
        cy.log('Future day to select: '+futureDate)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
                if(!currDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
                    if(!currDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay(){
            cy.get('.day').contains(futureDate).click()
        }

        selectMonthAndYear()
        selectFutureDay()
    });
});