describe("test contact us form via webdriveruni", () => {

    // if you are sure that this particular test is likely to fail in the first attempt, you can
    // retry this particular test by passing retries as an argument.
    it("should be able to submit a succesful submission via contact us form", {
        retries: {
            runMode: 2,
            openMode: 2
        }
    }, () => {
        cy.visit("/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'Contact-Us/contactus.html')
        // cy.get('#contact-us').click({force: true})
        cy.get('[name=first_name]555').type('Vivek')
        cy.get('[name=last_name]').type('Kurhe')
        cy.get('[name=email]').type('vivek.kurhe@gmail.com')
        cy.get('[name=message]').type('Hi Vivek, How are you doing?')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("should not be able to submit a succesful submission via contact us form as all fields are required", () => {
        cy.visit("/Contact-Us/contactus.html")
        cy.get('[name=first_name]').type('Vivek')
        cy.get('[name=last_name]').type('Kurhe')
        cy.get('[name=message]').type('Hi Vivek, How are you doing?')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})
