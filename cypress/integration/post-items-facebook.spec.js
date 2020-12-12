describe('Hack', () => {
    it('Should visit Facebook', () => {
        cy.visit('https://www.facebook.com')
        cy.get('[data-testid=royal_email]').type('test@gmail.com')
    })
})