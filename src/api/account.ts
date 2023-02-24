import {
  API,
  APIRequest,
  APIClientConfig,
  apiCallWithCustomURIPath,
} from "./client";

/**
 * Get banks on this API instance.
 * Returns a list of banks.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A curried function
 *
 * @public
 */
export const GetAccountsByBankId =
  (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) =>
  async (id: string): Promise<API.Account> => {
    const path = `/banks/${id}/accounts`;
    return await methodCall(config, path);
  };

/**
 * Returns an anonymous function for creating or getting Bank data.
 *
 * @param config - The APIClientConfig object
 * @param methodCall - A higher order function
 * @returns A higher order function
 *
 * @public
 */
export const account: APIRequest<API.Account> = {
  get: (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<API.Account>
  ) => {
    return apiCallWithCustomURIPath<API.Account>(config, methodCall);
  },
};
