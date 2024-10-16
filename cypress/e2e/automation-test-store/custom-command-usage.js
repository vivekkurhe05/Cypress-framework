/// <reference types='cypress' />

describe('Iterate over elements', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get("a[href*='product/category&path=']").contains("hair care", {matchCase:false}).click()
    })
    it('Add specific product to basket using custom command', () => {
        cy.selectProduct("Curls to straight Shampoo")
        cy.get('.breadcrumb').find('a').eq(2).invoke('text').then((txt) => {
            txt = txt.trim()
            expect(txt).to.equal('Curls to straight Shampoo')
        })
    });

    it('Add another product to basket using custom command', () => {
        cy.selectProduct("Eau Parfumee au The Vert Shampoo")
        cy.get('.breadcrumb').find('a').eq(2).invoke('text').then((txt) => {
            txt = txt.trim()
            expect(txt).to.equal('Eau Parfumee au The Vert Shampoo')
        })
    });
});