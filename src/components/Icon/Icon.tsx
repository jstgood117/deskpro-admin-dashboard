import React, { SFC } from 'react';

import { ReactComponent as IconSetup } from '../../assets/svg/ic-setup.svg';
import { ReactComponent as IconChannel } from '../../assets/svg/ic-channel.svg';
import { ReactComponent as IconAgent } from '../../assets/svg/ic-agent.svg';
import { ReactComponent as IconHelp } from '../../assets/svg/ic-help.svg';
import { ReactComponent as IconDownVector } from '../../assets/svg/ic-down-vector.svg';
import { ReactComponent as IconSearch } from '../../assets/svg/ic-search.svg';
import { ReactComponent as IconFilter } from '../../assets/svg/ic-filter.svg';
import { ReactComponent as IconSort } from '../../assets/svg/ic-sort.svg';
import { ReactComponent as IconGroup } from '../../assets/svg/ic-group.svg';
import { ReactComponent as IconView } from '../../assets/svg/ic-view.svg';
import { ReactComponent as IconTableView } from '../../assets/svg/ic-table-view.svg';
import { ReactComponent as IconListView } from '../../assets/svg/ic-list-view.svg';
import { ReactComponent as IconMapView } from '../../assets/svg/ic-map-view.svg';
import { ReactComponent as IconPlus } from '../../assets/svg/ic-plus.svg';
import { ReactComponent as IconQuestion } from '../../assets/svg/ic-question.svg';
import { ReactComponent as IconLoginLog } from '../../assets/svg/ic-login-log.svg';
import { ReactComponent as IconSetting } from '../../assets/svg/ic-setting.svg';
import { ReactComponent as Illustration } from '../../assets/svg/illustration.svg';
import { ReactComponent as IconIndeterminateCheckBox } from '../../assets/svg/ic-indeterminate-cb.svg';
import { ReactComponent as IconClose } from '../../assets/svg/ic-close.svg';
import { ReactComponent as IconAdmin } from '../../assets/svg/ic-admin.svg';
import { ReactComponent as IconReport } from '../../assets/svg/ic-report.svg';
import { ReactComponent as IconUserCheck } from '../../assets/svg/ic-user-check.svg';
import { ReactComponent as IconClock } from '../../assets/svg/ic-clock.svg';

export interface IProps {
  name: string;
}

const Icon: SFC<IProps> = props => {
  switch (props.name) {
    case 'admin.sidebar.setup':
      return <IconSetup />;
    case 'admin.sidebar.channels':
      return <IconChannel />;
    case 'admin.sidebar.agents':
      return <IconAgent />;
    case "admin.sidebar.help.helpCentre":
      return <IconHelp />;
    case 'viewMode.table':
      return <IconTableView />;
    case 'viewMode.list':
      return <IconListView />;
    case 'viewMode.map':
      return <IconMapView />;
    case 'plus':
      return <IconPlus />;
    case 'question':
      return <IconQuestion />;
    case 'loginLog':
      return <IconLoginLog />;
    case 'settings':
      return <IconSetting />;
    case 'illustration':
      return <Illustration />;
	  case 'downVector':
      return <IconDownVector />;
    case 'search':
      return <IconSearch />;
    case 'filter':
      return <IconFilter />;
    case 'sort':
      return <IconSort />;
    case 'group':
      return <IconGroup />;
    case 'view':
      return <IconView />;
    case 'checkbox.indeterminate':
      return <IconIndeterminateCheckBox />;
    case 'close':
      return <IconClose />;
    case 'admin':
      return <IconAdmin />;
    case 'report':
      return <IconReport />;
    case 'user.check':
      return <IconUserCheck />;
    case 'clock':
      return <IconClock />;
    default:
      return <IconSetup />;
  }
};

export default Icon;