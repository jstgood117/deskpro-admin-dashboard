# RuleBuilder Component Contract

- it has Props of:

  schema: IRuleBuilderSchema - Schema for rule builder
  value: IRuleValue[] - Array value of Rule builder
  onChange: (value: IRuleValue) => void - Change value event

- it has no State

- it always renders `<div>` element, `<form>` element