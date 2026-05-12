
GET ClientIntegrationInformation/
================

Get information about the integration.

### Url
```http
https://api.poweroffice.net/ClientIntegrationInformation/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ClientIntegrationInformation](Type_ClientIntegrationInformation.md)|No|ClientIntegrationInformation

### Request Signature
```http
GET /ClientIntegrationInformation/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "activeClientSubscriptions": [
            string
        ],
        "clientId": string,
        "clientName": string,
        "invalidPrivileges": [
            string
        ],
        "userId": string,
        "validPrivileges": [
            string
        ]
    },
    "success": boolean
}

```


