import superagent from "superagent";

export enum Version {
  v500 = "v5.0.0",
  v510 = "v5.1.0",
  v400 = "v4.0.0",
}

export enum API {
  Bank,
  Account,
  Payment,
  Transaction,
}

export type APIClientConfig = {
  baseUri: string;
  version: Version;
  directLogin?: string;
  token?: string;
};

export type APIRequest<T> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<T>
  ) => any;
};

const uri = (config: APIClientConfig, path: string): string => {
  const base = config.baseUri;
  const version = config.version;
  if (path.startsWith("/")){
    return `${base}/obp/${version}${path}`;
  }else{
    return `${base}/obp/${version}/${path}`;
  }
};

export const apiCallWithCustomURIPath =
  <T>(
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<T>
  ) =>
  (
    path:
      | string
      | ((
          config: APIClientConfig,
          methodCall: (config: APIClientConfig, path: string) => Promise<T>
        ) => T
  ) => {
    if (typeof path === "string") {
      return methodCall(config, path.toString());
    } else {
      return path(config, methodCall);
    }
  };

const getDirectLoginToken = async (
  config: APIClientConfig
): Promise<string> => {
  if (!config.directLogin) {
    console.warn("DirectLogin is not set.");
    return "";
  }
  const loginUri = config.baseUri + "/my/logins/direct";
  const directLogin = "DirectLogin " + config.directLogin;
  const response = JSON.parse(
    (
      await superagent
        .post(loginUri)
        .set("Content-Type", "application/json")
        .set("Authorization", directLogin)
    ).text
  );
  return "DirectLogin token=" + response.token;
};

export const getRequest = async (
  config: APIClientConfig,
  path: string
): Promise<any> => {
  const pathUri = uri(config, path);
  if (!config.token) {
    config.token = await getDirectLoginToken(config);
  }
  return JSON.parse(
    (await superagent.get(pathUri).set("Authorization", config.token)).text
  );
};

export const get = <T>(
  config: APIClientConfig,
  request: APIRequest<T>
): any => {
  return request.get(config, getRequest);
};
