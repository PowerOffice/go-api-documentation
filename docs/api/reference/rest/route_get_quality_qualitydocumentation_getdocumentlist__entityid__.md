
GET Quality/QualityDocumentation/GetDocumentList/{entityId}/
================

Gets documents connected to an assignment agreement.

### Url
```http
https://api.poweroffice.net/Quality/QualityDocumentation/GetDocumentList/{entityId}/
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
DataPage&lt;GoApi.Quality.QualityDocumentMetaData&gt;|No|List of [QualityDocumentMetaData](Type_QualityDocumentMetaData.md)

### Request Signature
```http
GET /Quality/QualityDocumentation/GetDocumentList/{entityId}/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "entityId": number,
        "name": string,
        "fileExtension": string,
        "fileSize": number,
        "modified": Date,
        "modifiedBy": string,
        "isLocked": boolean,
        "version": number,
        "signingStatus": SigningStatus,
        "uploaded": Date,
        "uploadedBy": string,
        "noteCount": number,
        "validFrom": Date,
        "year": number,
        "period": Months,
        "qualityTaskName": string,
        "rejectReason": string,
        "documentSubContextType": DocumentSubContextType
    }],
    "count": number,
    "success": boolean
}

```



