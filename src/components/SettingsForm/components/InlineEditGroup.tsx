import * as React from 'react';
import classNames from 'classnames';

import FieldContainer from './FieldContainer';
import InlineEdit from './InlineEdit';
import { GenericFormComponent } from '../GenericFormComponent';
import { generateElementInfo } from './helpers/generateElementInfo';
import { generateTitleAndDescription } from './helpers/generateTitleAndDescription';

const InlineEditGroup: React.FC = (props: any) => {
  // If props doesn't exist or if it does, its set to true
  const enabled =
    !props.showOn || props.formikProps.values[props.showOn] === true;
  const enabledElement = props.showRevert ? !enabled : enabled;
  return (
    <div className={classNames('vert-element-group', props.className)}>
      <div className='form-item'>
        <div className='vert-element-field'>
          {props.inline && (
            <InlineEdit {...props} inline={props.inline} field={props.field} formikProps={props.formikProps} />
            )}
          {generateTitleAndDescription('group-details', props)}
          {generateElementInfo(props)}
        </div>
      </div>
      <div className='vert-elements'>
        {enabledElement &&
          props.elements.map((element: any, i: number) =>
            element.type === 'field' ? (
              <FieldContainer {...element} key={i} formikProps={props.formikProps} />
            ) : (
                <GenericFormComponent {...element} key={i} formikProps={props.formikProps} />
              )
          )}
      </div>
    </div>
  );
};

export default InlineEditGroup;
