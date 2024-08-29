describe("Verifying variables, cypress commands, and jquery commands", () => {

    it("type input commands", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")   
        cy.get('#ContactUsFrm_first_name').type('Vivek{moveToStart}',{parseSpecialCharSequences:true})
    })
})