
GET VatCode/chartofaccount/{accountCode}?options=&lt;options&gt;
================

Gets available VAT codes for the specified general ledger account code.

### Url
```http
https://api.poweroffice.net/VatCode/chartofaccount/{accountCode}?options=<options>
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
DataPage&lt;GoApi.Dimension.VatCode&gt;|No|VatCode.

### Request Signature
```http
GET /VatCode/chartofaccount/{accountCode}?options=<options> HTTP/1.1
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



