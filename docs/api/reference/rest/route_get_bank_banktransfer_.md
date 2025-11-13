
GET Bank/BankTransfer/
================

Gets a list of bank transfers filtered by odata query.         Querying will only return BankTransfers that is created by the integration itself, not all payments on the client.

### Url
```http
https://api.poweroffice.net/Bank/BankTransfer/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Bank.BankTransfer&gt;|No|DataPage&lt;BankTransfer&gt;.

### Request Signature
```http
GET /Bank/BankTransfer/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
        "subLedgerEntryId": number
    }],
    "count": number,
    "success": boolean
}

```



