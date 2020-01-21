import React, { FC, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Drawer from '../components/Drawer';
import EditAgentForm from '../components/Drawer/Forms/EditAgentForm';

type Props = {
  path: string;
  pageType: string;
  metadataQuery: string;
};

type CombinedProps = Props & RouteComponentProps<any>;

const getDrawerChildComponent = (pageType: string) => {

  switch (pageType) {
    case 'EditAgentForm':
      return (
        <EditAgentForm />
      );
    default:
      return null;
  }
};

const DrawerType: FC<CombinedProps> = ({
  pageType,
  history
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const [open, setOpen] = useState(true);
  const Content = getDrawerChildComponent(pageType);

  const onClose = () => {
    setOpen(false);
    history.goBack();
  };

  return (
    <Drawer open={open && loading} onClose={onClose}>
      {Content}
    </Drawer>
  );
};

export default withRouter(DrawerType);
