describe('Task Manager', () => {
    it('should add a task and display it', () => {
        cy.visit('http://localhost:5173');

        cy.get('input').type('Test Task');
        cy.contains('Add Task').click();

        cy.contains('Test Task').should('be.visible');
    });
});