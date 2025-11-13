
DocumentFolder
================

Entity representing a folder.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Documents.DocumentFolder.Id.md)|The id of the folder entity. Must not be set to a positive value when adding a new folder.
[ExternalReference](GoApi.Documents.DocumentFolder.ExternalReference.md)|The External reference must be unique for all folders for the given client. This is mandatory when creating a new folder.         This is to prevent external systems by accident adding many instances of the same folder.         Max length is 50 characters.
[HasWriteAccess](GoApi.Documents.DocumentFolder.HasWriteAccess.md)|Readonly Boolean describing if the client has write access to the folder.         True if write access, false if only read access.
[Name](GoApi.Documents.DocumentFolder.Name.md)|The name of the folder.
[ParentFolderId](GoApi.Documents.DocumentFolder.ParentFolderId.md)|The id of the parent folder.         New folders will be added to folder specified by parentFolderId. If no parentFolderId is specified, folder will be added to "Shared documents"

### Constructors
Name | Description
:----|:------------
[DocumentFolder()](GoApi.Documents.DocumentFolder.DocumentFolder__.md)|



