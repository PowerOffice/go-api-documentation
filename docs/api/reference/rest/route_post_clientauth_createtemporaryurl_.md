
POST ClientAuth/CreateTemporaryUrl/
================

Creates, and returns, a [ClientAuthTemporaryUrlDto](Type_ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).

### Url
```http
https://api.poweroffice.net/ClientAuth/CreateTemporaryUrl/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ClientAuthTemporaryUrlRequestDto](Type_ClientAuthTemporaryUrlRequestDto.md)|No|The content of the request

### Response Content
Type | Array | Description
:----|:------|:------------
[ClientAuthTemporaryUrlDto](Type_ClientAuthTemporaryUrlDto.md)|No|ClientAuthTemporaryUrlDto

### Request Signature
```http
POST /ClientAuth/CreateTemporaryUrl/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "applicationKey": string (Guid),
    "clientOrganizationNo": string,
    "callbackUri": Uri,
    "redirectUri": Uri
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "temporaryUrl": string,
        "validUntil": Date
    },
    "success": boolean
}

```



