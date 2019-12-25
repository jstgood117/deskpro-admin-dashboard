import React, { SFC } from 'react';
import Handlebars from 'handlebars';

import { KeyValue } from '../../types';

export type HandlebarsProps = {
  template: string;
  data: KeyValue;
};

export const HandlebarsTemplate: SFC<HandlebarsProps> = ({
  template,
  data
}) => {

  const buildTemplate = Handlebars.compile(template);

  const result = buildTemplate(data);

  return (
    <div dangerouslySetInnerHTML={{ __html: result }} />
  );
};

export default HandlebarsTemplate;
