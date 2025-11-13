
GET PartyBankAccount/?options=&lt;options&gt;
================

Gets a list of party bank accounts filtered by odata query.

### Url
```http
https://api.poweroffice.net/PartyBankAccount/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[PartyBankAccount](Type_PartyBankAccount.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.PartyBankAccount&gt;|No|DataPage&lt;PartyBankAccount&gt;.

### Request Signature
```http
GET /PartyBankAccount/?options=<options> HTTP/1.1
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
        "code": string,
        "bicSwift": string,
        "countryCode": string,
        "bankCode": string,
        "isActive": boolean,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



