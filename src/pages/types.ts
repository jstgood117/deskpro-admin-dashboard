import { DocumentNode } from 'graphql';

export interface IProps {
  path: string;
  pageType: string;
  metadataQuery?: string;
}

export type PageContextValuesType = {
  path: string;
};

export type PathToQueryType = {
  [key:string]: DocumentNode
};