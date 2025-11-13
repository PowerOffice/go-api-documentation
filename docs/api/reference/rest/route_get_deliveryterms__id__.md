
GET DeliveryTerms/{id}/
================

Gets the specified [DeliveryTerm](Type_DeliveryTerm.md) by its identifier.

### Url
```http
https://api.poweroffice.net/DeliveryTerms/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[DeliveryTerm](Type_DeliveryTerm.md)|No|DeliveryTerm.

### Request Signature
```http
GET /DeliveryTerms/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "name": string,
        "isDefault": boolean
    },
    "success": boolean
}

```



