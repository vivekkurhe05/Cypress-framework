class AutoStoreHomePage {

    visitHomePage() {
        cy.visit('https://automationteststore.com/')
    }

    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains("hair care", {matchCase:false}).click()
    }
}

export default AutoStoreHomePage