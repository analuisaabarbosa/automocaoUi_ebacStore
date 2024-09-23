/// <reference types="cypress" />

export const shoppingCartPage = {

    shoppingCart() {
        return cy.get('div[data-testid="productName"]')
    },

    shoppingCartEmpty() {
        return cy.get('div[data-testid="continueShopping"]')
    },

    productQuantity() {
        return cy.get('[data-testid="itemsQty"]')
    }

}