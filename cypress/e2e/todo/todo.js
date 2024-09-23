/// <reference types="Cypress" />

describe('Todo Application', () => {
    it('Adds a new todo', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input').type('New todo{enter}')
        cy.get('[data-testid="todo-item-label"]').should('have.text','New todo')
    });

    it('Adds a new todo', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input').type('New todo{enter}')
        cy.get('#todo-input').type('Another todo{enter}')
        cy.get('.todo-list').find('li').should('have.length', 2)
        cy.get('[data-testid="todo-item-label"]').first().should('have.text','New todo')
        cy.get('[data-testid="todo-item-label"]').last().should('have.text','Another todo')
    });

    it('Using Implicit Subjects - should', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?')
    })

    it('Using Implicit Subjects - and', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('.new-todo').should('have.attr', 'placeholder', 'What needs to be done?').and('have.class', 'new-todo')
    })

    it('Using Explicit Subjects', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('.new-todo').should(($elem) => {
            expect($elem).to.have.class('new-todo')
            expect($elem).to.have.attr('placeholder','What needs to be done?')
        })
    })

    it.only("Marks todo as completed", () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('.new-todo').type('New todo{enter}')
        cy.get("[type=checkbox][class='toggle']").check()
        cy.get('[data-testid="todo-item"]').should(($el) => {
            expect($el).to.have.attr('class', 'completed')
        })
    })
});