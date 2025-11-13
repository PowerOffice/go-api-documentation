
GET VatCode/{id}/
================

Gets the specified VatCode by it's id.

### Url
```http
https://api.poweroffice.net/VatCode/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[VatCode](Type_VatCode.md)|No|VatCode.

### Request Signature
```http
GET /VatCode/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "code": string,
        "name": string,
        "description": string,
        "rate": number,
        "isActive": boolean,
        "validFrom": Date,
        "validto": Date,
        "isCustom": boolean,
        "isVatCompensationCode": boolean,
        "vatBasisRatio": number
    },
    "success": boolean
}

```



