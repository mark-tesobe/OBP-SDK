import { describe, test, expect } from "@jest/globals";
import {
  API,
  APIClientConfig,
  DirectLoginAuthentication,
  Version,
  get,
  User,
  Current,
} from "../src/api";

describe("User", () => {
  test("get<API.User> Current should be able to get the Current User.", async () => {
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
    const users = await get<API.User>(clientConfig, User)(Current);
    expect(users).toBeDefined();
  });
});
