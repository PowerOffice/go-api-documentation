
ClientDocumentListItem
================

Metadata for the actual document.


### Properties
Name | Description
:----|:------------
[CreatedByUserId](GoApi.Documents.ClientDocumentListItem.CreatedByUserId.md)|Gets the Created by user id.
[ExternalReference](GoApi.Documents.ClientDocumentListItem.ExternalReference.md)|The External reference must be unique for all files for the given client. This is mandatory when creating a new document or adding a new version.         This is to prevent external systems by accident adding many instances of the same file.         Max length is 50 characters.
[Filename](GoApi.Documents.ClientDocumentListItem.Filename.md)|Filename. This is the name of the file that will be visible in the Folder in Go.
[FileSize](GoApi.Documents.ClientDocumentListItem.FileSize.md)|Gets the files size in bytes.
[FolderId](GoApi.Documents.ClientDocumentListItem.FolderId.md)|The entity id of the folder containing the file.
[Id](GoApi.Documents.ClientDocumentListItem.Id.md)|The Id of the document entity. Is not used when adding a new [ClientDocument](GoApi.Documents.ClientDocument.md) .         When adding a new version, the Id should be set to the current [ClientDocument](GoApi.Documents.ClientDocument.md) .
[Period](GoApi.Documents.ClientDocumentListItem.Period.md)|The month this document represents.
[Version](GoApi.Documents.ClientDocumentListItem.Version.md)|The document version.
[Year](GoApi.Documents.ClientDocumentListItem.Year.md)|The year this document represents.

### Constructors
Name | Description
:----|:------------
[ClientDocumentListItem()](GoApi.Documents.ClientDocumentListItem.ClientDocumentListItem__.md)|



