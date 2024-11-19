const { homePage } = require("../support/pages/home.page");

require('@reportportal/agent-js-cypress/lib/commands/reportPortalCommands');

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
    homePage.openMenu('Browse')
    cy.get(':nth-child(1) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
    cy.get('[data-testid="goBackHome"]').should('contain', 'Go Back Home')
})