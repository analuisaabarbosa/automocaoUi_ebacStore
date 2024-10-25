/// <reference types="cypress" />

describe('Shopping cart flow', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }),
        cy.visit('/')
    });

    it('Must complete the checkout successfully', () => {
        const email = Cypress.env('email');
        const password = Cypress.env('password')

        cy.log(email, password)

        cy.login(email, password)
        cy.purchaseFlow()
    });

});