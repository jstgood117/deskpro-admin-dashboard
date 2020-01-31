import React, { FC } from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip';

import { ReactComponent as IconSetup } from '../../assets/svg/icons/ic-setup.svg';
import { ReactComponent as IconChannel } from '../../assets/svg/icons/ic-channel.svg';
import { ReactComponent as IconAgent } from '../../assets/svg/icons/ic-agent.svg';
import { ReactComponent as IconHelp } from '../../assets/svg/icons/ic-help.svg';
import { ReactComponent as IconDownVector } from '../../assets/svg/icons/ic-down-vector.svg';
import { ReactComponent as IconSearch } from '../../assets/svg/icons/ic-search.svg';
import { ReactComponent as IconFilter } from '../../assets/svg/icons/ic-filter.svg';
import { ReactComponent as IconSort } from '../../assets/svg/icons/ic-sort.svg';
import { ReactComponent as IconGroup } from '../../assets/svg/icons/ic-group.svg';
import { ReactComponent as IconView } from '../../assets/svg/icons/ic-view.svg';
import { ReactComponent as IconTableView } from '../../assets/svg/icons/ic-table-view.svg';
import { ReactComponent as IconListView } from '../../assets/svg/icons/ic-list-view.svg';
import { ReactComponent as IconMapView } from '../../assets/svg/icons/ic-map-view.svg';
import { ReactComponent as IconPlus } from '../../assets/svg/icons/ic-plus.svg';
import { ReactComponent as IconQuestion } from '../../assets/svg/icons/ic-question.svg';
import { ReactComponent as IconLoginLog } from '../../assets/svg/icons/ic-login-log.svg';
import { ReactComponent as IconSetting } from '../../assets/svg/icons/ic-setting.svg';
import { ReactComponent as IconIndeterminateCheckBox } from '../../assets/svg/icons/ic-indeterminate-cb.svg';
import { ReactComponent as IconNormalCheckBox } from '../../assets/svg/icons/ic-normal-cb.svg';
import { ReactComponent as IconClose } from '../../assets/svg/icons/ic-close.svg';
import { ReactComponent as IconAdmin } from '../../assets/svg/icons/ic-admin.svg';
import { ReactComponent as IconReport } from '../../assets/svg/icons/ic-report.svg';
import { ReactComponent as IconUserCheck } from '../../assets/svg/icons/ic-user-check.svg';
import { ReactComponent as IconClock } from '../../assets/svg/icons/ic-clock.svg';
import { ReactComponent as IconMenu } from '../../assets/svg/icons/ic-menu.svg';
import { ReactComponent as IconRightVector } from '../../assets/svg/icons/ic-right-vector.svg';
import { ReactComponent as IconTrash } from '../../assets/svg/icons/ic-trash.svg';
import { ReactComponent as IconChat } from '../../assets/svg/icons/ic-chat.svg';
import { ReactComponent as IconUserSetting } from '../../assets/svg/icons/ic-user-setting.svg';
import { ReactComponent as IconUserAlias } from '../../assets/svg/icons/ic-user-alias.svg';
import { ReactComponent as IconCheck } from '../../assets/svg/icons/ic-check.svg';
import { ReactComponent as IconCollapse } from '../../assets/svg/icons/ic-collapse.svg';
import { ReactComponent as IconAttachment } from '../../assets/svg/icons/ic-attachment.svg';
import { ReactComponent as IconError } from '../../assets/svg/icons/ic-error.svg';
import { ReactComponent as IconCaretRight } from '../../assets/svg/icons/ic-caret-right.svg';
import { ReactComponent as IconCaretLeft } from '../../assets/svg/icons/ic-caret-left.svg';
import { ReactComponent as IconCheck2 } from '../../assets/svg/icons/ic-check-2.svg';
import { ReactComponent as IconNavChat } from '../../assets/svg/icons/ic-nav-chat.svg';
import { ReactComponent as IconNavMessage } from '../../assets/svg/icons/ic-nav-message.svg';
import { ReactComponent as IconNavUsers } from '../../assets/svg/icons/ic-nav-users.svg';
import { ReactComponent as IconNavThumb } from '../../assets/svg/icons/ic-nav-thumb.svg';
import { ReactComponent as IconNavNotification } from '../../assets/svg/icons/ic-nav-notification.svg';
import { ReactComponent as IconNavSetting } from '../../assets/svg/icons/ic-nav-setting.svg';
import { ReactComponent as IconNavDollar } from '../../assets/svg/icons/ic-nav-dollar.svg';
import { ReactComponent as IconNavHelpCentre } from '../../assets/svg/icons/ic-nav-helpCentre.svg';
import { ReactComponent as IconNavData } from '../../assets/svg/icons/ic-nav-data.svg';
import { ReactComponent as IconNavPie } from '../../assets/svg/icons/ic-nav-pie.svg';
import { ReactComponent as IconDial } from '../../assets/svg/icons/ic-dial.svg';
import { ReactComponent as IconArrowDropUp } from '../../assets/svg/icons/ic-arrow-drop-up.svg';
import { ReactComponent as IconArrowDropDown } from '../../assets/svg/icons/ic-arrow-drop-down.svg';
import { ReactComponent as IconDragDrop } from '../../assets/svg/icons/ic-drag-drop.svg';
import { ReactComponent as IconRefresh } from '../../assets/svg/icons/ic-refresh.svg';
import { ReactComponent as IconMoveUp } from '../../assets/svg/icons/ic-move-up.svg';
import { ReactComponent as IconMoveDown } from '../../assets/svg/icons/ic-move-down.svg';
import { ReactComponent as IconMoveLeft } from '../../assets/svg/icons/ic-move-left.svg';
import { ReactComponent as IconUndo } from '../../assets/svg/icons/ic-undo.svg';
import { ReactComponent as IconCancelCall } from '../../assets/svg/icons/ic-cancel-call.svg';
import { ReactComponent as IconExport } from '../../assets/svg/icons/ic-export.svg';
import { ReactComponent as IconFile } from '../../assets/svg/icons/ic-file.svg';
import { ReactComponent as IconDragAndDrop } from '../../assets/svg/icons/ic-drag-drop-file.svg';
import { ReactComponent as IconPencil } from '../../assets/svg/icons/ic-pencil.svg';
import { ReactComponent as IconDuplicate } from '../../assets/svg/icons/ic-duplicate.svg';
import { ReactComponent as IconElephant } from '../../assets/svg/icons/ic-elephant.svg';
import { ReactComponent as IconUpload } from '../../assets/svg/icons/ic-upload.svg';
import { ReactComponent as IconInfoText } from '../../assets/svg/icons/ic-info-text.svg';
import { ReactComponent as IconQuestionText } from '../../assets/svg/icons/ic-question-text.svg';
import { ReactComponent as IconDown } from '../../assets/svg/icons/ic-down.svg';
import { ReactComponent as IconDollarSign } from '../../assets/svg/icons/ic-dollar-sign.svg';
import { ReactComponent as IconHelpCenter } from '../../assets/svg/icons/ic-helpCenter.svg';
import { ReactComponent as IconArrowRight } from '../../assets/svg/icons/ic-arrow-right.svg';
import { ReactComponent as IconSortDownActive } from '../../assets/svg/icons/ic-sort-down-active.svg';
import { ReactComponent as IconSortUpActive } from '../../assets/svg/icons/ic-sort-up-active.svg';
import { ReactComponent as IconGroupingUp } from '../../assets/svg/icons/ic-grouping-up.svg';
import { ReactComponent as IconGroupingDown } from '../../assets/svg/icons/ic-grouping-down.svg';

