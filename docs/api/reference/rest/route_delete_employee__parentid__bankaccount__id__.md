
DELETE Employee/{parentId}/BankAccount/{id}/
================

Deletes the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id.

### Url
```http
https://api.poweroffice.net/Employee/{parentId}/BankAccount/{id}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Success.

### Request Signature
```http
DELETE /Employee/{parentId}/BankAccount/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "data": object,
        "success": boolean,
        "validation": {
            "errorLogReference": string,
            "summary": string,
            "exception": string,
            "exceptionDetails": object,
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[]
        },
        "count": number
    },
    "success": boolean
}

```

### Errors
Type | Description
:----|:-----------
System.Exception|Unknown party bank account



