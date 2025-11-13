
POST ClientAuth/RetrieveClientDataFromSessionId/
================

GOAPI:IGNORE

### Url
```http
https://api.poweroffice.net/ClientAuth/RetrieveClientDataFromSessionId/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ClientOnboardingRequestDto](Type_ClientOnboardingRequestDto.md)|No|

### Response Content
Type | Array | Description
:----|:------|:------------
[ClientOnboardingDto](Type_ClientOnboardingDto.md)|No|

### Request Signature
```http
POST /ClientAuth/RetrieveClientDataFromSessionId/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "applicationKey": string (Guid),
    "sessionId": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "success": boolean,
        "clientKey": string (Guid),
        "clientOrganizationNumber": string,
        "clientName": string,
        "userEmail": string
    },
    "success": boolean
}

```



