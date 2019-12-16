export interface ITableDataProps {
  type:
    | 'avatar_text'
    | 'multiple_agents'
    | 'string'
    | 'icon'
    | 'relationships'
    | 'duration'
    | 'date_time'
    | 'yes_no'
    | 'link'
    | 'toogle'
    | 'attachment'
    | 'locale'
    | 'team'
    | 'multiple_teams'
    | 'count'
    | 'id'
    | 'timezone'
    | 'label'
    | 'currency'
    | 'code'
    | 'color'
    | 'input';
  props: any;
}