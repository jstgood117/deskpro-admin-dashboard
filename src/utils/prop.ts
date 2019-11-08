type KeyValue = {
  [key: string]: any;
};

export const prop = (obj: KeyValue, key: string) => {
  return obj[key];
};
