
GET DebtCollection/IsActiveDebtCollection/
================

Gets whether new debt collection cases can be created. If false, Go.Web.ExternalApi.Controllers.DebtCollectionController.GetAvailableInvoices(ODataQueryOptions{GoApi.DebtCollection.DebtCollectionInvoice}) and Go.Web.ExternalApi.Controllers.DebtCollectionController.Save(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.

### Url
```http
https://api.poweroffice.net/DebtCollection/IsActiveDebtCollection/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
boolean|No|

### Request Signature
```http
GET /DebtCollection/IsActiveDebtCollection/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": boolean,
    "success": boolean
}

```



