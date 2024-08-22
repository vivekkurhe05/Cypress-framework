describe("Inspect Automation Test Store items using chain of commands", () => {

    it("Click on the first item using item header", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("#block_frame_bestsellers_1771 a[title='Skinsheen Bronzer Stick']").click()
    })

    it.only("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").contains('Skinsheen Bronzer Stick').then(function(itemHeaderText) {
            cy.log(itemHeaderText)
            cy.log("Selected the following item: " + itemHeaderText.text())
        })
    })

    it("Click on the first item using index", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})
