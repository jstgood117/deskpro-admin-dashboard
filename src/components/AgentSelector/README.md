# Agent Selector Component Contract

- it has Props of:
  agents: {id: string; name: string; avatar?: string}[] - list of availabel agents
  selected: {[id: string]: boolean} - map of selected agents id
  onSelect: ({[id: string]: boolean}) => void - action fired on `Save` button click
- it has State
  selected - map of selected agents
- it always renders a <div> element, containing the rest of the component
