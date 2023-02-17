import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

export const GetAccountsByBankId =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (id: string): Promise<API.Account> => {
    const path = `/banks/${id}/accounts`;
    return await methodCall(config, path);
  };

export const accounts: APIRequest<API.Account> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Account>(config, methodCall);
  },
};
