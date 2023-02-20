import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

export const GetAccountsByBankId =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) =>
  async (id: string): Promise<API.Account> => {
    const path = `/banks/${id}/accounts`;
    return await methodCall(config, path);
  };

export const account: APIRequest<API.Account> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) => {
    return apiCallWithCustomURIPath<API.Account>(config, methodCall);
  },
};
