import { describe, test, expect } from "@jest/globals";
import { API, APIClientConfig, Version, get, User, Current } from "../src/api";

describe("User", () => {
  test("get<API.User> Current should be able to get the Current User.", async () => {
    const clientConfig: APIClientConfig = {
      baseUri: "https://apisandbox.openbankproject.com",
      version: Version.v500,
      directLogin: process.env.DIRECT_LOGIN || "",
    };
    const users = await get<API.User>(clientConfig, User)(Current);
    expect(users).toBeDefined();
    console.log(JSON.stringify(users));
  });
});
