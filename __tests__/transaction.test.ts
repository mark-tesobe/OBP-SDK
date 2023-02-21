import { describe, test, expect } from "@jest/globals";
import {
  API,
  Version,
  APIClientConfig,
  create,
  get,
  Transaction,
} from "../src/api";
import {
  GetTransactionsForAccountFull,
  CreateTransactionRequestAccount,
  TransactionRequestAccountBody,
} from "../src/api/transaction";

const clientConfig: APIClientConfig = {
  baseUri: "https://apisandbox.openbankproject.com",
  version: Version.v500,
  directLogin: process.env.DIRECT_LOGIN || "",
};
const bankId = "rbs";
const accountId = "41b8c9f2-7748-40ee-ac32-4ffd2e834914";
const viewId = "owner";

describe("Transaction", () => {
  test("get<API.Transaction> ByBankId should be able to get the OBP Transactions data.", async () => {
    const transactions = await get<API.Transaction>(
      clientConfig,
      Transaction
    )(GetTransactionsForAccountFull)(bankId, accountId, viewId);

    expect(transactions).toBeDefined();
  });

  test("get<API.Transaction> should be able to get the OBP Transactions data.", async () => {
    const transactions = await get<API.Transaction>(
      clientConfig,
      Transaction
    )(`/banks/${bankId}/accounts/${accountId}/${viewId}/transactions`);

    expect(transactions).toBeDefined();
  });

  test("create<API.Transaction, TransactionFullBody> should be able to createn an OBP Transaction Full data.", async () => {
    const body: TransactionRequestAccountBody = {
      description: "test transaction full data",
      to: {
        bank_id: bankId,
        account_id: accountId,
      },
      value: {
        currency: "EUR",
        amount: 1.0,
      },
    };
    const transactions = await create<API.Transaction>(
      clientConfig,
      Transaction
    )(CreateTransactionRequestAccount)(
      bankId,
      accountId,
      viewId
    )(body);

    expect(transactions).toBeDefined();
  });
});
