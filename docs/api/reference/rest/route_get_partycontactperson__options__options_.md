
GET PartyContactPerson/?options=&lt;options&gt;
================

Gets a list of [ContactPerson](Type_ContactPerson.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/PartyContactPerson/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ContactPerson](Type_ContactPerson.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.ContactPerson&gt;|No|DataPage&lt;ContactPerson&gt;.

### Request Signature
```http
GET /PartyContactPerson/?options=<options> HTTP/1.1
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
        "firstName": string,
        "lastName": string,
        "emailAddress": string,
        "phoneNumber": string,
        "lastChanged": Date,
        "isActive": boolean,
        "isPep": boolean,
        "isRca": boolean,
        "partyCustomerCode": number,
        "partySupplierCode": number,
        "socialSecurityNumber": string,
        "hasNorwegianSSN": boolean,
        "address1": string,
        "address2": string,
        "city": string,
        "zipCode": string,
        "residenceCountryCode": string,
        "dateOfBirth": Date,
        "placeOfBirth": string,
        "citizenship": string,
        "gender": Gender,
        "externalCode": string
    }],
    "count": number,
    "success": boolean
}

```



