describe("Verifying variables, cypress commands, and jquery commands", () => {

    it("Navigating to specific product pages", () => {
        cy.visit("/")

        // This might fail because the order of execution is not guaranteee
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        makeupLink.click()
        skincareLink.click()
    })

    it("Navigating to specific product pages", () => {
        cy.visit("/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // The following code will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        // using promise
        cy.get('h1 .maintext').then(($headerText) => {
            cy.log(`Found header text: ${$headerText.text()}`)
            expect($headerText.text()).is.eq('Makeup')
        })
       
    })

    it.only("Validate propertoes of the contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")   

        // Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        // JQuery approach. When you use JQuery approach, you have to use promises (then())
        cy.contains('#ContactUsFrm', 'Contact Us Form').then($textElem => {
            const firstNameText = $textElem.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            // Embedded commands (Closure)
            cy.get('#field_11').then($fnText => {
                cy.log($fnText.text())
                cy.log($fnText)
            })
        })
    })
})
