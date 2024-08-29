describe("Iterate over elements", () => {

    it("Log information of all hair care products", () => {
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Add specific product to basket", () => {
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click() 
        
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if($el.text().includes("Curls to straight Shampoo")) {
                cy.wrap($el).click()
            }
        })
    })
})
