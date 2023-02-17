import { describe, test } from "@jest/globals";
import { API, Version, APIClientConfig, get, Transactions } from "../src/api";
import { GetTransactionsByBankId } from "../src/api/transaction";
import { getRequest } from "../src/api/client";

const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v500,
  directLogin: process.env.DIRECT_LOGIN || "",
};

describe("Transaction", () => {
  test("get<API.Transaction> ByBankId should be able to get the OBP Transactions data.", async () => {
    const transactions = await get<API.Transaction>(
      clientConfig,
      Transactions
    )(GetTransactionsByBankId)("rbs", "accountId", "owner");
  });

  test("get<API.Transaction> should be able to get the OBP Transactions data.", async () => {
    const transactions = await bet<API.Transaction>(
      clientConfig,
      Transactions
    )(
      `/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`
    );
  });
});
