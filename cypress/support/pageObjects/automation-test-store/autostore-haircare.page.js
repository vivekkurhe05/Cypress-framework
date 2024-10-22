class AutoStoreHairCarePage {
    addHairCareProductsToBasket() {
        globalThis.data.productNames.forEach(function(productName) {
            cy.addProductsToBasket(productName)
        })
        cy.get('.dropdown-toggle .fa-shopping-cart ~ .label').contains("3")
    }
}

export default AutoStoreHairCarePage