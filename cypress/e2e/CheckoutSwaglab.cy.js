/// <reference types= "cypress" />

Cypress.Commands.add("a", (username, password) => {
  cy.visit("https://www.saucedemo.com");

  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("addToCart", (number_of_items) => {
  for (let i = 0; i < number_of_items; i++) {
    cy.get(".btn").eq(i).click();
  }
});
describe("swag lab", () => {
  it("add certain number of the items to card", () => {
    cy.a("problemuser", "secret_sauce");
    cy.a("standard_user", "secret_sauce");
    cy.wait(2000);
    cy.addToCart(4);
    cy.wait(2000);
    cy.get(".shopping_cart_badge").invoke("text").should("include", "4");
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.wait(2000);
    cy.get('[data-test="firstName"]').type("monya");
    cy.get('[data-test="lastName"]').type("jaber");
    cy.wait(2000);
    cy.get('[data-test="postalCode"]').type("1122");
    cy.get('[data-test="continue"]').click();
    cy.wait(2000);
    cy.get('[data-test="finish"]').click();

    cy.get(".complete-header").invoke('text').should('contain',"Thank you")
    });
});
