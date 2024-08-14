/// <reference types="cypress" />

const { accountSignUpPage } = require("../support/pages/accountSignUp.page");
const { homePage } = require("../support/pages/home.page");
const { profilePage } = require("../support/pages/profile.page");

describe('Account Creation Flow', () => {
    
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }),
        cy.visit('/')
    });

    it('Should allow a user to successfully create an account', () => {
        homePage.openMenu('Account')
        accountSignUpPage.signUp()
        homePage.openMenu('Account')
        profilePage.customerName()
    });

});