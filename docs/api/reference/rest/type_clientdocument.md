
ClientDocument (ClientDocument)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Base64EncodedData|string|Base64 encoded string of the actual document.
CreatedByUserId|string (Guid)|Gets the Created by user id.
DocumentVersions|[DocumentVersionListItem](Type_DocumentVersionListItem.md)|List of [DocumentVersionListItem](Type_DocumentVersionListItem.md) , which are other document versions associated with this document entity.
ExternalReference|string|The External reference must be unique for all files for the given client. This is mandatory when creating a new document or adding a new version.         This is to prevent external systems by accident adding many instances of the same file.         Max length is 50 characters.
Filename|string|Filename. This is the name of the file that will be visible in the Folder in Go.
FileSize|number|Gets the files size in bytes.
FolderId|number|The entity id of the folder containing the file.
Id|number|The Id of the document entity. Is not used when adding a new [ClientDocument](Type_ClientDocument.md) .         When adding a new version, the Id should be set to the current [ClientDocument](Type_ClientDocument.md) .
Period|[Months](Type_Months.md)|The month this document represents.
Version|number|The document version.
Year|number|The year this document represents.
