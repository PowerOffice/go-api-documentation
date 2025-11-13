
GET Quality/QualityDocumentation/GetDocumentList/{entityId}?options=&lt;options&gt;
================

Gets documents connected to an assignment agreement.

### Url
```http
https://api.poweroffice.net/Quality/QualityDocumentation/GetDocumentList/{entityId}?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[QualityDocumentMetaData](Type_QualityDocumentMetaData.md)|


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Quality.QualityDocumentMetaData&gt;|No|List of [QualityDocumentMetaData](Type_QualityDocumentMetaData.md)

### Request Signature
```http
GET /Quality/QualityDocumentation/GetDocumentList/{entityId}?options=<options> HTTP/1.1
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



