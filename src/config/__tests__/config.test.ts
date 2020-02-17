import generateConfig from '../config';

describe('generateConfig', () => {
  test('if detects window.DP_GRAPHQL_ENDPOINT, return value', () => {
    (global as any).window.DP_GRAPHQL_ENDPOINT = 'DP_GRAPHQL_ENDPOINT';
    (global as any).process.env = {};

    const result = generateConfig();
    expect(result).toEqual({'apiUrl': 'DP_GRAPHQL_ENDPOINT'});
  });

  test('if detects process.env.REACT_APP_API_URL, return value', () => {
    (global as any).window.DP_GRAPHQL_ENDPOINT = undefined;
    (global as any).process.env = {
      REACT_APP_API_URL: 'REACT_APP_API_URL'
    };

    const result = generateConfig();
    expect(result).toEqual({'apiUrl': 'REACT_APP_API_URL'});
  });

  test('if window and process undefined, return undefined', () => {
    (global as any).window.DP_GRAPHQL_ENDPOINT = undefined;
    (global as any).process.env = {};
    const result = generateConfig();
    expect(result).toEqual({apiUrl: undefined});
  });
});