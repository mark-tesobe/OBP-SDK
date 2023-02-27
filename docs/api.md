# Module: api

## Table of contents

### Enumerations

- [API](../wiki/api.API)
- [Version](../wiki/api.Version)

### Type Aliases

- [APIClientConfig](../wiki/api#apiclientconfig)
- [APIRequest](../wiki/api#apirequest)
- [DirectLoginAuthentication](../wiki/api#directloginauthentication)
- [MethodCall](../wiki/api#methodcall)
- [TransactionRequestAccountBody](../wiki/api#transactionrequestaccountbody)

### Variables

- [Account](../wiki/api#account)
- [Bank](../wiki/api#bank)
- [Transaction](../wiki/api#transaction)
- [User](../wiki/api#user)

### Functions

- [CreateTransactionRequestAccount](../wiki/api#createtransactionrequestaccount)
- [Current](../wiki/api#current)
- [GetBanks](../wiki/api#getbanks)
- [GetBanksById](../wiki/api#getbanksbyid)
- [GetTransactionsForAccountFull](../wiki/api#gettransactionsforaccountfull)
- [create](../wiki/api#create)
- [get](../wiki/api#get)

## Type Aliases

### APIClientConfig

Ƭ **APIClientConfig**: `Object`

Alias for APIClientConfig properties.

**`Property`**

baseUri

**`Property`**

version

**`Property`**

authentication

**`Property`**

[token]

**`See`**

 - [Version](../wiki/api.Version)
 - [DirectLoginAuthentication](../wiki/api#directloginauthentication)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authentication` | [`DirectLoginAuthentication`](../wiki/api#directloginauthentication) |
| `baseUri` | `string` |
| `token?` | `string` |
| `version` | [`Version`](../wiki/api.Version) |

#### Defined in

[api/client.ts:57](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L57)

___

### APIRequest

Ƭ **APIRequest**<`T`\>: `Object`

Alias for APIRequest properties.

**`Property`**

[get]

**`Property`**

[create]

**`See`**

 - [APIClientConfig](../wiki/api#apiclientconfig)
 - [MethodCall](../wiki/api#methodcall)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of object |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create?` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `methodCall`: [`MethodCall`](../wiki/api#methodcall)<`T`\>) => `any` |
| `get?` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `methodCall`: [`MethodCall`](../wiki/api#methodcall)<`T`\>) => `any` |

#### Defined in

[api/client.ts:96](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L96)

___

### DirectLoginAuthentication

Ƭ **DirectLoginAuthentication**: `Object`

Alias for DirectLogin properties.

**`Property`**

username

**`Property`**

passowrd

**`Property`**

consumerKey

#### Type declaration

| Name | Type |
| :------ | :------ |
| `consumerKey` | `string` |
| `password` | `string` |
| `username` | `string` |

#### Defined in

[api/client.ts:37](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L37)

___

### MethodCall

Ƭ **MethodCall**<`T`\>: (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`, `body?`: `any`) => `Promise`<`T`\>

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of object |

#### Type declaration

▸ (`config`, `path`, `body?`): `Promise`<`T`\>

Alias for HTTP MethodCall properties.

**`Property`**

config

**`Property`**

path

**`Property`**

[body]

**`See`**

APIClientConfig

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) |
| `path` | `string` |
| `body?` | `any` |

##### Returns

`Promise`<`T`\>

#### Defined in

[api/client.ts:77](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L77)

___

### TransactionRequestAccountBody

Ƭ **TransactionRequestAccountBody**: `Object`

Alias for TransactionRequestAccountBody properties.

**`Property`**

description

**`Property`**

to

**`Property`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `to` | { `account_id`: `string` ; `bank_id`: `string`  } |
| `to.account_id` | `string` |
| `to.bank_id` | `string` |
| `value` | { `amount`: `number` ; `currency`: `string`  } |
| `value.amount` | `number` |
| `value.currency` | `string` |

#### Defined in

[api/transaction.ts:18](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/transaction.ts#L18)

## Variables

### Account

• `Const` **Account**: [`APIRequest`](../wiki/api#apirequest)<[`Account`](../wiki/api.API#account)\>

Returns an anonymous function for creating or getting an Account data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - [APIClientConfig](../wiki/api#apiclientconfig)
 - [APIRequest](../wiki/api#apirequest)

#### Defined in

[api/account.ts:42](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/account.ts#L42)

___

### Bank

• `Const` **Bank**: [`APIRequest`](../wiki/api#apirequest)<[`Bank`](../wiki/api.API#bank)\>

Returns an anonymous function for creating or getting Bank data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - APIClientConfig
 - [APIRequest](../wiki/api#apirequest)

#### Defined in

[api/bank.ts:57](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/bank.ts#L57)

___

### Transaction

• `Const` **Transaction**: [`APIRequest`](../wiki/api#apirequest)<[`Transaction`](../wiki/api.API#transaction)\>

Returns an anonymous function for creating or getting Transaction data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - APIClientConfig
 - [APIRequest](../wiki/api#apirequest)

#### Defined in

[api/transaction.ts:96](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/transaction.ts#L96)

___

### User

• `Const` **User**: [`APIRequest`](../wiki/api#apirequest)<[`User`](../wiki/api.API#user)\>

Returns an anonymous function for creating or getting a User data.

**`Param`**

The APIClientConfig object

**`Param`**

A higher order function

**`See`**

 - APIClientConfig
 - [APIRequest](../wiki/api#apirequest)

#### Defined in

[api/user.ts:39](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/user.ts#L39)

## Functions

### CreateTransactionRequestAccount

▸ **CreateTransactionRequestAccount**(`config`, `methodCall`): (`bankId`: `string`, `accountId`: `string`, `viewId`: `string`, `account`: `string`) => (`body`: [`TransactionRequestAccountBody`](../wiki/api#transactionrequestaccountbody)) => `Promise`<[`Transaction`](../wiki/api.API#transaction)\>

Create Transaction Request (ACCOUNT).

**`See`**

APIClientConfig

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`, `body`: [`TransactionRequestAccountBody`](../wiki/api#transactionrequestaccountbody)) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`, `accountId`, `viewId`, `account`): (`body`: [`TransactionRequestAccountBody`](../wiki/api#transactionrequestaccountbody)) => `Promise`<[`Transaction`](../wiki/api.API#transaction)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |
| `accountId` | `string` |
| `viewId` | `string` |
| `account` | `string` |

##### Returns

`fn`

▸ (`body`): `Promise`<[`Transaction`](../wiki/api.API#transaction)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`TransactionRequestAccountBody`](../wiki/api#transactionrequestaccountbody) |

##### Returns

`Promise`<[`Transaction`](../wiki/api.API#transaction)\>

#### Defined in

[api/transaction.ts:68](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/transaction.ts#L68)

___

### Current

▸ **Current**(`config`, `methodCall`): `Promise`<[`User`](../wiki/api.API#user)\>

Get the logged in user
Returns information about the logged in user.

**`See`**

APIClientConfig

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`) => `Promise`<[`User`](../wiki/api.API#user)\> | A higher order function |

#### Returns

`Promise`<[`User`](../wiki/api.API#user)\>

A curried function

#### Defined in

[api/user.ts:20](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/user.ts#L20)

___

### GetBanks

▸ **GetBanks**(`config`, `methodCall`): `Promise`<`any`\>

Get the bank specified by BANK_ID.
Returns information about a single bank specified by BANK_ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`Promise`<`any`\>

A curried function

#### Defined in

[api/bank.ts:38](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/bank.ts#L38)

___

### GetBanksById

▸ **GetBanksById**(`config`, `methodCall`): (`id`: `string`) => `Promise`<[`Account`](../wiki/api.API#account)\>

Get banks on this API instance.
Returns a list of banks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`id`): `Promise`<[`Account`](../wiki/api.API#account)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`Promise`<[`Account`](../wiki/api.API#account)\>

#### Defined in

[api/bank.ts:19](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/bank.ts#L19)

___

### GetTransactionsForAccountFull

▸ **GetTransactionsForAccountFull**(`config`, `methodCall`): (`bankId`: `string`, `accountId`: `string`, `viewId`: `string`) => `Promise`<[`Account`](../wiki/api.API#account)\>

Get Transactions for Account (Full).
Returns transactions list of the account specified by ACCOUNT_ID and moderated by the view (VIEW_ID).

**`See`**

APIClientConfig

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `methodCall` | (`config`: [`APIClientConfig`](../wiki/api#apiclientconfig), `path`: `string`) => `Promise`<`any`\> | A higher order function |

#### Returns

`fn`

A curried function

▸ (`bankId`, `accountId`, `viewId`): `Promise`<[`Account`](../wiki/api.API#account)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bankId` | `string` |
| `accountId` | `string` |
| `viewId` | `string` |

##### Returns

`Promise`<[`Account`](../wiki/api.API#account)\>

#### Defined in

[api/transaction.ts:43](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/transaction.ts#L43)

___

### create

▸ **create**<`T`\>(`config`, `request`): `any`

A POST request function that creates an API data and returns the result.

**`See`**

 - APIClientConfig
 - APIRequest<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `request` | [`APIRequest`](../wiki/api#apirequest)<`T`\> | The APIRequest object |

#### Returns

`any`

An

#### Defined in

[api/client.ts:302](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L302)

___

### get

▸ **get**<`T`\>(`config`, `request`): `any`

A GET request function that returns the API data.

**`See`**

 - APIClientConfig
 - APIRequest<T>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`APIClientConfig`](../wiki/api#apiclientconfig) | The APIClientConfig object |
| `request` | [`APIRequest`](../wiki/api#apirequest)<`T`\> | The APIRequest object |

#### Returns

`any`

An

#### Defined in

[api/client.ts:283](https://github.com/mark-tesobe/OBP-SDK/blob/341a984/src/api/client.ts#L283)
