describe('Cypress debugging', () => {
    it('Error Test: can add a todo', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('#todo-input').type('New Todo {Enter}')
        cy.get('.todo-list').find('li').should('have.length',2)
    });

    it.only('can mark a todo as completed', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('.new-todo').type('New Todo{Enter}')
        cy.get('.new-todo').type('Another Todo{Enter}')
        cy.get('.todo-list > li:nth-child(1)').find('.toggle').click()
        cy.get('.todo-list > li:nth-child(2)').find('.toggle').click()
    });
});