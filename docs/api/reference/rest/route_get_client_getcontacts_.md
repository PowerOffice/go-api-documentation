
GET Client/GetContacts/
================

Gets a list of client contacts filtered by odata query.

### Url
```http
https://api.poweroffice.net/Client/GetContacts/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[ClientContact[]](Type_ClientContact.md)|No|DataPage&lt;ClientContact&gt;.

### Request Signature
```http
GET /Client/GetContacts/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK

```



