
GET Bank/BankTransfer/{id}/
================

Gets the specified bank transfer by its id.

### Url
```http
https://api.poweroffice.net/Bank/BankTransfer/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[BankTransfer](Type_BankTransfer.md)|No|BankTransfer.

### Request Signature
```http
GET /Bank/BankTransfer/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



