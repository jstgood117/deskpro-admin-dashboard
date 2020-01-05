import { ShallowWrapper, ReactWrapper } from 'enzyme';

export type WrapperType =
  ShallowWrapper<any, any, React.Component<{}, {}, any>> |
  ReactWrapper<any, any, React.Component<{}, {}, any>>;