import Cypress from 'cypress';

type WaitXHR = Cypress.WaitXHR;
type ObjectLike = Cypress.ObjectLike;

describe('Table', () => {
  it('Visits agents page', () => {
    cy.server()
      .route({
        method: 'POST',
        url: 'https://daily-newadmin.deskprodemo.com/admin-api/graphql',
      }).as('graphql');

    cy.visit('/#/agents');

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike} = xhr;
      expect(request.body.operationName).to.equal('initalSetup');
    });

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike} = xhr;
      expect(request.body.operationName).to.equal('StandardDataPage');
    });

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike} = xhr;
      // expect(request.body).to.not.be(null);
      expect(request.body).to.not.null;
    });

    cy.get('h1').contains('Agent');
  });

  it('Check new button and drawer', () => {
    cy.server()
      .route({
        method: 'POST',
        url: 'https://daily-newadmin.deskprodemo.com/admin-api/graphql',
      }).as('graphql');

    cy.visit('/#/agents');

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike} = xhr;
      expect(request.body.operationName).to.equal('initalSetup');
    });

    cy.get('button')
      .contains('New')
      .as('addNewBtn');

    cy.get('@addNewBtn').click();

    cy.url().should('eq', 'http://localhost:3000/#/agents/new')

    cy.get('.DrawerStyles__StyledClose-sc-1tb7b1l-3.hlXcsA')
      .find('svg')
      .as('closeDrawerBtn');

    cy.get('@closeDrawerBtn')
      .click();

    cy.url().should('eq', 'http://localhost:3000/#/agents')
  });
});