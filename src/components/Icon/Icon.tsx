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
import { ReactComponent as IconMenu } from '../../assets/svg/ic-menu.svg';
import { ReactComponent as IconRightVector } from '../../assets/svg/ic-right-vector.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/ic-trash.svg';
import { ReactComponent as IconChat } from '../../assets/svg/ic-chat.svg';
import { ReactComponent as IconUserSetting } from '../../assets/svg/ic-user-setting.svg';
import { ReactComponent as IconUserAlias } from '../../assets/svg/ic-user-alias.svg';
import { ReactComponent as IconCheck } from '../../assets/svg/ic-check.svg';
import { ReactComponent as IconCollapse } from '../../assets/svg/ic-collapse.svg';
import { ReactComponent as IconAttachment } from '../../assets/svg/ic-attachment.svg';
import { ReactComponent as IconError } from '../../assets/svg/ic-error.svg';
import { ReactComponent as IconNavChat } from '../../assets/svg/ic-nav-chat.svg';
import { ReactComponent as IconNavMessage } from '../../assets/svg/ic-nav-message.svg';
import { ReactComponent as IconNavUsers } from '../../assets/svg/ic-nav-users.svg';
import { ReactComponent as IconNavThumb } from '../../assets/svg/ic-nav-thumb.svg';
import { ReactComponent as IconNavNotification } from '../../assets/svg/ic-nav-notification.svg';
import { ReactComponent as IconNavSetting } from '../../assets/svg/ic-nav-setting.svg';
import { ReactComponent as IconNavDollar } from '../../assets/svg/ic-nav-dollar.svg';
import { ReactComponent as IconNavHelpCentre } from '../../assets/svg/ic-nav-helpCentre.svg';
import { ReactComponent as IconNavData } from '../../assets/svg/ic-nav-data.svg';
import { ReactComponent as IconNavPie } from '../../assets/svg/ic-nav-pie.svg';

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
	  case 'rightVector':
      return <IconRightVector />;
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
    case 'menu':
      return <IconMenu />;
    case 'trash':
      return <IconTrash />;
    case 'chat':
      return <IconChat />;
    case 'user.setting':
      return <IconUserSetting />;
    case 'user.alias':
      return <IconUserAlias />;
    case 'check':
      return <IconCheck />;
    case 'collapse':
      return <IconCollapse />;
    case 'attachment':
      return <IconAttachment />;
    case 'error':
      return <IconError />;
    case 'nav.chat':
      return <IconNavChat />;
    case 'nav.message':
      return <IconNavMessage />;
    case 'nav.users':
      return <IconNavUsers />;
    case 'nav.thumb':
      return <IconNavThumb />;
    case 'nav.notification':
      return <IconNavNotification />;
    case 'nav.setting':
      return <IconNavSetting />;
    case 'nav.dollar':
      return <IconNavDollar />;
    case 'nav.helpCentre':
      return <IconNavHelpCentre />;
    case 'nav.data':
      return <IconNavData />;
    case 'nav.pie':
      return <IconNavPie />;
    default:
      return <IconSetup />;
  }
};

export default Icon;