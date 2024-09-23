/// <reference types="cypress" />

const { shoppingCartPage } = require("../support/pages/shoppingCart.page");

describe('Shopping cart flow and function responses', () => {

    beforeEach(() => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSWORD')

        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }),
        cy.visit('/')
        cy.login(email, password)
    });

    it('Must complete the checkout flow successfully', () => {
        cy.purchaseFlow()
    });

    // Adicionar produtos
    it('All products on the website must be in the shopping cart', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'fullShoppingCart.json' }).as('getCart')
        cy.openShoppingCart()
        shoppingCartPage.shoppingCart().should('have.length', 3)
    });

    //Remover produtos
    it('The shopping cart must be empty', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'emptyShoppingCart.json' }).as('getEmptyCart')
        cy.openShoppingCart()
        shoppingCartPage.shoppingCartEmpty().should('contain.text', 'Continue Shopping')
    })

    //Editr produtos
    it('The products in the shopping cart must be more than one in quantity', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'editQuantityShoppingCart.json' }).as('getCart')
        cy.openShoppingCart()
        shoppingCartPage.productQuantity().should('have.length.greaterThan', 1)
    });

});