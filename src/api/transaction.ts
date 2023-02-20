import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
  apiCallWithCustomBody,
} from "./client";

export type TransactionRequestAccountBody = {
  description: string;
  to: {
    bank_id: string;
    account_id: string;
  };
  value: {
    currency: string;
    amount: number;
  };
};

export const GetTransactionsForAccountFull =
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

export const CreateTransactionRequestAccount =
  (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: TransactionRequestAccountBody
    ) => Promise<any>
  ) =>
  (bankId: string, accountId: string, viewId: string, account: string) => {
    const path = `banks/${bankId}/accounts/${accountId}/${viewId}/transaction-request-types/${account}/transaction-requests`;
    return apiCallWithCustomBody<
      API.Transaction,
      TransactionRequestAccountBody
    >(config, path, methodCall);
  };

export const transaction: APIRequest<API.Transaction> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Transaction>(config, methodCall);
  },
  create: (
    config: APIClientConfig,
    methodCall: (
      config: APIClientConfig,
      path: string,
      body: TransactionRequestAccountBody
    ) => Promise<any>
  ) => {
    return apiCallWithCustomURIPath<API.Transaction>(config, methodCall);
  },
};
