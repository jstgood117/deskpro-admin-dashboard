export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  JSON: any,
  Date: any,
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
  title?: Maybe<Scalars['String']>,
  filterType?: Maybe<Scalars['String']>,
  orderByType?: Maybe<Scalars['String']>,
  groupByType?: Maybe<Scalars['String']>,
  dataQuery: Scalars['String'],
  tableDef?: Maybe<API_PageDataTable>,
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
  DisplayOrder = 'display_order'
}

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

export type API_CommunityTopicStatusFilter = {
  brand: Scalars['Int'],
};

export enum API_CommunityTopicStatusOrderFields {
  Id = 'id',
  Title = 'title',
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
  title?: Maybe<Scalars['String']>,
  dataQuery: Scalars['String'],
  tableDef?: Maybe<API_PageDataTable>,
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
  title: Scalars['String'],
  path: Scalars['String'],
  type: API_FilterType,
  operators: Array<API_Operator>,
  dataPath: Scalars['String'],
};

export type API_PageDataTable = {
   __typename?: 'PageDataTable',
  columns: Array<API_TableColumnDef>,
};

export type API_PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
  total?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  currentPage?: Maybe<Scalars['Int']>,
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
  count: Scalars['Int'],
  currentPage: Scalars['Int'],
  firstItem?: Maybe<Scalars['Int']>,
  hasMorePages: Scalars['Boolean'],
  lastItem?: Maybe<Scalars['Int']>,
  lastPage: Scalars['Int'],
  perPage: Scalars['Int'],
  total: Scalars['Int'],
};

export type API_PlaceholderPageData = {
   __typename?: 'PlaceholderPageData',
  title: Scalars['String'],
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

export type API_SettingsUiDisplayElement = {
   __typename?: 'SettingsUIDisplayElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type API_SettingsUiElement = API_SettingsUiSectionElement | API_SettingsUiFeatureSectionElement | API_SettingsUiGroupElement | API_SettingsUiSubGroupElement | API_SettingsUiHorizontalGroupElement | API_SettingsUiTabElement | API_SettingsUiFieldElement | API_SettingsUiDisplayElement;

export type API_SettingsUiFeatureSectionElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIFeatureSectionElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  illustration?: Maybe<Scalars['String']>,
  toggleFieldId?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

export type API_SettingsUiField = API_SettingsUiFieldText | API_SettingsUiFieldToggle | API_SettingsUiFieldCheckbox | API_SettingsUiFieldFilesize;

export type API_SettingsUiFieldCheckbox = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldCheckbox',
  id: Scalars['String'],
};

export type API_SettingsUiFieldElement = {
   __typename?: 'SettingsUIFieldElement',
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  helpLink?: Maybe<API_SettingsUiHelpLink>,
  helpText?: Maybe<Scalars['String']>,
  field?: Maybe<API_SettingsUiField>,
};

export type API_SettingsUiFieldFilesize = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldFilesize',
  id: Scalars['String'],
};

export type API_SettingsUiFieldInterface = {
  id: Scalars['String'],
};

export type API_SettingsUiFieldNumeric = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldNumeric',
  id: Scalars['String'],
};

export type API_SettingsUiFieldOption = {
   __typename?: 'SettingsUIFieldOption',
  label: Scalars['String'],
  iconUrn?: Maybe<Scalars['String']>,
  value: Scalars['String'],
};

export type API_SettingsUiFieldRadio = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldRadio',
  id: Scalars['String'],
  value: Scalars['String'],
};

export type API_SettingsUiFieldRadioGroup = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldRadioGroup',
  id: Scalars['String'],
  options: Array<Maybe<API_SettingsUiFieldOption>>,
};

export type API_SettingsUiFieldReact = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldReact',
  id: Scalars['String'],
  reactComponent: Scalars['String'],
  reactProps?: Maybe<Array<Maybe<API_SettingsUiFieldReactProp>>>,
};

export type API_SettingsUiFieldReactProp = {
   __typename?: 'SettingsUIFieldReactProp',
  name: Scalars['String'],
  value: Scalars['String'],
};

export type API_SettingsUiFieldSelect = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldSelect',
  id: Scalars['String'],
  options: Array<Maybe<API_SettingsUiFieldOption>>,
};

export type API_SettingsUiFieldText = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldText',
  id: Scalars['String'],
};

export type API_SettingsUiFieldToggle = API_SettingsUiFieldInterface & {
   __typename?: 'SettingsUIFieldToggle',
  id: Scalars['String'],
};

export type API_SettingsUiGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

export type API_SettingsUiGroupInterface = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

export type API_SettingsUiHelpLink = {
   __typename?: 'SettingsUIHelpLink',
  title: Scalars['String'],
  url: Scalars['String'],
};

export type API_SettingsUiHorizontalGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUIHorizontalGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

export type API_SettingsUiSchema = {
   __typename?: 'SettingsUISchema',
  elements: Array<API_SettingsUiElement>,
};

export type API_SettingsUiSectionElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUISectionElement',
  title?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

export type API_SettingsUiSectionParentElement = {
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

export type API_SettingsUiSubGroupElement = API_SettingsUiGroupInterface & API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUISubGroupElement',
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
  showOn?: Maybe<Scalars['String']>,
};

export type API_SettingsUiTabElement = API_SettingsUiSectionParentElement & {
   __typename?: 'SettingsUITabElement',
  title?: Maybe<Scalars['String']>,
  tabs?: Maybe<Array<Maybe<API_SettingsUiTabItem>>>,
  elements?: Maybe<Array<Maybe<API_SettingsUiElement>>>,
};

export type API_SettingsUiTabItem = {
   __typename?: 'SettingsUITabItem',
  title?: Maybe<Scalars['String']>,
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
  title: Scalars['String'],
  description: Scalars['String'],
  illustration: Scalars['String'],
  headerLinks?: Maybe<Array<Maybe<API_PageLink>>>,
  newLink?: Maybe<Scalars['String']>,
  views: Array<API_InMemoryPageDataView>,
};

export type API_StandardSettingsPage = {
   __typename?: 'StandardSettingsPage',
  title: Scalars['String'],
  uiSchema: API_SettingsUiSchema,
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
  title: Scalars['String'],
  field?: Maybe<API_TableColumnField>,
  sortField?: Maybe<Scalars['String']>,
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

export type API_Translation = {
   __typename?: 'Translation',
  id: Scalars['ID'],
  message: Scalars['String'],
};

export enum API_Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

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
  DisplayOrder = 'display_order'
}

export enum API_UserSourceType {
  User = 'user',
  Agent = 'agent'
}
