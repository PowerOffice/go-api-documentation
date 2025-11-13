
GET ContactGroup/?options=&lt;options&gt;
================

Gets a list of [ContactGroup](Type_ContactGroup.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ContactGroup/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ContactGroup](Type_ContactGroup.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.ContactGroup&gt;|No|DataPage&lt;ContactGroup&gt;.

### Request Signature
```http
GET /ContactGroup/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "title": string,
        "sendInvoicesToGroup": boolean
    }],
    "count": number,
    "success": boolean
}

```



