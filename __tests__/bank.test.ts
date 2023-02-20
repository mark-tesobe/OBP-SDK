import { describe, test, expect } from "@jest/globals";
import { API, APIClientConfig, Version, get, Bank } from "../src/api";

describe("Bank", () => {
  test("get<API.Bank> should be able to get the OBP Bank data.", async () => {
    const clientConfig: APIClientConfig = {
      baseUri: "https://apisandbox.openbankproject.com",
      version: Version.v500,
      directLogin: process.env.DIRECT_LOGIN || "",
    };
    const banks = await get<API.Bank>(clientConfig, Bank);
    expect(banks).toBeDefined();
  });
});
