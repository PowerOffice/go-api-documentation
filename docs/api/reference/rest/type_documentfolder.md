
DocumentFolder (DocumentFolder)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
ExternalReference|string|The External reference must be unique for all folders for the given client. This is mandatory when creating a new folder.         This is to prevent external systems by accident adding many instances of the same folder.         Max length is 50 characters.
HasWriteAccess|boolean|Readonly Boolean describing if the client has write access to the folder.         True if write access, false if only read access.
Id|number|The id of the folder entity. Must not be set to a positive value when adding a new folder.
Name|string|The name of the folder.
ParentFolderId|number|The id of the parent folder.         New folders will be added to folder specified by parentFolderId. If no parentFolderId is specified, folder will be added to "Shared documents"
