import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

export const Current = async (
  config: APIClientConfig,
  methodCall: (config: APIClientConfig, path: string) => Promise<API.User>
) => {
  return await methodCall(config, "/users/current");
};

export const user: APIRequest<API.User> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.User>
  ) => {
    return apiCallWithCustomURIPath<API.User>(config, methodCall);
  },
};
