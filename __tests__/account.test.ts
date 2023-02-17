import { describe, test } from "@jest/globals";
import { API, Version, APIClientConfig, get, Accounts } from "../src";
import { GetAccountsByBankId } from "../src/api/account";
import { getRequest, apiCallWithCustomURIPath } from "../src/api/client";

const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v500,
  directLogin: process.env.DIRECT_LOGIN || "",
};

describe("Account", () => {
  test("get<API.Account> ByBankId should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Accounts
    )(GetAccountsByBankId)("rbs");
  });

  test("get<API.Account> should be able to get the OBP Accounts data.", async () => {
    const accounts = await get<API.Account>(
      clientConfig,
      Accounts
    )("/banks/rbs/accounts");
  });

  test("apiCallWithCustomURIPath should be able to get the OBP Accounts data.", async () => {
    const customPathCall = await apiCallWithCustomURIPath(
      clientConfig,
      getRequest
    );
    const accounts = await customPathCall("/banks/rbs/accounts");
  });
});
