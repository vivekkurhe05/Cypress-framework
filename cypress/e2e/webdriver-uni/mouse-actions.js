// due to this tag, I can see auto sugestions while typing cypress command
/// <reference types="Cypress" />

describe('Perform mouse actions via webdriveruni', () => {

    it('I should be able to scroll to the view and click on the button', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})
    });

    it('I should be able to drag and drop a draggable item', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get('#draggable').trigger('mousedown', {which: 1}) // {which: 1} clicks the center of the draggable element
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it('I should be able to perform a double mouse click', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        cy.get('#double-click').dblclick()
    });

    it.only('I should be able to hold down the left mouse click button on a given element', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true})

        // {which: 1} is going to click in the center of the element
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        }) 
    });
});