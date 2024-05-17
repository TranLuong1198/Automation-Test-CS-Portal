const moment = require('moment');

declare namespace Cypress {
  interface Chainable {
    login(): void;
    formatDate(): Chainable<string>;
  }
}

Cypress.Commands.add('formatDate', () => {
  return moment().format('YYYY-MM-DD');
});

Cypress.Commands.add('login', () => {
  cy.fixture('login').then((data) => {
    cy.visit('/');

    /* Login the CS Module webpage, with */
    // - [Examination Date]
    cy.get('input[type="date"]').type(`${moment().format('YYYY-MM-DD')}`);

    // - [Examination Center]
    cy.get('input[type="search"]').eq(0).type(data.examinationCentre);
    cy.get('ul li').contains(data.examinationCentre).click();

    // - [Subject]
    cy.get('select').eq(0).select(data.subject);

    // - [Paper]
    cy.get('select').eq(1).select(data.paper);

    // - [EP No.] and
    cy.get('input[type="search"]').eq(1).type(data.ePNumber);
    cy.get('ul li').contains(data.ePNumber).click();

    // - [Password]
    cy.get('input[type="password"]').type(data.password);

    // Click [Login]
    cy.get('button').contains('Login').click();
  });
});
