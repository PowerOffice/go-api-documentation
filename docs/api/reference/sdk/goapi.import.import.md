
Import
================

Class representing an Import.         The import can contain either a [ImportFile](GoApi.Import.ImportFile.md) , a collection of GoApi.Import.Import.ImportLines or a collection of GoApi.Import.Import.SalesOrders .         When you want to import data to PowerOffice Go you must first create an instance of an import class, and then add the data to the import object.         A common case would be to import payroll, or cash journals. You will first have to set the Type property of the import, and then add your data to the ImportLines property.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Import.Import.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Date](GoApi.Import.Import.Date.md)|Gets the date of when the import was saved in PowerOffice Go.
[Description](GoApi.Import.Import.Description.md)|Gets or sets the description of the import.
[ExternalImportReference](GoApi.Import.Import.ExternalImportReference.md)|Gets or sets the external import reference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
[File](GoApi.Import.Import.File.md)|Gets or sets the [ImportFile](GoApi.Import.ImportFile.md) . If provided, this import will import the file and ignore GoApi.Import.Import.ImportLines and GoApi.Import.Import.SalesOrders objects.
[ImportLines](GoApi.Import.Import.ImportLines.md)|Gets or sets a collection of [ImportLine](GoApi.Import.ImportLine.md) that should be posted. Will only be used if GoApi.Import.Import.File is not provided.
[IsPosted](GoApi.Import.Import.IsPosted.md)|Gets a value indicating whether this journal has been posted in PowerOffice Go.
[LastChanged](GoApi.Import.Import.LastChanged.md)|Gets the last changed date.
[SalesOrders](GoApi.Import.Import.SalesOrders.md)|Gets or sets a collection of [SalesOrder](GoApi.SalesOrders.SalesOrder.md) that should be posted. Will only be used if GoApi.Import.Import.File is not provided.         Sales Order is no longer recommended for use when importing invoices to be sent from PowerOffice Go. [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) is the preferred data object to be used.
[Type](GoApi.Import.Import.Type.md)|Gets or sets the [ImportType](GoApi.Import.ImportType.md) .

### Constructors
Name | Description
:----|:------------
[Import()](GoApi.Import.Import.Import__.md)|Initializes a new instance of the [Import](GoApi.Import.Import.md) class.



