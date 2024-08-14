/// <reference types="cypress" />

const { email, password } = require("../fixtures/data.json");

describe('Shopping cart flow', () => {
    
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }),
        cy.visit('/')
    });

    it('Must complete the checkout successfully', () => {
        cy.login(email, password)
        cy.purchaseFlow()
    });

    afterEach(() => {
        cy.emptyingShoppingCart()
    });

});