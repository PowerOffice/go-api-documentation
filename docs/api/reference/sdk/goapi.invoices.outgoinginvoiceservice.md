
OutgoingInvoiceService
================

Service to query, create, edit and delete [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) and [OutgoingInvoiceListItem](GoApi.Invoices.OutgoingInvoiceListItem.md) .     Also contains methods to query and add [VoucherNote](GoApi.Invoices.VoucherNote.md) to outgoing invoices.


### Properties
Name | Description
:----|:------------
[OutgoingInvoiceDetails](GoApi.Invoices.OutgoingInvoiceService.OutgoingInvoiceDetails.md)|Gets the outgoing invoice details sub-service.
[OutgoingInvoiceListItem](GoApi.Invoices.OutgoingInvoiceService.OutgoingInvoiceListItem.md)|Gets the outgoing invoice list item sub-service.

### Constructors
Name | Description
:----|:------------
[OutgoingInvoiceService(IAuthorization authorization)](GoApi.Invoices.OutgoingInvoiceService.OutgoingInvoiceService_IAuthorization_authorization_.md)|Initializes a new instance of the [OutgoingInvoiceService](GoApi.Invoices.OutgoingInvoiceService.md) class.
[OutgoingInvoiceService(IAuthorization authorization, Host host)](GoApi.Invoices.OutgoingInvoiceService.OutgoingInvoiceService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [OutgoingInvoiceService](GoApi.Invoices.OutgoingInvoiceService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceService.Delete_OutgoingInvoice_entity_.md)|Deletes [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . Id must be provided on the OutgoingInvoice when calling this method.
[DeleteAsync(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceService.DeleteAsync_OutgoingInvoice_entity_.md)|Deletes [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) asynchronously. Id must be provided on the OutgoingInvoice when calling this method.
[Get(Guid id)](GoApi.Invoices.OutgoingInvoiceService.Get_Guid_id_.md)|Get a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by its Id.
[GetAsync(Guid id)](GoApi.Invoices.OutgoingInvoiceService.GetAsync_Guid_id_.md)|Get a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by its Id asynchronously.
[GetNotes(Guid voucherId)](GoApi.Invoices.OutgoingInvoiceService.GetNotes_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by the ID of the invoice.
[GetNotesAsync(Guid voucherId)](GoApi.Invoices.OutgoingInvoiceService.GetNotesAsync_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by the ID of the invoice.
[List()](GoApi.Invoices.OutgoingInvoiceService.List__.md)|Query for listing all outgoing invoices on a client as [OutgoingInvoiceListItem](GoApi.Invoices.OutgoingInvoiceListItem.md) .
[Save(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceService.Save_OutgoingInvoice_entity_.md)|Saves the specified [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .
[SaveAsync(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceService.SaveAsync_OutgoingInvoice_entity_.md)|Saves the specified [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) asynchronously.
[SaveNote(VoucherNote note)](GoApi.Invoices.OutgoingInvoiceService.SaveNote_VoucherNote_note_.md)|Saves a [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . Note that all with access to invoices can access the notes.
[SaveNoteAsync(VoucherNote note)](GoApi.Invoices.OutgoingInvoiceService.SaveNoteAsync_VoucherNote_note_.md)|Saves a [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . Note that all with access to invoices can access the notes.
[SendInvoice(SendInvoiceRequest sendInvoiceRequest)](GoApi.Invoices.OutgoingInvoiceService.SendInvoice_SendInvoiceRequest_sendInvoiceRequest_.md)|Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.
[SendInvoiceAsync(SendInvoiceRequest sendInvoiceRequest)](GoApi.Invoices.OutgoingInvoiceService.SendInvoiceAsync_SendInvoiceRequest_sendInvoiceRequest_.md)|Sends an invoice asynchronously from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.


