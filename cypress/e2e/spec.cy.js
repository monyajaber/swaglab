/// <reference types= "cypress" />

Cypress.Commands.add("a",(username,password) => {
  cy.visit("https://www.saucedemo.com")

    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})
describe('swag lab', () => {
  it('add all items to card', () => {
    
   
   cy.a("problemuser","secret_sauce")
   cy.a("standard_user","secret_sauce")
   cy.get('.btn').click({multiple:true})
   
  });
});