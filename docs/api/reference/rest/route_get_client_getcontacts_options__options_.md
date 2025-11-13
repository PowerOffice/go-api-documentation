
GET Client/GetContacts?options=&lt;options&gt;
================

Gets a list of client contacts filtered by odata query.

### Url
```http
https://api.poweroffice.net/Client/GetContacts?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ClientContact](Type_ClientContact.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
[ClientContact[]](Type_ClientContact.md)|No|DataPage&lt;ClientContact&gt;.

### Request Signature
```http
GET /Client/GetContacts?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK

```



