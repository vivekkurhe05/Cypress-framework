describe("test contact us form via automation test store", () => {

    it("should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.xpath('//a[contains(@href,"/contact")]').click().then(function(linkText) {
            cy.log(linkText.text())
        })
        cy.get('#ContactUsFrm_first_name').type("Test")
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide bulk orders?")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
    })
})
