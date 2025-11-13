
POST Bank/BankTransfer/
================

Creates the specified bank transfer.         A bank transfer can not be edited after creation. If there was something wrong with the bank transfer, it has to be deleted and recreated.

### Url
```http
https://api.poweroffice.net/Bank/BankTransfer/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[BankTransfer](Type_BankTransfer.md)|No|The BankTransfer.

### Response Content
Type | Array | Description
:----|:------|:------------
[BankTransfer](Type_BankTransfer.md)|No|BankTransfer.

### Request Signature
```http
POST /Bank/BankTransfer/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": string (Guid),
    "description": string,
    "receiverName": string,
    "receiverCountryCode": string,
    "receiverVatNumber": string,
    "payableBankAccount": string,
    "currencyCode": string,
    "paymentDate": Date,
    "amount": number,
    "balancingAccountNo": number,
    "receivableBankAccountCode": string,
    "receivableBankAccountBicSwift": string,
    "receivableBankAccountCountryCode": string,
    "receivableBankAccountBankCode": string,
    "cid": string,
    "paymentMessage": string,
    "currencyRegistryCode": CurrencyRegistryCodes,
    "currencyRegistryText": string,
    "isExpress": boolean,
    "internationalPaymentFeeDistribution": InternationalPaymentFeeDistribution,
    "isOnHold": boolean,
    "projectCode": string,
    "departmentCode": string,
    "externalImportReference": string,
    "invoiceId": string (Guid),
    "subLedgerEntryId": number,
    "balancingAccountAgricultureDepartment": AgricultureDepartment
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "description": string,
        "receiverName": string,
        "receiverCountryCode": string,
        "receiverVatNumber": string,
        "payableBankAccount": string,
        "status": BankTransferStatus,
        "currencyCode": string,
        "paymentDate": Date,
        "amount": number,
        "balancingAccountNo": number,
        "receivableBankAccountCode": string,
        "receivableBankAccountBicSwift": string,
        "receivableBankAccountCountryCode": string,
        "receivableBankAccountBankCode": string,
        "cid": string,
        "paymentMessage": string,
        "currencyRegistryCode": CurrencyRegistryCodes,
        "currencyRegistryText": string,
        "isExpress": boolean,
        "internationalPaymentFeeDistribution": InternationalPaymentFeeDistribution,
        "isOnHold": boolean,
        "projectCode": string,
        "departmentCode": string,
        "externalImportReference": string,
        "invoiceId": string (Guid),
        "subLedgerEntryId": number,
        "balancingAccountAgricultureDepartment": AgricultureDepartment
    },
    "success": boolean
}

```



