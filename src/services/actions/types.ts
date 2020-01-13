export type ActionsType = {
  type:string;
  icon?:string;
  title?:string;
  schema?:string;
  preAction?: string;
  actions?: ActionsType[];
};