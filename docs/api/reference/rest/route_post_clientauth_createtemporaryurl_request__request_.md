
POST ClientAuth/CreateTemporaryUrl?request=&lt;request&gt;
================



### Url
```
https://api.poweroffice.net/ClientAuth/CreateTemporaryUrl?request=<request>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
request|[ClientAuthTemporaryUrlRequestDto](Type_ClientAuthTemporaryUrlRequestDto.md)|Yes|


### Response Content
Type | Array | Description
:----|:------|:------------
[ClientAuthTemporaryUrlDto](Type_ClientAuthTemporaryUrlDto.md)|No|

### Request Signature
```
POST /ClientAuth/CreateTemporaryUrl?request=<request> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "temporaryUrl": string,
        "validUntil": DateTimeOffset
    },
    "success": boolean
}

```



