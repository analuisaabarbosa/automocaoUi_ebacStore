// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { homePage } = require("../support/pages/home.page");
const { addNewAdressPage } = require("../support/pages/addNewAdress.page");
const { name, phoneNumber } = require("../fixtures/data.json");

Cypress.Commands.add('login', (email, password) => { 
    homePage.openMenu('Account')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="btnLogin"]').click()
    homePage.openMenu('Account')
    cy.get('[data-testid="CustomerEmail"]').should('contain', email)
}),

Cypress.Commands.add('purchaseFlow', () => {
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
    cy.get('[data-testid="continueShopping"]').click()
    cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]').click()
    cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1)').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > [style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > [data-testid="addNewAddress"] > .r-lrvibr').click()
    addNewAdressPage.addNewAdress(name, phoneNumber)
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1').should('contain', 'Order Success')
})

Cypress.Commands.add('emptyingShoppingCart', () => {
    homePage.openMenu('Home')
    cy.get('[data-testid="home-popular-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(2) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > [style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk').click()
    cy.get('.r-14lw9ot > :nth-child(2) > .css-175oi2r > .css-146c3p1').click()
    cy.get('.css-175oi2r.r-1udh08x > :nth-child(3) > .css-175oi2r').click()
    cy.get('[data-testid="confirm"]').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-1awozwy > [data-testid="back"] > .css-146c3p1').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > [style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > :nth-child(2) > [data-testid="remove"]').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(2) > [data-testid="emptyCart"]').should('contain', 'Your cart is empty')
})