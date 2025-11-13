
GET Currency/?options=&lt;options&gt;
================

Gets a list of currencies filtered by a oData query.

### Url
```http
https://api.poweroffice.net/Currency/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Currency](Type_Currency.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Currency.Currency&gt;|No|DataPage&lt;Currencies&gt;.

### Request Signature
```http
GET /Currency/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "code": string,
        "notation": string,
        "isActive": boolean
    }],
    "count": number,
    "success": boolean
}

```



