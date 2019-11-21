import React, {FC} from 'react';

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
import { ReactComponent as Illustration } from '../../assets/svg/agents-header.svg';
import { ReactComponent as IconIndeterminateCheckBox } from '../../assets/svg/ic-indeterminate-cb.svg';
import { ReactComponent as IconNormalCheckBox } from '../../assets/svg/ic-normal-cb.svg';
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
import { ReactComponent as IconCaretRight } from '../../assets/svg/ic-caret-right.svg';
import { ReactComponent as IconCaretLeft } from '../../assets/svg/ic-caret-left.svg';
import { ReactComponent as IconCheck2 } from '../../assets/svg/ic-check-2.svg';
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
import { ReactComponent as IconDial } from '../../assets/svg/ic-dial.svg';
import { ReactComponent as IconArrowDropUp } from '../../assets/svg/ic-arrow-drop-up.svg';
import { ReactComponent as IconArrowDropDown } from '../../assets/svg/ic-arrow-drop-down.svg';
import { ReactComponent as IconDragDrop } from '../../assets/svg/ic-drag-drop.svg';
import { ReactComponent as IconRefresh } from '../../assets/svg/ic-refresh.svg';
import { ReactComponent as IconMoveUp } from '../../assets/svg/ic-move-up.svg';
import { ReactComponent as IconMoveDown } from '../../assets/svg/ic-move-down.svg';
import { ReactComponent as IconMoveLeft } from '../../assets/svg/ic-move-left.svg';
import { ReactComponent as IconUndo } from '../../assets/svg/ic-undo.svg';
import { ReactComponent as IconCancelCall } from '../../assets/svg/ic-cancel-call.svg';
import { ReactComponent as IconExport } from '../../assets/svg/ic-export.svg';

export interface IProps {
  name: string;
}

const Icon: FC<IProps> = props => {
  switch (props.name) {
    case 'setup':
      return <IconSetup />;
    case 'channels':
      return <IconChannel />;
    case 'agent':
      return <IconAgent />;
    case 'help':
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
    case 'checkbox.normal':
      return <IconNormalCheckBox />;
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
    case 'caret-right':
      return <IconCaretRight />;
    case 'caret-left':
      return <IconCaretLeft />;
    case 'check-2':
      return <IconCheck2 />;
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
    case 'dial':
      return <IconDial />;
    case 'arrow-drop-up':
      return <IconArrowDropUp />;
    case 'arrow-drop-down':
      return <IconArrowDropDown />;
    case 'drag-and-drop':
      return <IconDragDrop />;
    case 'refresh':
      return <IconRefresh />;
    case 'move-up':
      return <IconMoveUp />;
    case 'move-down':
      return <IconMoveDown />;
    case 'move-left':
      return <IconMoveLeft />;
    case 'undo':
      return <IconUndo />;
    case 'cancel-call':
      return <IconCancelCall />;
    case 'export':
      return <IconExport />;
    default:
      return <IconSetup />;
  }
};

export default Icon;
