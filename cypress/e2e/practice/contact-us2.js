/// <reference types="Cypress" />

describe("test contact us form via webdriveruni", () => {

    it("should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#contact-us").scrollIntoView().invoke("removeAttr","target").click({force:true})
        cy.get("#contact_form").find("[name=first_name]").type("Vivek")
        cy.get("#contact_form").find("[name=last_name]").type("Kurhe")
        cy.get("#contact_form").find("[name=email]").type("test@gmail.com")
        cy.get("#contact_form").find("[name=message]").type("Hello, how are you?")
        cy.get("form").submit()
        cy.get("h1").contains("Thank You for your Message!")
    })

    it("should not be able to submit a succesful submission via contact us form as all fields are required", ()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#contact-us").scrollIntoView().invoke("removeAttr","target").click({force:true})
        cy.get("form").submit()
        cy.get("body").contains("Error: all fields are required", {matchCase:false})
    })
})