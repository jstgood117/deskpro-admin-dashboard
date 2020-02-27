export type ConfigType = {
  apiUrl: string | undefined;
};

type WindowType = {
  DP_GRAPHQL_ENDPOINT?: string;
};

const generateConfig = (): ConfigType => ({
  apiUrl: (window as WindowType).DP_GRAPHQL_ENDPOINT || process.env.REACT_APP_API_URL || undefined
} as ConfigType);

export default generateConfig;
