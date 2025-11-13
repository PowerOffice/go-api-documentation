
GET Employee/{parentId}/BankAccount?options=&lt;options&gt;
================

Gets a list of [PartyBankAccount](Type_PartyBankAccount.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).

### Url
```http
https://api.poweroffice.net/Employee/{parentId}/BankAccount?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[PartyBankAccount](Type_PartyBankAccount.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.PartyBankAccount&gt;|No|DataPage&lt;PartyBankAccount&gt;.

### Request Signature
```http
GET /Employee/{parentId}/BankAccount?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "partyId": number,
        "code": string,
        "bicSwift": string,
        "countryCode": string,
        "bankCode": string,
        "isActive": boolean,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



