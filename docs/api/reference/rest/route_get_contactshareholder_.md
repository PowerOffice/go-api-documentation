
GET ContactShareholder/
================

Gets a list of [ContactShareholder](Type_ContactShareholder.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ContactShareholder/
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
DataPage&lt;GoApi.Party.ContactShareholder&gt;|No|DataPage&lt;ContactShareholder&gt;.

### Request Signature
```http
GET /ContactShareholder/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "partyId": number,
        "partyCustomerCode": number,
        "partySupplierCode": number,
        "name": string,
        "firstName": string,
        "lastName": string,
        "idNumber": string,
        "address": string,
        "countryOfResidence": string,
        "share": number,
        "isPerson": boolean,
        "isPep": boolean,
        "isRca": boolean,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



