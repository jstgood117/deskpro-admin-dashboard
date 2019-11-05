export type ConfigType = {
  apiUrl: string | undefined;
};

const generateConfig = (): ConfigType => ({
  apiUrl:process.env.REACT_APP_API_URL || undefined
});

export default generateConfig;