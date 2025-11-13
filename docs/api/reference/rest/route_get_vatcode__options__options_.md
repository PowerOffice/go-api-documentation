
GET VatCode/?options=&lt;options&gt;
================

Gets a list of vat codes filtered by odata query.

### Url
```http
https://api.poweroffice.net/VatCode/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[VatCode](Type_VatCode.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Dimension.VatCode&gt;|No|DataPage&lt;VatCode&gt;.

### Request Signature
```http
GET /VatCode/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



