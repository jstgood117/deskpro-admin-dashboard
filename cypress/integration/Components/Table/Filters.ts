import Cypress from 'cypress';

type WaitXHR = Cypress.WaitXHR;
type ObjectLike = Cypress.ObjectLike;

describe('Table', () => {
  it('Filters correctly', () => {

    cy.server()
      .route({
        method: 'POST',
        url: 'https://daily-newadmin.deskprodemo.com/admin-api/graphql',
      }).as('graphql');

    cy.visit('/#/agents');

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike } = xhr;
      expect(request.body.operationName).to.equal('initalSetup');
    });

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike } = xhr;
      expect(request.body.operationName).to.equal('StandardDataPage');
    });

    cy.wait('@graphql').then((xhr: WaitXHR) => {
      const { request }: { request: ObjectLike } = xhr;
      expect(request.body).to.not.equal(null);
    });

    cy.get('button')
      .contains('Filter')
      .as('filterBtn');

    cy.get('button')
      .contains('Filter')
      .as('filterBtn');


    // Test name filter
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

    cy.get('table tr')
      .as('tableRows');

    cy.get('@tableRows')
      .should('have.length', 2);

    cy.get('@tableRows')
      .contains('John Doe');

    // Test Email filter
    cy.get('@filterBtn').click();

    // Filter Property Autocomplete
    cy.get('.FilterOptions__StyledAutoComplete-bftfql-0.iSdaiG')
      .find('input')
      .as('propertyAutocomplete');

    cy.get('@propertyAutocomplete')
      .focus()
      .type('Email{enter}');

    // Filter Operator Autocomplete
    cy.get('.FilterOptions__StyledAutoComplete-bftfql-0.irhpPS')
      .find('input')
      .as('operatorAutocomplete');

    cy.get('@operatorAutocomplete')
      .focus()
      .type('Ends{enter}');

    // Value input
    cy.get('.Helpers__InputStyled-jo9p83-0')
      .as('valueAutocomplete');

    cy.get('@valueAutocomplete')
      .focus()
      .clear()
      .type('com{enter}');

    // Apply button
    cy.get('.ButtonStyles__ButtonStyled-sc-1bcbueb-0.dhptZB')
      .contains('Add Filter')
      .as('applyFilterBtn');

    cy.get('@applyFilterBtn')
      .click();

    cy.get('table tr')
      .as('tableRows');

    cy.get('@tableRows')
      .should('have.length', 5);

    cy.get('@tableRows')
      .contains('testing@deskpro.com');

    cy.get('@tableRows')
      .contains('jamaal89@example.com');

    cy.get('@tableRows')
      .contains('jarret19@example.com');

    cy.get('@tableRows')
      .contains('content.publisher@deskprodemo.com');

    // Add another filter
    cy.get('@filterBtn').click();

    cy.get('.add-filter > .styled__div-avknkc-9 > .styled__button-avknkc-25')
      .click()
      .as('addAnotherFilter');

    cy.get(':nth-child(2) > [style="width: 160px;"] > .FilterOptions__StyledAutoComplete-bftfql-0 > div > input')
      .click()
      .as('anotherPropertyAutocomplete');

    cy.get('@anotherPropertyAutocomplete')
      .focus()
      .type('Can{enter}');

    cy.get(':nth-child(2) > [style="min-width: 186px;"] > .FilterOptions__StyledAutoComplete-bftfql-0 > div > input')
      .click()
      .as('anoterOperatorAutocomplete');

    cy.get('@anoterOperatorAutocomplete')
      .focus()
      .type('Yes{enter}');

    cy.get('.basic-multi-select > .select__control > .select__value-container')
      .click()
      .as('anotherValueAutoComplete');


    cy.get('#react-select-6-option-0') // Select Yes
      .click();

    cy.get('@applyFilterBtn')
      .click();

    cy.get('@tableRows')
      .should('have.length', 2);

    cy.get('@tableRows')
      .contains('John Doe');


    cy.get('.close-btn > .styled__button-avknkc-25')
      .as('clearFilters')
      .click();

    cy.get('@tableRows')
      .should('have.length', 13);

  });
});