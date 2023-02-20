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
  User,
}

export type APIClientConfig = {
  baseUri: string;
  version: Version;
  directLogin?: string;
  token?: string;
};

export type MethodCall<T> = (
  config: APIClientConfig,
  path: string,
  body?: any
) => Promise<T>;

export type APIRequest<T> = {
  get?: (config: APIClientConfig, methodCall: MethodCall<T>) => any;
  create?: (config: APIClientConfig, methodCall: MethodCall<T>) => any;
};

export type RequestParameter<T> = (
  config: APIClientConfig,
  methodCall: MethodCall<T>
) => T;

const uri = (config: APIClientConfig, path: string): string => {
  const base = config.baseUri;
  const version = config.version;
  if (path.startsWith("/")) {
    return `${base}/obp/${version}${path}`;
  } else {
    return `${base}/obp/${version}/${path}`;
  }
};

export const apiCallWithCustomURIPath =
  <T>(config: APIClientConfig, methodCall: MethodCall<T>) =>
  (path: string | RequestParameter<T>) => {
    if (typeof path === "string") {
      return methodCall(config, path.toString());
    } else {
      return path(config, methodCall);
    }
  };

export const apiCallWithCustomBody =
  <T, E>(config: APIClientConfig, path: string, methodCall: MethodCall<T>) =>
  (body: E) => {
    return methodCall(config, path, body);
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

export const postRequest = async (
  config: APIClientConfig,
  path: string,
  body: any
): Promise<any> => {
  const pathUri = uri(config, path);
  if (!config.token) {
    config.token = await getDirectLoginToken(config);
  }
  return JSON.parse(
    (
      await superagent
        .post(pathUri)
        .set("Authorization", config.token)
        .send(body)
    ).text
  );
};

export const get = <T>(
  config: APIClientConfig,
  request: APIRequest<T>
): any => {
  return request.get(config, getRequest);
};

export const create = <T>(
  config: APIClientConfig,
  request: APIRequest<T>
): any => {
  return request.create(config, postRequest);
};
