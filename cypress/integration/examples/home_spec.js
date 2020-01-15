/// <reference types="Cypress" />

describe('Homepage', function() {
  it('loads correctly', function() {
    cy.visit('/');
  })
});