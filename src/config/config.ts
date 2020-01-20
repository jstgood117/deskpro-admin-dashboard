export type ConfigType = {
  apiUrl: string | undefined;
};

const generateConfig = (): ConfigType => ({
  apiUrl: (window as any).DP_GRAPHQL_ENDPOINT || process.env.REACT_APP_API_URL || undefined
});

export default generateConfig;
