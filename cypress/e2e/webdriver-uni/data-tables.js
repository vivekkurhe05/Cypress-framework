/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("calculate and asser the total total age of all users", () => {
        const userDetails = []
        cy.get('#thumbnail-1 td').each(($el) => {
            userDetails.push($el.text())
        }).then(() => {
            // my logic
            return userDetails.reduce((acc, el) => {
                if(Number(el)){
                    acc += Number(el)
                }
                return acc
            },0)
        }).should((sum) => {
            expect(sum).to.eq(322)
        })
      });

      it.only('calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').then($el => {
            cy.log($el)
            console.log($el)
        })
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(function($el, index) {
            const text = $el.text()
            if(text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().should((age) => {
                    const userAge = age.text()
                    expect(userAge).to.equal("80")
                })
            }
        })
      })
  });