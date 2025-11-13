
GET Customer/{parentId}/BankAccount/{id}?options=&lt;options&gt;
================

Gets the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).

### Url
```http
https://api.poweroffice.net/Customer/{parentId}/BankAccount/{id}?options=<options>
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
[PartyBankAccount](Type_PartyBankAccount.md)|No|PartyBankAccount.

### Request Signature
```http
GET /Customer/{parentId}/BankAccount/{id}?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "partyId": number,
        "code": string,
        "bicSwift": string,
        "countryCode": string,
        "bankCode": string,
        "isActive": boolean,
        "lastChanged": Date
    },
    "success": boolean
}

```



