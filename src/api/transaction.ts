import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

export const GetTransactionsByBankId =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) =>
  async (
    bankId: string,
    accountId: string,
    viewId: string
  ): Promise<API.Account> => {
    const path = `/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`;
    return await methodCall(config, path);
  };

export const transactions: APIRequest<API.Transaction> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Transaction>(config, methodCall);
  },
};
