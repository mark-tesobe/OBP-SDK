import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  Bank,
} from "../src/api";

describe("Bank", () => {
  test("get<API.Bank> should be able to get the OBP Bank data.", async () => {
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
    const banks = await get<API.Bank>(clientConfig, Bank);
    expect(banks).toBeDefined();
  });
});
