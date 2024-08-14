/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

var address = faker.address.streetAddress()
var city = faker.address.city()
var state = faker.address.state()
var zipCode = faker.address.zipCode()

export const addNewAdressPage = {
    addNewAdress(name, phoneNumber) {
        cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(name)
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(phoneNumber)
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(address)
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(city)
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(state)
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(zipCode)
        cy.get('[data-testid="save"]').click()
    }
}
