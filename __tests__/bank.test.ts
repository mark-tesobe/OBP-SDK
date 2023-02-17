import { describe, test } from "@jest/globals";
import { API, APIClientConfig, Version, get, Banks } from "../src/api";

describe("Bank", () => {
  test("get<BankData> should be able to get the OBP Bank data.", async () => {
    const clientConfig: APIClientConfig = {
      baseUri: "https://apisandbox.openbankproject.com",
      version: Version.v500,
      directLogin: process.env.DIRECT_LOGIN || "",
    };
    const banks = await get<API.Bank>(clientConfig, Banks);
  });
});
