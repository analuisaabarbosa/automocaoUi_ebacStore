/// <reference types="cypress" />

const { shoppingCartPage } = require("../support/pages/shoppingCart.page");

describe('Shopping cart flow and function responses', () => {

    beforeEach(() => {
        const email = Cypress.env('EMAIL');
        const password = Cypress.env('PASSWORD')

        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit('/')
        cy.login(email, password)
    });

    it('Must complete the checkout flow successfully', () => {
        cy.purchaseFlow()
    });

    // Produtos adicionados no carrinho
    it('All products on the website must be in the shopping cart', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'fullShoppingCart.json' }).as('getFullCart')
        cy.openShoppingCart()
        cy.wait('@getFullCart')
        shoppingCartPage.shoppingCart().should('have.length', 3)
    });

    // Produtos removidos do carrinho 
    it('The shopping cart must be empty', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'emptyShoppingCart.json' }).as('getEmptyCart')
        cy.openShoppingCart()
        cy.wait('@getEmptyCart')
        shoppingCartPage.shoppingCartEmpty().should('contain.text', 'Continue Shopping')
    })

    // Quantidade dos produtos editada
    it('The products in the shopping cart must be more than one in quantity', () => {
        const user_id = Cypress.env('USER_ID');

        cy.intercept('GET', `public/getCart?${user_id}`, { fixture: 'editQuantityShoppingCart.json' }).as('getEditCart')
        cy.openShoppingCart()
        cy.wait('@getEditCart')
        shoppingCartPage.productQuantity().should('have.length.greaterThan', 1)
    });

});