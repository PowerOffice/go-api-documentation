
POST DebtCollection/MergeCases?request=&lt;request&gt;
================

Merges a collection of debt collection cases by their ids to a single debt collection case with a given code.

### Url
```
https://api.poweroffice.net/DebtCollection/MergeCases?request=<request>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
request|[DebtCollectionMergeCasesRequest](Type_DebtCollectionMergeCasesRequest.md)|Yes|The merge debt collection cases request


### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase

### Request Signature
```
POST /DebtCollection/MergeCases?request=<request> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": Guid,
        "code": string,
        "status": number (Enum),
        "invoices": ,
        "externalCaseUrl": string,
        "balanceAgency": number,
        "lastChanged": DateTimeOffset
    },
    "success": boolean
}

```