export interface IProps {
  name: string;
}
const StyledIcon = styled.span`
  display: inline-flex;

  &:hover {
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
`;
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
    case 'file':
      return <IconFile />;
    case 'drag-and-drop-file':
      return <IconDragAndDrop />;
    case 'pencil':
      return <IconPencil />;
    case 'duplicate':
      return <IconDuplicate />;
    case 'elephant':
      return <IconElephant />;
    case 'upload':
      return <IconUpload />;
    case 'down':
      return <IconDown />;
    case 'ic-dollar-sign':
      return <IconDollarSign />;
    case 'ic-help-center':
      return <IconHelpCenter />;
    case 'ic-arrow-right':
      return <IconArrowRight />;
    case 'ic-sort-down-active':
      return <IconSortDownActive />;
    case 'ic-sort-up-active':
      return <IconSortUpActive />;
    case 'ic-grouping-up':
      return <IconGroupingUp />;
    case 'ic-grouping-down':
      return <IconGroupingDown />;
    case 'info-text':
      return (
        <Tooltip content='Info text' styleType='light' placement='bottom'>
          <StyledIcon>
            <IconInfoText />
          </StyledIcon>
        </Tooltip>
      );
    case 'info-question-text':
      return (
        <StyledIcon>
          <IconQuestionText />
        </StyledIcon>
      );
    default:
      return <IconSetup />;
  }
};

export default Icon;
