describe('Hack', () => {
    const { facebook: { email, password } } = Cypress.env();
    it('Should visit Facebook', () => {
        cy.visit('https://www.facebook.com');
        cy.get('[data-testid=royal_email]').type(email);
    })
})