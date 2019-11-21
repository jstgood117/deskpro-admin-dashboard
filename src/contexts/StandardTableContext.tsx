import React, { createContext, useState } from 'react';

const defaultContextValues: any = {
  contextValue: '',
  setcontextValue: () => {}
};
export const StandardTableContext = createContext(defaultContextValues);

const StandardTableProvider = (props: any) => {
  const [contextValue, setRegionValue] = useState('initial');
  const setcontextValue = (param: string) => {
    setRegionValue(param);
  };
  return (
    <StandardTableContext.Provider value={{ contextValue, setcontextValue }}>
      {props.children}
    </StandardTableContext.Provider>
  );
};

export default StandardTableProvider;
