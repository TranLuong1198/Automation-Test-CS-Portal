describe('Allow all kinds of designated CSs (hall CS, classroom CS) to login the CS module', () => {
  it('Input all valid value', () => {
    cy.fixture('login').then((data) => {
      cy.visit('/');
     

      /*Login the CS Module webpage, with*/
      // - [Examination Date]
      cy.formatDate().then((date) => {
        cy.get('input[type="date"]').type(date);
      });

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

      /* Display the layout respectively according to data input */
      // Green notification [Successfully logged in]
      cy.contains('Successfully logged in.').should('be.visible');

      // Redirect to exam info page (with url path contains "/qrcode")
      cy.url().should('include', '/qrcode');
    });
  });

  // it('Input exam date that contain no exam session e.g. "2004-01-01"', () => {
  //   cy.visit('/');
  //   /*Login the CS Module webpage, with */
  //   // - [Examination Date]
  //   cy.get('input[type="date"]').type('2004-01-01');

  //   // Dropdown list on field [Examination Centre] shows [No Data]
  //   cy.get('input[type="search"]').eq(0).click();
  //   cy.get('ul li').contains('No Data').should('be.visible');

  //   // Other fields, does not provide anything to select
  //   cy.get('input[type="search"]').eq(0).should('have.value', '');
  //   cy.get('select').eq(0).should('have.value', '');
  //   cy.get('select').eq(1).should('have.value', '');
  //   cy.get('input[type="search"]').eq(1).should('have.value', '');
  //   cy.get('input[type="password"]').should('have.value', '');
  // });

  // it('Does not input all exam data and click [Login]', () => {
  //   cy.visit('/');
  //   //Click [Login] without inputing anything
  //   cy.get('button').contains('Login').click();

  //   // Blue notification [Please input the valid information.] show at the top
  //   cy.contains('Please input the valid information.').should('be.visible');
  // });

  // it('Input all valid value except Password', () => {
  //   cy.visit('/');

  //   /* Login the CS Module webpage, with */
  //   // - [Examination Date]
  //   cy.get('input[type="date"]').type('2024-05-16');

  //   // - [Examination Center]
  //   cy.get('input[type="search"]').eq(0).type('J1850 - Ning Po College');
  //   cy.get('ul li').contains('J1850 - Ning Po College').click();

  //   // - [Subject]
  //   cy.get('select').eq(0).select('A110C - History - C');

  //   // - [Paper]
  //   cy.get('select').eq(1).select('f9953956-966f-4d8c-a3c6-e2e752085634');

  //   // - [EP No.] and
  //   cy.get('input[type="search"]').eq(1).type('20327-036');
  //   cy.get('ul li').contains('20327-036').click();

  //   // - [Password]
  //   cy.get('input[type="password"]').type('1234567');

  //   // Click [Login]
  //   cy.get('button').contains('Login').click();

  //   // Red notification [Incorrect EP number or password.]
  //   cy.contains('Incorrect EP number or password.').should('be.visible');
  // });
});
