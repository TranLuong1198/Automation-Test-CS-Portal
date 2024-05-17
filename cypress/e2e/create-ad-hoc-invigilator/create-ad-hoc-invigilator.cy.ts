describe('Allow to create an ad hoc invigilator for login and invigilator duty', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Create ad hoc without input any data', () => {
    // After successful login CS portal:
    // Remain empty on field [Invigilator English Name]
    cy.get('form[data-method="engName"] input.text-box').as('englishNameInput');

    // Bạn có thể sử dụng alias này để thực hiện các hành động trên input
    cy.get('@englishNameInput').type('Your English Name');
    // Click the [Create] button
  });
});
