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
      expect(request.body).to.not.equal(null);
    });

    cy.get('h1').contains('Agent');
  });
});