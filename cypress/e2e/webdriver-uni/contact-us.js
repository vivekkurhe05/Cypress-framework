describe("test contact us form via webdriveruni", () => {

    it("should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus.html')
        // cy.get('#contact-us').click({force: true})
        cy.get('[name=first_name]').type('Vivek')
        cy.get('[name=last_name]').type('Kurhe')
        cy.get('[name=email]').type('vivek.kurhe@gmail.com')
        cy.get('[name=message]').type('Hi Vivek, How are you doing?')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("should not be able to submit a succesful submission via contact us form as all fields are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name=first_name]').type('Vivek')
        cy.get('[name=last_name]').type('Kurhe')
        cy.get('[name=message]').type('Hi Vivek, How are you doing?')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})
