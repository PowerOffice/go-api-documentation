
POST DebtCollection/AddInvoicesToCase?request=&lt;request&gt;
================

Adds a collection of invoices to a debt collection case by the debt collection case assigned id and the invoice's ids.

### Url
```
https://api.poweroffice.net/DebtCollection/AddInvoicesToCase?request=<request>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
request|[DebtCollectionAddInvoicesToCaseRequest](Type_DebtCollectionAddInvoicesToCaseRequest.md)|Yes|The debt collection add invoices to case request.


### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase

### Request Signature
```
POST /DebtCollection/AddInvoicesToCase?request=<request> HTTP/1.1
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



