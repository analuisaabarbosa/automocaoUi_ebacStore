/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

var firstName = faker.person.firstName()
var lastName = faker.person.lastName()
var phoneNumber = faker.phone.number()
var email = faker.internet.email(firstName)
var password = faker.internet.password()

export const accountSignUpPage = {
	signUp() {	
        cy.get('[data-testid="signUp"] > .css-146c3p1').click()
        cy.get('[data-testid="firstName"]').type(firstName)
        cy.get('[data-testid="lastName"]').type(lastName)
        cy.get('[data-testid="phone"]').type(phoneNumber)
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(password)
        cy.get('[data-testid="repassword"]').type(password)
        cy.get('[data-testid="create"]').click()
	}
}
