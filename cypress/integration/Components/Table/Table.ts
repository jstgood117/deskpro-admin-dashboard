import Cypress from 'cypress';

type WaitXHR = Cypress.WaitXHR;
type ObjectLike = Cypress.ObjectLike;

describe('Table', () => {
  it('Visits agents page', () => {
    cy.server()
      .route({
        method: 'POST',
        url: 'https://site42423.deskprodemo.com/admin-api/graphql',
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
      expect(request.body).to.not.be(null);
    });

    cy.get('h1').contains('Agent');
  });

  it.only('Filters correctly', () => {

    cy.visit('/#/agents');

    cy.get('button')
      .contains('Filter')
      .as('filterBtn');

    cy.get('button')
      .contains('Filter')
      .as('filterBtn');

    cy.get('@filterBtn').click();

    // Filter Property Autocomplete
    cy.get('.FilterOptions__StyledAutoComplete-bftfql-0.iSdaiG')
      .find('input')
      .as('propertyAutocomplete');

    cy.get('@propertyAutocomplete')
      .focus()
      .type('Name{enter}');

    // Filter Operator Autocomplete
    cy.get('.FilterOptions__StyledAutoComplete-bftfql-0.irhpPS')
      .find('input')
      .as('operatorAutocomplete');

    cy.get('@operatorAutocomplete')
      .focus()
      .type('Contains{enter}');

    // Value input
    cy.get('.Helpers__InputStyled-jo9p83-0')
      .as('valueAutocomplete');

    cy.get('@valueAutocomplete')
      .focus()
      .type('John{enter}');

    // Apply button
    cy.get('.ButtonStyles__ButtonStyled-sc-1bcbueb-0.dhptZB')
      .contains('Add Filter')
      .as('applyFilterBtn');

    cy.get('@applyFilterBtn')
      .click();

  });
});