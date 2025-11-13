
RecurringInvoiceService
================

Service to query, create, edit and delete [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) and [RecurringInvoiceListItem](GoApi.Invoices.RecurringInvoiceListItem.md) .     Also contains methods to query and add [VoucherNote](GoApi.Invoices.VoucherNote.md) to recurring invoices.


### Properties
Name | Description
:----|:------------
[RecurringInvoiceDetails](GoApi.Invoices.RecurringInvoiceService.RecurringInvoiceDetails.md)|Gets the recurring invoice details sub-service.
[RecurringInvoiceListItem](GoApi.Invoices.RecurringInvoiceService.RecurringInvoiceListItem.md)|Gets the recurring invoice list item sub-service.

### Constructors
Name | Description
:----|:------------
[RecurringInvoiceService(IAuthorization authorization)](GoApi.Invoices.RecurringInvoiceService.RecurringInvoiceService_IAuthorization_authorization_.md)|Initializes a new instance of the [RecurringInvoiceService](GoApi.Invoices.RecurringInvoiceService.md) class.
[RecurringInvoiceService(IAuthorization authorization, Host host)](GoApi.Invoices.RecurringInvoiceService.RecurringInvoiceService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [RecurringInvoiceService](GoApi.Invoices.RecurringInvoiceService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(RecurringInvoice entity)](GoApi.Invoices.RecurringInvoiceService.Delete_RecurringInvoice_entity_.md)|Deletes [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) . Id must be provided on the OutgoingInvoice when calling this method.
[Get(Guid id)](GoApi.Invoices.RecurringInvoiceService.Get_Guid_id_.md)|Gets a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) by its Id.
[GetNotes(Guid voucherId)](GoApi.Invoices.RecurringInvoiceService.GetNotes_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) by the ID of the invoice.
[List()](GoApi.Invoices.RecurringInvoiceService.List__.md)|Query for listing all Recurring Invoices on a client as GoApi.Invoices.RecurringInvoiceService.RecurringInvoiceListItem .
[Save(RecurringInvoice entity)](GoApi.Invoices.RecurringInvoiceService.Save_RecurringInvoice_entity_.md)|Saves the specified [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) .
[SaveNote(VoucherNote note)](GoApi.Invoices.RecurringInvoiceService.SaveNote_VoucherNote_note_.md)|Saves a [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) . Note that all with access to invoices can access the notes.


