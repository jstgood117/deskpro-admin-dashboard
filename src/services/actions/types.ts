export type ActionsType = {
  type:string;
  icon?:string;
  title?:string;
  schema?:string;
  actions?: ActionsType[];
};