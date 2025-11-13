
POST ContactUltimateBeneficialOwner/
================

Saves the specified [ContactUltimateBeneficialOwner](Type_ContactUltimateBeneficialOwner.md) .

### Url
```http
https://api.poweroffice.net/ContactUltimateBeneficialOwner/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ContactUltimateBeneficialOwner](Type_ContactUltimateBeneficialOwner.md)|No|The Ultimate Beneficial Owner.

### Response Content
Type | Array | Description
:----|:------|:------------
[ContactUltimateBeneficialOwner](Type_ContactUltimateBeneficialOwner.md)|No|ContactUltimateBeneficialOwner.

### Request Signature
```http
POST /ContactUltimateBeneficialOwner/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "isRca": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



