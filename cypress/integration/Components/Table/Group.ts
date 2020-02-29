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

  it('Check group by feature correctly', () => {
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
      .contains('Group')
      .as('groupBtn');

    cy.get('button')
      .contains('Group')
      .as('groupBtn');

    cy.get('@groupBtn').click();
    cy.get('@groupBtn').click();

    // Group by teams
    cy.get('.MenuStyles__StyledMenuItem-hq5g91-4')
      .contains('Teams')
      .as('applyGroupByBtn');

    cy.get('@applyGroupByBtn')
      .click();

    cy.get('.groupTitle')
      .find('svg')
      .as('collapsedGroupByBtn');

    cy.get('@collapsedGroupByBtn')
      .click();

    cy.get('@collapsedGroupByBtn')
      .click();
  });
});