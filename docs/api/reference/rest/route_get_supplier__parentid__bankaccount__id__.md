
GET Supplier/{parentId}/BankAccount/{id}/
================

Gets the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).

### Url
```http
https://api.poweroffice.net/Supplier/{parentId}/BankAccount/{id}/
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
[PartyBankAccount](Type_PartyBankAccount.md)|No|PartyBankAccount.

### Request Signature
```http
GET /Supplier/{parentId}/BankAccount/{id}/?$filter=<ODataFilter> HTTP/1.1
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



