
GET ContactUltimateBeneficialOwner/?options=&lt;options&gt;
================

Gets a list of [ContactUltimateBeneficialOwner](Type_ContactUltimateBeneficialOwner.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ContactUltimateBeneficialOwner/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ContactUltimateBeneficialOwner](Type_ContactUltimateBeneficialOwner.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.ContactUltimateBeneficialOwner&gt;|No|DataPage&lt;ContactUltimateBeneficialOwner&gt;.

### Request Signature
```http
GET /ContactUltimateBeneficialOwner/?options=<options> HTTP/1.1
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
        "firstName": string,
        "lastName": string,
        "idNumber": string,
        "address": string,
        "countryOfResidence": string,
        "hasVotingRights": boolean,
        "share": number,
        "groundsForUBOStatus": string,
        "isPep": boolean,
        "isRca": boolean,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



