/// <reference types="cypress" />

describe('Add multiple items to basket', () => {
    before(() => {
        cy.fixture('products').then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit('/')
        cy.get("a[href*='product/category&path=']").contains("hair care", {matchCase:false}).click()
    })
    it('add specific items to basket', () => {
        globalThis.data.productNames.forEach(function(productName) {
            cy.addProductsToBasket(productName)
        })
        cy.get('.dropdown-toggle .fa-shopping-cart ~ .label').contains("3")
    });
});