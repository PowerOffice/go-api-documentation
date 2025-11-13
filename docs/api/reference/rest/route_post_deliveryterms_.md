
POST DeliveryTerms/
================



### Url
```http
https://api.poweroffice.net/DeliveryTerms/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DeliveryTerm](Type_DeliveryTerm.md)|No|

### Response Content
Type | Array | Description
:----|:------|:------------
[DeliveryTerm](Type_DeliveryTerm.md)|No|

### Request Signature
```http
POST /DeliveryTerms/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "isDefault": boolean
}

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



