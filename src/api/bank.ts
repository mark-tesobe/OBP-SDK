import { API, APIRequest, APIClientConfig } from "./client";

//export class BankRouting {
//  scheme: string;
//  address: string;
//}
//
//export class Bank {
//  id: string;
//  short_name: string;
//  full_nae: string;
//  logo: string;
//  website: string;
//  Bank_routing: Array<BankRouting>;
//  attribute: Array<string>;
//}
//
//export class BankData {
//  Banks: Array<Bank>;
//}

export const bank: APIRequest<API.Bank> = {
  get: async (
    config: APIClientConfig,
    methodCall: (config: APIClientConfig, path: string) => Promise<any>
  ): Promise<API.Bank> => {
    return await methodCall(config, "banks");
  },
};
