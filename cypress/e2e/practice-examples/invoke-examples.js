/// <reference types="Cypress" />

describe("test contact us form via webdriveruni", () => {

    // my solution
    it("How to assert hidden Modal using invoke example", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get("#popup-alerts").scrollIntoView().invoke("removeAttr","target").click({force:true})
        cy.get("#myModal").should('be.hidden').invoke("show").invoke('attr','class','modal fade in').should('be.visible')
        cy.get("h4.modal-title").invoke('text').then(value => {cy.log(value)})
        cy.get("h4.modal-title").should("have.text","It’s that Easy!!  Well I think it is.....")
    })

    it.only('assert hidden text', () => {
        cy.visit('https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show')
        cy.getIframeBody('iframe#iframeResult').find('p').should('be.visible').invoke({log:false},'hide').should('be.hidden')
    })

    // practice these examples using invoke
    // https://www.w3schools.com/jquery/jquery_hide_show.asp
})