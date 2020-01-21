# Actions Service

Allows the description of actions without having to build 
all the functionality individually. We can describe a set
of `actions` by creating a new file in `pathActions` for 
the route, then add it to the switch in `ActionFactory`.

These will get rendered in the <Actions /> component in
the StandardDataPage.

## Defining an Action

An action includes the following elements

- `title`: i18n string, which will be used for the menu 
  text.
- `type`: We can have different action types. The main 
  use case is `mutate`; selection the action with somehow
  mutate the data, running some gql to achieve the expected
  result. Another usecase would be selection of rows, going 
  to another page, etc. Type allows for different types of 
  actions to be built. Current options are:
    - `mutate` | `separator` | `folder`

- `icon` (optional): icon to display in the menu
- `schema` (optional): the schema to run when action is selected
- `actions` (optional): If type `folder`, we can add another level in
  the menu. These are filled with other actions.
- `preAction` (optional): This defines a in-between step for an action,
  for example, we may wany to open up a confirmation dialog before. Or 
  another type of <Component />. These are separate to the service and 
  are defined in `src/components/Actions/helpers/ComponentFactory.tsx`.
  as a set of Components. The running of the action (in current 
  implementation) can defered until preFetch is called. The best example
  of this running see `src/components/Table/Header.tsx`.
