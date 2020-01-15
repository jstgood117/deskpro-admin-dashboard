import { DocumentNode } from 'graphql';
import {
  ModalActionType
} from '../../components/Actions/helpers/components/Modal';

export type PreActionType = ModalActionType;

export type ActionsType = {
  type:string;
  icon?:string;
  title?:string;
  schema?:DocumentNode;
  preAction?: PreActionType;
  actions?: ActionsType[];
};