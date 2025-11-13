
POST DebtCollection/UpdateStatus?request=&lt;request&gt;
================

Updates a debt collection case status by it's id and a status text. Can also be used to close or reject cases by setting flags on the request.

### Url
```
https://api.poweroffice.net/DebtCollection/UpdateStatus?request=<request>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
request|[DebtCollectionStatusUpdateRequest](Type_DebtCollectionStatusUpdateRequest.md)|Yes|The debt collection status update request.


### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase.

### Request Signature
```
POST /DebtCollection/UpdateStatus?request=<request> HTTP/1.1
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



