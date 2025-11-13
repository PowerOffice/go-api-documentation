
GET Bank/ClientBankAccount/?options=&lt;options&gt;
================

Gets a list of client bank accounts filtered by odata query.

### Url
```http
https://api.poweroffice.net/Bank/ClientBankAccount/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ClientBankAccount](Type_ClientBankAccount.md)|The odata options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Bank.ClientBankAccount&gt;|No|DataPage&lt;ClientBankAccount&gt;.

### Request Signature
```http
GET /Bank/ClientBankAccount/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "code": string,
        "bicSwift": string,
        "bankName": string,
        "generalLedgerAccountCode": number,
        "countryCode": string,
        "currencyCode": string,
        "hasOutgoingPaymentService": boolean,
        "hasIncomingPaymentService": boolean,
        "isClientTrustAccount": boolean,
        "isCurrentAccount": boolean,
        "generalLedgerAccountAgricultureDepartment": AgricultureDepartment
    }],
    "count": number,
    "success": boolean
}

```



