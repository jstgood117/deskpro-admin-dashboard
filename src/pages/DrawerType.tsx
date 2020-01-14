import React, { SFC } from 'react';
import Drawer from '../components/Drawer';
import EditAgentForm from '../components/Drawer/Forms/EditAgentForm';

type Props = {
  path: string;
  pageType: string;
  metadataQuery: string;
};

const getDrawerChildComponent = (pageType: string) => {

  switch(pageType) {
    case 'EditAgentForm':
    default:
      return (
        <EditAgentForm />
      );
  }
};

const DrawerType: SFC<Props> = ({
  pageType
}) => {
  const Content = getDrawerChildComponent(pageType);
  return (
    <Drawer>
      {Content}
    </Drawer>
  );
};

export default DrawerType;
