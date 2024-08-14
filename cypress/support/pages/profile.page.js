/// <reference types="cypress" />

var { firstName } = require("../pages/accountSignUp.page")

export const profilePage = {
    customerName: () => { return cy.get('[data-testid="CustomerName"]').should('contain', firstName) }
}