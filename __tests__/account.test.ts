import { describe, test, expect } from "@jest/globals";
import {
  API,
  Version,
  APIClientConfig,
  DirectLoginAuthentication,
  get,
  Account,
} from "../src";
import { GetAccountsByBankId } from "../src/api/account";
import { getRequest, apiCallWithCustomURIPath } from "../src/api/client";

const directLogin: DirectLoginAuthentication = {
  username: process.env.OBP_USERNAME || "",
  password: process.env.OBP_PASSWORD || "",
  consumerKey: process.env.OBP_CONSUMER_KEY || "",
};

const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v500,
  authentication: directLogin,
};

describe("Account", () => {
  test("get<API.Account> ByBankId should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Account
    )(GetAccountsByBankId)("rbs");

    expect(accounts).toBeDefined();
  });

  test("get<API.Account> should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Account
    )("/banks/rbs/accounts");

    expect(accounts).toBeDefined();
  });

  test("apiCallWithCustomURIPath should be able to get the OBP Accounts data.", async () => {
    const customPathCall = apiCallWithCustomURIPath<API.Account>(
      clientConfig,
      getRequest
    );
    const accounts = await customPathCall("/banks/rbs/accounts");

    expect(accounts).toBeDefined();
  });
});
