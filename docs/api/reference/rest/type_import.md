
Import (Import)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Date|Date|Gets the date of when the import was saved in PowerOffice Go.
Description|string|Gets or sets the description of the import.
ExternalImportReference|string|Gets or sets the external import reference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
File|[ImportFile](Type_ImportFile.md)|Gets or sets the [ImportFile](Type_ImportFile.md) . If provided, this import will import the file and ignore GoApi.Import.Import.ImportLines and GoApi.Import.Import.SalesOrders objects.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
ImportLines|[ImportLine](Type_ImportLine.md)|Gets or sets a collection of [ImportLine](Type_ImportLine.md) that should be posted. Will only be used if GoApi.Import.Import.File is not provided.
IsPosted|boolean|Gets a value indicating whether this journal has been posted in PowerOffice Go.
LastChanged|Date|Gets the last changed date.
SalesOrders|[SalesOrder](Type_SalesOrder.md)|Gets or sets a collection of [SalesOrder](Type_SalesOrder.md) that should be posted. Will only be used if GoApi.Import.Import.File is not provided.         Sales Order is no longer recommended for use when importing invoices to be sent from PowerOffice Go. [OutgoingInvoice](Type_OutgoingInvoice.md) is the preferred data object to be used.
Type|[ImportType](Type_ImportType.md)|Gets or sets the [ImportType](Type_ImportType.md) .
