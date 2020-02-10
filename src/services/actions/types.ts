import { DocumentNode } from 'graphql';
import { ModalActionType } from '../../components/Actions/helpers/components/Modal';

import { IOptions } from '../../types';

export type PreActionType = ModalActionType;

export type ActionsType = {
  type: string;
  icon?: string;
  title?: string;
  schema?: DocumentNode;
  selectOptions?: IOptions[] | DocumentNode;
  preAction?: PreActionType;
  actions?: ActionsType[];
  action?: (...args: any[]) => any;
};
