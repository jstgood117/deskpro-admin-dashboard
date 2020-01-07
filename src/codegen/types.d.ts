export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-01-01 13:00:00`. */
  DateTime: any,
  /** A JSON type with support of Fluent and Collections */
  JSON: any,
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any,
  /** A RFC 5321 compliant email */
  Email: any,
};

export type API_Agent = {
   __typename?: 'Agent',
  id: Scalars['ID'],
  name: Scalars['String'],
  avatarUrn?: Maybe<Scalars['String']>,
  first_name: Scalars['String'],
  last_name: Scalars['String'],
  primary_email: Scalars['String'],
  emails: Array<Scalars['String']>,
  can_admin: Scalars['Boolean'],
  can_agent: Scalars['Boolean'],
  agent_teams: Array<Maybe<API_AgentTeam>>,
  agent_groups: Array<Maybe<API_AgentGroup>>,
  date_last_login?: Maybe<Scalars['DateTime']>,
  ticket_departments: Array<Maybe<API_TicketDepartment>>,
};

export type API_AgentGroup = {
   __typename?: 'AgentGroup',
  id: Scalars['ID'],
  sys_name?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  members: Array<Maybe<API_Agent>>,
};

export enum API_AgentOrderFields {
  Id = 'ID',
  Name = 'NAME',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME'
}

export type API_AgentTeam = {
   __typename?: 'AgentTeam',
  id: Scalars['ID'],
  name: Scalars['String'],
  avatarUrn?: Maybe<Scalars['String']>,
  members: Array<Maybe<API_Agent>>,
};

export type API_ApiKey = {
   __typename?: 'APIKey',
  id: Scalars['ID'],
  code: Scalars['String'],
  token: Scalars['String'],
  agent?: Maybe<API_Agent>,
  note?: Maybe<Scalars['String']>,
  flags: Array<Maybe<API_ApiKeyFlags>>,
};

export enum API_ApiKeyFlags {
  AdminManage = 'ADMIN_MANAGE',
  Super = 'SUPER',
  ApiV1 = 'API_V1',
  ApiV2 = 'API_V2'
}

/** AppInstance */
export type API_AppInstance = {
   __typename?: 'AppInstance',
  id: Scalars['ID'],
  title: Scalars['String'],
  publisher?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type API_ApprovalApprover = {
   __typename?: 'ApprovalApprover',
  id: Scalars['ID'],
  name: Scalars['String'],
  avatarUrn?: Maybe<Scalars['String']>,
  first_name: Scalars['String'],
  last_name: Scalars['String'],
};

export type API_ApprovalTemplate = {
   __typename?: 'ApprovalTemplate',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  type: API_ApprovalType,
  required_approvals: Scalars['Int'],
  required_rejections: Scalars['Int'],
  approvers: Array<API_ApprovalApprover>,
};

export type API_ApprovalType = {
   __typename?: 'ApprovalType',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  templates_count: Scalars['Int'],
};

export type API_AsyncPageDataView = {
   __typename?: 'AsyncPageDataView',
  /** Title of the table. Only used if more than 1 table on the page (tab title) */
  title?: Maybe<Scalars['String']>,
  /** If there is a filter, the GraphQL type of the filter options */
  filterType?: Maybe<Scalars['String']>,
  /** If there are ordering options, the GraphQL enum of possible values */
  orderByType?: Maybe<Scalars['String']>,
  /** If there are grouping options, the GraphQL enum of possible values */
  groupByType?: Maybe<Scalars['String']>,
  /** The query to send to get the data to display in the table */
  dataQuery: Scalars['String'],
  /** Definition of the table */
  tableDef?: Maybe<API_PageDataTable>,
  /** Definition of the filters */
  filterDef: Array<Maybe<API_PageDataFilters>>,
};

export type API_Brand = {
   __typename?: 'Brand',
  id: Scalars['ID'],
  name: Scalars['String'],
  slug: Scalars['String'],
};

export type API_ChatDepartment = {
   __typename?: 'ChatDepartment',
  id: Scalars['ID'],
  parent?: Maybe<API_ChatDepartment>,
  children: Array<Maybe<API_ChatDepartment>>,
  depth: Scalars['Int'],
  avatarUrn?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  display_order: Scalars['Int'],
  effective_display_order: Scalars['Int'],
};

export type API_ChatQueue = {
   __typename?: 'ChatQueue',
  id: Scalars['ID'],
  name: Scalars['String'],
  routing_model: API_ChatQueueRoutingModel,
  answer_timeout: Scalars['Int'],
  is_all_agents: Scalars['Boolean'],
  max_queue_size: Scalars['Int'],
  agents?: Maybe<Array<Maybe<API_Agent>>>,
};

export enum API_ChatQueueRoutingModel {
  RoundRobin = 'round_robin',
  LeastUtilized = 'least_utilized',
  Simulring = 'simulring'
}

/** Community forums */
export type API_CommunityForum = {
   __typename?: 'CommunityForum',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  usergroups?: Maybe<Array<API_CrmUserGroup>>,
  statuses?: Maybe<Array<Maybe<API_CommunityTopicStatus>>>,
  active_statuses?: Maybe<Array<Maybe<API_CommunityTopicStatus>>>,
  closed_statuses?: Maybe<Array<Maybe<API_CommunityTopicStatus>>>,
};

/** Filter forums by brand */
export type API_CommunityForumsFilter = {
  brand: Scalars['Int'],
};

export type API_CommunityForumsOrderBy = {
  field?: Maybe<API_CommunityForumsOrderFields>,
  order?: Maybe<API_SortOrder>,
};

export enum API_CommunityForumsOrderFields {
  Id = 'id',
  Name = 'name',
  /** Default order */
  DisplayOrder = 'display_order'
}

/** Community topic status categories */
export type API_CommunityTopicStatus = {
   __typename?: 'CommunityTopicStatus',
  id: Scalars['ID'],
  status_type: Scalars['String'],
  title: Scalars['String'],
};

export type API_CommunityTopicStatusesOrderBy = {
  field?: Maybe<API_CommunityTopicStatusOrderFields>,
  order?: Maybe<API_SortOrder>,
};

/** Filter statuses by brand */
export type API_CommunityTopicStatusFilter = {
  brand: Scalars['Int'],
};

export enum API_CommunityTopicStatusOrderFields {
  Id = 'id',
  Title = 'title',
  /** Default order */
  DisplayOrder = 'display_order'
}

export type API_CrmBannedEmail = {
   __typename?: 'CrmBannedEmail',
  id: Scalars['ID'],
  banned_email: Scalars['String'],
};

export type API_CrmBannedIp = {
   __typename?: 'CrmBannedIp',
  id: Scalars['ID'],
  banned_ip: Scalars['String'],
};

export type API_CrmUserGroup = {
   __typename?: 'CrmUserGroup',
  id: Scalars['ID'],
  sys_name?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  note?: Maybe<Scalars['String']>,
};

export type API_CrmUserRule = {
   __typename?: 'CrmUserRule',
  id: Scalars['ID'],
  add_organization_id?: Maybe<Scalars['Int']>,
  add_usergroup?: Maybe<API_CrmUserGroup>,
  email_patterns: Array<Maybe<Scalars['String']>>,
  run_order: Scalars['Int'],
};

/** Temporaty type for currently logged in admin user */
export type API_CurrentUser = {
   __typename?: 'CurrentUser',
  locale: Scalars['String'],
};

export type API_CustomField = {
   __typename?: 'CustomField',
  id: Scalars['ID'],
  title: Scalars['String'],
  description: Scalars['String'],
  is_agent_field: Scalars['Boolean'],
  is_enabled: Scalars['Boolean'],
  field_type: Scalars['String'],
  alias?: Maybe<Scalars['String']>,
};

export type API_CustomFieldsOrderBy = {
  field?: Maybe<API_CustomFieldsOrderFields>,
  order?: Maybe<API_SortOrder>,
};

export enum API_CustomFieldsOrderFields {
  Id = 'id',
  Title = 'title',
  /** Default sorting */
  DisplayOrder = 'display_order'
}

export enum API_CustomFieldTypes {
  Article = 'article',
  Billing = 'billing',
  Chat = 'chat',
  CommunityTopic = 'community_topic',
  Download = 'download',
  Organization = 'organization',
  Person = 'person',
  Product = 'product',
  Ticket = 'ticket'
}




export type API_EmailAccount = {
   __typename?: 'EmailAccount',
  id: Scalars['ID'],
  account_type: API_EmailAccountType,
  is_enabled: Scalars['Boolean'],
  address: Scalars['String'],
  other_addresses: Array<Maybe<Scalars['String']>>,
  date_created: Scalars['DateTime'],
  date_last_incoming?: Maybe<Scalars['DateTime']>,
  is_all_brands?: Maybe<Scalars['Boolean']>,
  brands: Array<Maybe<API_Brand>>,
};

export enum API_EmailAccountType {
  Tickets = 'TICKETS',
  Outgoing = 'OUTGOING'
}

export enum API_FilterType {
  Text = 'TEXT',
  ChoiceFromData = 'CHOICE_FROM_DATA',
  Bool = 'BOOL'
}

export type API_Form = {
   __typename?: 'Form',
  js_schema?: Maybe<Scalars['JSON']>,
  ui_schema?: Maybe<Scalars['JSON']>,
};

export type API_GetAgentsFilter = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  name_contains?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  can_admin?: Maybe<Scalars['Boolean']>,
  is_deleted?: Maybe<Scalars['Boolean']>,
  include_deleted?: Maybe<Scalars['Boolean']>,
};

export type API_GetTicketTriggersFilter = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  include_hidden?: Maybe<Scalars['Boolean']>,
  is_hidden?: Maybe<Scalars['Boolean']>,
  event_trigger?: Maybe<API_TicketTriggerEventTrigger>,
  include_department_linked?: Maybe<Scalars['Boolean']>,
  include_email_account_linked?: Maybe<Scalars['Boolean']>,
  for_department_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  for_email_account_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type API_InMemoryPageDataView = {
   __typename?: 'InMemoryPageDataView',
  /** Title of the table. Only used if more than 1 table on the page (tab title) */
  title?: Maybe<Scalars['String']>,
  /** The query to send to get the data to display in the table */
  dataQuery: Scalars['String'],
  /** Definition of the table */
  tableDef?: Maybe<API_PageDataTable>,
  /** Definition of the filters */
  filterDef: Array<Maybe<API_PageDataFilters>>,
};


export type API_LabelDef = {
   __typename?: 'LabelDef',
  id: Scalars['ID'],
  label: Scalars['String'],
  color?: Maybe<Scalars['String']>,
  total: Scalars['Int'],
  label_type?: Maybe<API_LabelDefType>,
};

export enum API_LabelDefType {
  Tickets = 'tickets',
  Task = 'task',
  People = 'people',
  Organizations = 'organizations',
  News = 'news',
  Community = 'community',
  Downloads = 'downloads',
  ChatConversations = 'chat_conversations',
  Articles = 'articles'
}

export type API_Language = {
   __typename?: 'Language',
  id: Scalars['ID'],
  sys_name: Scalars['String'],
  title: Scalars['String'],
  locale: Scalars['String'],
};

export type API_LanguagesOrderBy = {
  field?: Maybe<API_LanguagesOrderFields>,
  order?: Maybe<API_SortOrder>,
};

export enum API_LanguagesOrderFields {
  Id = 'id',
  SysName = 'sys_name',
  Title = 'title',
  Locale = 'locale'
}

export enum API_Operator {
  In = 'IN',
  NotIn = 'NOT_IN',
  Equal = 'EQUAL',
  NotEqual = 'NOT_EQUAL',
  StartsWith = 'STARTS_WITH',
  NotStartsWith = 'NOT_STARTS_WITH',
  EndsWith = 'ENDS_WITH',
  NotEndsWith = 'NOT_ENDS_WITH',
  Contains = 'CONTAINS',
  NotContains = 'NOT_CONTAINS',
  YesNo = 'YES_NO'
}

export type API_OrderByClause = {
  field: Scalars['String'],
  order: API_SortOrder,
};

export type API_PageDataFilters = {
   __typename?: 'PageDataFilters',
  /** i18n Title of the filter.  */
  title: Scalars['String'],
  /** The path to the value the data from the main data result */
  path: Scalars['String'],
  /** Type of filter */
  type: API_FilterType,
  /** Collection of operator types */
  operators: Array<API_Operator>,
  /** Root of the data path, i.e. for agent_teams.*.name, value would be agent_teams */
  dataPath: Scalars['String'],
};

export type API_PageDataTable = {
   __typename?: 'PageDataTable',
  columns: Array<API_TableColumnDef>,
};

export type API_PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>,
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>,
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>,
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>,
};

export type API_PageLink = {
   __typename?: 'PageLink',
  title: Scalars['String'],
  path: Scalars['String'],
  icon?: Maybe<Scalars['String']>,
};

export type API_PaginatorInfo = {
   __typename?: 'PaginatorInfo',
  /** Total count of available items in the page. */
  count: Scalars['Int'],
  /** Current pagination page. */
  currentPage: Scalars['Int'],
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>,
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'],
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>,
  /** Last page number of the collection. */
  lastPage: Scalars['Int'],
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'],
  /** Total items available in the collection. */
  total: Scalars['Int'],
};

export type API_PlaceholderPageData = {
   __typename?: 'PlaceholderPageData',
  /** ID of title message */
  title: Scalars['String'],
  /** ID if description message */
  description: Scalars['String'],
};

export type API_Query = {
   __typename?: 'Query',
  agents_getAgents: Array<Maybe<API_Agent>>,
  agents_teams_getTeams: Array<Maybe<API_AgentTeam>>,
  agents_groups_getGroups: Array<Maybe<API_AgentGroup>>,
  roundRobins: Array<Maybe<API_RoundRobin>>,
  approvalsTypesList: Array<Maybe<API_ApprovalType>>,
  approvalsTemplatesList: Array<Maybe<API_ApprovalTemplate>>,
  apiKeys: Array<Maybe<API_ApiKey>>,
  appInstancesList: Array<Maybe<API_AppInstance>>,
  authMe: API_CurrentUser,
  authUserSourcesList: Array<Maybe<API_UserSource>>,
  brands_getBrands: Array<Maybe<API_Brand>>,
  crmUserGroups: Array<Maybe<API_CrmUserGroup>>,
  crmUserRules: Array<Maybe<API_CrmUserRule>>,
  crmBannedEmails: Array<Maybe<API_CrmBannedEmail>>,
  crmBannedIps: Array<Maybe<API_CrmBannedIp>>,
  chatDepartments: Array<Maybe<API_ChatDepartment>>,
  chatQueues: Array<Maybe<API_ChatQueue>>,
  communityForumsList: Array<Maybe<API_CommunityForum>>,
  communityTopicStatusesList: Array<Maybe<API_CommunityTopicStatus>>,
  customFieldsList: Array<Maybe<API_CustomField>>,
  email_accounts_getAccounts: Array<Maybe<API_EmailAccount>>,
  languagesLanguagesList: Array<Maybe<API_Language>>,
  settings_email_getForm: API_Form,
  setupUi_interface_sidebar: Array<API_SidebarSection>,
  standardDataPage: API_StandardDataPage,
  standardSettingsPage: API_StandardSettingsPage,
  setupUi_translations_all: Array<API_Translation>,
  labelDefs: Array<Maybe<API_LabelDef>>,
  ticketEscalations: Array<Maybe<API_TicketEscalation>>,
  ticketMacros: Array<Maybe<API_TicketMacro>>,
  ticketSlas: Array<Maybe<API_TicketSla>>,
  tickets_departments_getDepartments: Array<Maybe<API_TicketDepartment>>,
  ticketStatuses: Array<Maybe<API_TicketStatus>>,
  ticketTriggers: Array<Maybe<API_TicketTrigger>>,
};


export type API_QueryAgents_GetAgentsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  filter?: Maybe<API_GetAgentsFilter>,
  orderBy?: Maybe<API_AgentOrderFields>,
  sortOrder?: Maybe<API_SortOrder>
};


export type API_QueryAgents_Teams_GetTeamsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryAgents_Groups_GetGroupsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryRoundRobinsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryApprovalsTypesListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>
};


export type API_QueryApprovalsTemplatesListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  types?: Maybe<Array<Scalars['ID']>>
};


export type API_QueryApiKeysArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryAuthUserSourcesListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  type: API_UserSourceType,
  orderBy?: Maybe<API_UserSourcesOrderBy>
};


export type API_QueryBrands_GetBrandsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryCrmUserGroupsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryCrmUserRulesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryChatDepartmentsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryChatQueuesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryCommunityForumsListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  filter?: Maybe<API_CommunityForumsFilter>,
  orderBy?: Maybe<API_CommunityForumsOrderBy>
};


export type API_QueryCommunityTopicStatusesListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  filter?: Maybe<API_CommunityTopicStatusFilter>,
  orderBy?: Maybe<API_CommunityTopicStatusesOrderBy>
};


export type API_QueryCustomFieldsListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  type: API_CustomFieldTypes,
  orderBy?: Maybe<API_CustomFieldsOrderBy>
};


export type API_QueryEmail_Accounts_GetAccountsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryLanguagesLanguagesListArgs = {
  ids?: Maybe<Array<Scalars['ID']>>,
  orderBy?: Maybe<API_LanguagesOrderBy>
};


export type API_QueryStandardDataPageArgs = {
  path: Scalars['String']
};


export type API_QueryStandardSettingsPageArgs = {
  path: Scalars['String']
};


export type API_QuerySetupUi_Translations_AllArgs = {
  locale: Scalars['String']
};


export type API_QueryLabelDefsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  labelType?: Maybe<API_LabelDefType>
};


export type API_QueryTicketEscalationsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  event_trigger?: Maybe<API_TicketEscalationEventTrigger>
};


export type API_QueryTicketMacrosArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  agent_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  department_ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  is_global?: Maybe<Scalars['Boolean']>
};


export type API_QueryTicketSlasArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  sla_type?: Maybe<API_TicketSlaType>
};


export type API_QueryTickets_Departments_GetDepartmentsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryTicketStatusesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type API_QueryTicketTriggersArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  filter?: Maybe<API_GetTicketTriggersFilter>
};

export type API_RoundRobin = {
   __typename?: 'RoundRobin',
  id: Scalars['ID'],
  title: Scalars['String'],
  online_only: Scalars['Boolean'],
  last_agent?: Maybe<API_Agent>,
  members: Array<Maybe<API_RoundRobinAgent>>,
};

export type API_RoundRobinAgent = {
   __typename?: 'RoundRobinAgent',
  agent?: Maybe<API_Agent>,
  sort: Scalars['Int'],
};

/** Arbitrary display element. E.g. if you need to inject some arbitrary text into the form */
export type API_SettingsUiDisplayElement = {
   __typename?: 'SettingsUIDisplayElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

/** An element is any render-able thing on a settings form. */
export type API_SettingsUiElement = API_SettingsUiSectionElement | API_SettingsUiFeatureSectionElement | API_SettingsUiGroupElement | API_SettingsUiSubGroupElement | API_SettingsUiHorizontalGroupElement | API_SettingsUiTabElement | API_SettingsUiFieldElement | API_SettingsUiDisplayElement;

/** A full feature section has a big banner at the top with a toggle button, description, and illustration. */
export type API_SettingsUiFeatureSectionElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIFeatureSectionElement',
  /** Main title of the feature */
  title?: Maybe<Scalars['String']>,
  /** Description text of the feature */
  description?: Maybe<Scalars['String']>,
  /** An illustration ID */
  illustration?: Maybe<Scalars['String']>,
  /** If the feature can be toggled off, then the ID of the setting */
  toggleFieldId?: Maybe<Scalars['String']>,
  /** And all elements under it (typically one or more SettingsUISectionElement) */
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

/** A field is any form field we have defined */
export type API_SettingsUiField = API_SettingsUiFieldText | API_SettingsUiFieldToggle | API_SettingsUiFieldCheckbox | API_SettingsUiFieldFilesize;

/** A boolean field that renders as a simple checkbox */
export type API_SettingsUiFieldCheckbox = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldCheckbox',
  id: Scalars['String'],
};

/** A field element represents an actual form input control */
export type API_SettingsUiFieldElement = {
   __typename?: 'SettingsUIFieldElement',
  /** The title/label for the field. Often rendered within a label tag. */
  title: Scalars['String'],
  /** A description to provide additional help or info about the setting. */
  description?: Maybe<Scalars['String']>,
  /** A link to an external resource that shows to the right of the field */
  helpLink?: Maybe<API_SettingsUiHelpLink>,
  /** Help text to show with the field, typically displayed as a tooltip on a (?) icon */
  helpText?: Maybe<Scalars['String']>,
  /** The field itself */
  field?: Maybe<API_SettingsUiField>,
};

/** 
 * A field that represents a filesize in bytes, but renders to the user
 * as a numeric input box and then a select box where they can select a unit. E.g. 10 MB
 */
export type API_SettingsUiFieldFilesize = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldFilesize',
  id: Scalars['String'],
};

/** Basic properties for every form field */
export type API_SettingsUiFieldInterface = {
  /** The ID/name for the form field, the name by which its data gets stored under */
  id: Scalars['String'],
};

/** An input field that accepts numbers */
export type API_SettingsUiFieldNumeric = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldNumeric',
  id: Scalars['String'],
};

/** An option for fields that work on options */
export type API_SettingsUiFieldOption = {
   __typename?: 'SettingsUIFieldOption',
  label: Scalars['String'],
  iconUrn?: Maybe<Scalars['String']>,
  value: Scalars['String'],
};

/** 
 * A single radio button. You might use a lone radio instead of a radio group
 * if you needed to separate the elements for some reason. E.g
 *  [Radio 1]
 *     [Group that only shows with Radio 1]
 *  [Radio 2]
 *     [Group that only shows with Radio 2[
 * To achieve this kind of design, you'd need an 'elements' array with
 * that specific order: radio, group, radio, group.
 */
export type API_SettingsUiFieldRadio = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldRadio',
  id: Scalars['String'],
  value: Scalars['String'],
};

/** A group of radio buttons. Not commonly used; probably want to use a select box. */
export type API_SettingsUiFieldRadioGroup = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldRadioGroup',
  id: Scalars['String'],
  options: Array<Maybe<API_SettingsUiFieldOption>>,
};

/** 
 * Special escape-hatch. If you need a custom UI element in a form, you can create a standard Formik
 * component and then represent it in the schema as SettingsUIFieldReact.
 */
export type API_SettingsUiFieldReact = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldReact',
  id: Scalars['String'],
  /** 
 * The react component to render. This must exist on the FE and be added to the custom field renderer.
   * This can be any string so long as the custom field renderer knows how to handle it. But by convention,
   * it should be the actual name of the react component.
 */
  reactComponent: Scalars['String'],
  /** Additional props to send to the component */
  reactProps?: Maybe<Array<Maybe<API_SettingsUiFieldReactProp>>>,
};

export type API_SettingsUiFieldReactProp = {
   __typename?: 'SettingsUIFieldReactProp',
  name: Scalars['String'],
  value: Scalars['String'],
};

/** Select box */
export type API_SettingsUiFieldSelect = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldSelect',
  id: Scalars['String'],
  options: Array<Maybe<API_SettingsUiFieldOption>>,
};

/** A text input field */
export type API_SettingsUiFieldText = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldText',
  id: Scalars['String'],
};

/** A boolean field that renders as a toggle pill button */
export type API_SettingsUiFieldToggle = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldToggle',
  id: Scalars['String'],
};

/** A basic grouping implementation */
export type API_SettingsUiGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

/** An arbitrary group of other elements */
export type API_SettingsUiGroupInterface = {
  /** An optional title for the group. May be omitted if the grouping is just for logical grouping. */
  title?: Maybe<Scalars['String']>,
  /** An optional description */
  description?: Maybe<Scalars['String']>,
  /** The actual elements of the group */
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  /** If the group should show/hide based on the value of some other setting, that setting ID */
  showOn?: Maybe<Scalars['String']>,
};

/** 
 * A help link can be displayed to the right of a field to provide
 * further information. Typically a link to a guide on our helpdes
 */
export type API_SettingsUiHelpLink = {
   __typename?: 'SettingsUIHelpLink',
  /** Title that shows to the user */
  title: Scalars['String'],
  /** The URL that the user navigates to upon click */
  url: Scalars['String'],
};

/** A group where fields within are rendered horizontally: Label to the left, input to the right */
export type API_SettingsUiHorizontalGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIHorizontalGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

/** Top-level type for the form itself. */
export type API_SettingsUiSchema = {
   __typename?: 'SettingsUISchema',
  elements: Array<API_SettingsUiElement>,
};

/** A standard section with a title on the left and elements rendered in rows to the right. */
export type API_SettingsUiSectionElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUISectionElement',
  /** Title of the section on the left */
  title?: Maybe<Scalars['String']>,
  /** Fields in the section */
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

/** Represents any element that has sub-elements */
export type API_SettingsUiSectionParentElement = {
  /** Fields in the section */
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

/** 
 * A sub-group that should appear indented in the browser. This is to show structure
 * or hierarchy to the user.
 */
export type API_SettingsUiSubGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUISubGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

/** A tabbed group (e.g. Brands) where groups of settings are split into different tabs. */
export type API_SettingsUiTabElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUITabElement',
  title?: Maybe<Scalars['String']>,
  /** The tabs to show. Should be the same number of tabs as there are elements */
  tabs?: Maybe<Array<Maybe<API_SettingsUiTabItem>>>,
  /** The elements to show within the tab */
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

/** An actual tab in a tab element */
export type API_SettingsUiTabItem = {
   __typename?: 'SettingsUITabItem',
  /** Title of the tab */
  title?: Maybe<Scalars['String']>,
  /** An optional icon for the tab (e.g. brand logo or other icon) */
  iconUrn?: Maybe<Scalars['String']>,
};

export type API_SidebarItem = {
   __typename?: 'SidebarItem',
  itemName: Scalars['String'],
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  navItems?: Maybe<Array<Maybe<API_SidebarItem>>>,
  pageType?: Maybe<Scalars['String']>,
  metadataQuery?: Maybe<Scalars['String']>,
};

export type API_SidebarSection = {
   __typename?: 'SidebarSection',
  sectionName: Scalars['String'],
  icon?: Maybe<Scalars['String']>,
  navItems: Array<API_SidebarItem>,
};

export enum API_SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type API_StandardDataPage = {
   __typename?: 'StandardDataPage',
  /** ID of title message */
  title: Scalars['String'],
  /** ID if description message */
  description: Scalars['String'],
  /** ID of illustration */
  illustration: Scalars['String'],
  /** Other links to put under the description */
  headerLinks?: Maybe<Array<Maybe<API_PageLink>>>,
  /** Where to go when clicking the New button (or null to not have a new button) */
  newLink?: Maybe<Scalars['String']>,
  /** Collection of data views. If more than 1 table, then views are tabbed */
  views: Array<API_InMemoryPageDataView>,
};

/** 
 * A settings page is made up of a UI schema describing how the form should be displayed to the user,
 * and a jsonSchema defining basic validation rules for every setting on the page.
 */
export type API_StandardSettingsPage = {
   __typename?: 'StandardSettingsPage',
  /** ID of the title / settings section */
  title: Scalars['String'],
  /** Schema of the settings on the page */
  uiSchema: API_SettingsUiSchema,
  /** Validation schema of the settings on the page (https://json-schema.org/) */
  jsonSchema: Scalars['JSON'],
};

export type API_TableColumnAgentGroupList = API_TableColumnArrayValueField & {
   __typename?: 'TableColumnAgentGroupList',
  valuesArray: API_TablePayloadValue,
};

export type API_TableColumnAgentList = API_TableColumnArrayValueField & {
   __typename?: 'TableColumnAgentList',
  valuesArray: API_TablePayloadValue,
};

export type API_TableColumnAgentTeamList = API_TableColumnArrayValueField & {
   __typename?: 'TableColumnAgentTeamList',
  valuesArray: API_TablePayloadValue,
};

export type API_TableColumnArrayValueField = {
  valuesArray: API_TablePayloadValue,
};

export type API_TableColumnBoolOnOff = API_TableColumnValueField & {
   __typename?: 'TableColumnBoolOnOff',
  value: API_TablePayloadValue,
};

export type API_TableColumnBoolYesNo = API_TableColumnValueField & {
   __typename?: 'TableColumnBoolYesNo',
  value: API_TablePayloadValue,
};

export type API_TableColumnDef = {
   __typename?: 'TableColumnDef',
  /** ID of the title message to use for the column */
  title: Scalars['String'],
  /** The name of the field renderer */
  field?: Maybe<API_TableColumnField>,
  /** If the column represents a sortable field (in case of async), then that field */
  sortField?: Maybe<Scalars['String']>,
  /** True to show the column by default */
  defaultShow?: Maybe<Scalars['Boolean']>,
};

export type API_TableColumnField = API_TableColumnId | API_TableColumnBoolYesNo | API_TableColumnBoolOnOff | API_TableColumnText | API_TableColumnTextCommaSep | API_TableColumnTextPhrase | API_TableColumnTextPhraseCommaSep | API_TableColumnNameAvatar | API_TableColumnInteger | API_TableColumnMoney | API_TableColumnTimeAgo | API_TableColumnAgentTeamList | API_TableColumnAgentGroupList | API_TableColumnAgentList;

export type API_TableColumnId = API_TableColumnValueField & {
   __typename?: 'TableColumnId',
  value: API_TablePayloadValue,
};

export type API_TableColumnInteger = API_TableColumnValueField & {
   __typename?: 'TableColumnInteger',
  value: API_TablePayloadValue,
};

export type API_TableColumnMoney = {
   __typename?: 'TableColumnMoney',
  amount: API_TablePayloadValue,
  currency: API_TablePayloadValue,
};

export type API_TableColumnNameAvatar = {
   __typename?: 'TableColumnNameAvatar',
  name: API_TablePayloadValue,
  avatar: API_TablePayloadValue,
};

export type API_TableColumnPhraseMap = {
  phraseMap: Array<API_TableColumnPhraseMapItem>,
  defaultPhraseId?: Maybe<Scalars['String']>,
};

export type API_TableColumnPhraseMapItem = {
   __typename?: 'TableColumnPhraseMapItem',
  value: Scalars['String'],
  phraseId: Scalars['String'],
};

export type API_TableColumnText = API_TableColumnValueField & {
   __typename?: 'TableColumnText',
  value: API_TablePayloadValue,
};

export type API_TableColumnTextCommaSep = API_TableColumnArrayValueField & {
   __typename?: 'TableColumnTextCommaSep',
  valuesArray: API_TablePayloadValue,
};

export type API_TableColumnTextPhrase = API_TableColumnValueField & API_TableColumnPhraseMap & {
   __typename?: 'TableColumnTextPhrase',
  value: API_TablePayloadValue,
  phraseMap: Array<API_TableColumnPhraseMapItem>,
  defaultPhraseId?: Maybe<Scalars['String']>,
};

export type API_TableColumnTextPhraseCommaSep = API_TableColumnArrayValueField & API_TableColumnPhraseMap & {
   __typename?: 'TableColumnTextPhraseCommaSep',
  valuesArray: API_TablePayloadValue,
  phraseMap: Array<API_TableColumnPhraseMapItem>,
  defaultPhraseId?: Maybe<Scalars['String']>,
};

export type API_TableColumnTimeAgo = API_TableColumnValueField & {
   __typename?: 'TableColumnTimeAgo',
  value: API_TablePayloadValue,
};

export type API_TableColumnValueField = {
  value: API_TablePayloadValue,
};

export type API_TablePayloadValue = {
   __typename?: 'TablePayloadValue',
  dataPath?: Maybe<Scalars['String']>,
  staticValue?: Maybe<Scalars['String']>,
  staticJson?: Maybe<Scalars['String']>,
};

export type API_TicketDepartment = {
   __typename?: 'TicketDepartment',
  id: Scalars['ID'],
  parent?: Maybe<API_TicketDepartment>,
  children: Array<Maybe<API_TicketDepartment>>,
  depth: Scalars['Int'],
  avatarUrn?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  display_order: Scalars['Int'],
  effective_display_order: Scalars['Int'],
};

export type API_TicketEscalation = {
   __typename?: 'TicketEscalation',
  id: Scalars['ID'],
  title: Scalars['String'],
  event_trigger: API_TicketEscalationEventTrigger,
  event_trigger_time: Scalars['Int'],
  is_enabled: Scalars['Boolean'],
};

export enum API_TicketEscalationEventTrigger {
  TimeOpen = 'time_open',
  TimeUserWaiting = 'time_user_waiting',
  TimeTotalUserWaiting = 'time_total_user_waiting',
  TimeAgentWaiting = 'time_agent_waiting',
  TimeResolved = 'time_resolved',
  TimeOnHold = 'time_on_hold'
}

export type API_TicketMacro = {
   __typename?: 'TicketMacro',
  id: Scalars['ID'],
  agent?: Maybe<API_Agent>,
  department?: Maybe<API_TicketDepartment>,
  title: Scalars['String'],
  is_global: Scalars['Boolean'],
};

export type API_TicketSla = {
   __typename?: 'TicketSla',
  id: Scalars['ID'],
  title: Scalars['String'],
  sla_type: API_TicketSlaType,
  apply_type: API_TicketSlaApplyType,
  warn_seconds: Scalars['Int'],
  fail_seconds: Scalars['Int'],
};

export enum API_TicketSlaApplyType {
  All = 'all',
  Manual = 'manual'
}

export enum API_TicketSlaType {
  FirstResponse = 'first_response',
  Resolution = 'resolution',
  WaitingTime = 'waiting_time'
}

export type API_TicketStatus = {
   __typename?: 'TicketStatus',
  id: Scalars['ID'],
  sys_id?: Maybe<Scalars['ID']>,
  status_type: API_TicketStatusType,
  parent?: Maybe<API_TicketStatus>,
  children: Array<Maybe<API_TicketStatus>>,
  depth: Scalars['Int'],
  title: Scalars['String'],
  display_order: Scalars['Int'],
  effective_display_order: Scalars['Int'],
};

export enum API_TicketStatusType {
  AwaitingAgent = 'awaiting_agent',
  AwaitingUser = 'awaiting_user',
  Pending = 'pending',
  Resolved = 'resolved',
  Archived = 'archived',
  Hidden = 'hidden'
}

export type API_TicketTrigger = {
   __typename?: 'TicketTrigger',
  id: Scalars['ID'],
  department?: Maybe<API_TicketDepartment>,
  email_account?: Maybe<API_EmailAccount>,
  title: Scalars['String'],
  event_trigger: API_TicketTriggerEventTrigger,
  event_flags: Array<Maybe<API_TicketTriggerEventFlag>>,
  by_agent_mode: Array<Maybe<API_TicketTriggerEventMode>>,
  by_user_mode: Array<Maybe<API_TicketTriggerEventMode>>,
  by_app_mode: Array<Maybe<API_TicketTriggerEventMode>>,
  is_enabled: Scalars['Boolean'],
  is_hidden: Scalars['Boolean'],
  is_editable: Scalars['Boolean'],
  sys_name?: Maybe<Scalars['String']>,
  run_order: Scalars['Int'],
};

export enum API_TicketTriggerEventFlag {
  RunNewreply = 'run_newreply'
}

export enum API_TicketTriggerEventMode {
  Web = 'web',
  Portal = 'portal',
  Widget = 'widget',
  Form = 'form',
  Email = 'email',
  Api = 'api',
  Mobile = 'mobile'
}

export enum API_TicketTriggerEventTrigger {
  Newticket = 'newticket',
  Newreply = 'newreply',
  Update = 'update',
  Webhook = 'webhook'
}

/** Translation type */
export type API_Translation = {
   __typename?: 'Translation',
  /** Tranlation ID */
  id: Scalars['ID'],
  /** Translation text */
  message: Scalars['String'],
};

export enum API_Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

/** UserSource */
export type API_UserSource = {
   __typename?: 'UserSource',
  id: Scalars['ID'],
  title: Scalars['String'],
  is_enabled: Scalars['Boolean'],
  publisher?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type API_UserSourcesOrderBy = {
  field?: Maybe<API_UserSourcesOrderFields>,
  order?: Maybe<API_SortOrder>,
};

export enum API_UserSourcesOrderFields {
  Id = 'id',
  Title = 'title',
  /** Default sorting */
  DisplayOrder = 'display_order'
}

export enum API_UserSourceType {
  User = 'user',
  Agent = 'agent'
}
