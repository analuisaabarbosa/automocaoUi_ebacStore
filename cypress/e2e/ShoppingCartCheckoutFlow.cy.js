/// <reference types="cypress" />

describe('Shopping cart flow', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }),
            cy.visit('/')
    });

    it('Must complete the checkout successfully', () => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSWORD')
        cy.login(email, password)
        cy.purchaseFlow()
    });

    afterEach(() => {
        cy.emptyingShoppingCart()
    });

});