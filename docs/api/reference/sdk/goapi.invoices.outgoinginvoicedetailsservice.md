
OutgoingInvoiceDetailsService
================

Service for retrieving, manipulating and deleting [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .



### Constructors
Name | Description
:----|:------------
[OutgoingInvoiceDetailsService(IAuthorization authorization)](GoApi.Invoices.OutgoingInvoiceDetailsService.OutgoingInvoiceDetailsService_IAuthorization_authorization_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[OutgoingInvoiceDetailsService(IAuthorization authorization, Host host)](GoApi.Invoices.OutgoingInvoiceDetailsService.OutgoingInvoiceDetailsService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.Delete_OutgoingInvoice_entity_.md)|Deletes an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .
[DeleteAsync(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.DeleteAsync_OutgoingInvoice_entity_.md)|Deletes an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) asynchronously.
[Get(Guid id)](GoApi.Invoices.OutgoingInvoiceDetailsService.Get_Guid_id_.md)|Get a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by its Id.
[GetAsync(Guid id)](GoApi.Invoices.OutgoingInvoiceDetailsService.GetAsync_Guid_id_.md)|Get a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) by its Id asynchronously.
[GetNotes(Guid voucherId)](GoApi.Invoices.OutgoingInvoiceDetailsService.GetNotes_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .
[GetNotesAsync(Guid voucherId)](GoApi.Invoices.OutgoingInvoiceDetailsService.GetNotesAsync_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .
[Save(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.Save_OutgoingInvoice_entity_.md)|Saves the specified [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . This is an Invoice that will be ready for sending from PowerOffice Go, either with GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .
[SaveAsync(OutgoingInvoice entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.SaveAsync_OutgoingInvoice_entity_.md)|Saves the specified [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . This is an Invoice that will be ready for sending from PowerOffice Go, either with GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .
[SaveNote(VoucherNote entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.SaveNote_VoucherNote_entity_.md)|Saves a new [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .         Note that all with access to invoices can access the notes.
[SaveNoteAsync(VoucherNote entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.SaveNoteAsync_VoucherNote_entity_.md)|Saves a new [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .         Note that all with access to invoices can access the notes.
[SendInvoice(SendInvoiceRequest entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.SendInvoice_SendInvoiceRequest_entity_.md)|Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.     Note that it's not guaranteed that the invoice will be sent although this function returns successfully. The invoice will be processed asynchronously. If any errors occur during processing, these errors will be displayed in GoApi.Invoices.OutgoingInvoice.LastErrorMessage .     Check GoApi.Invoices.OutgoingInvoice.Status to ensure that the invoice has actually been sent.
[SendInvoiceAsync(SendInvoiceRequest entity)](GoApi.Invoices.OutgoingInvoiceDetailsService.SendInvoiceAsync_SendInvoiceRequest_entity_.md)|Sends an invoice asynchronously from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.     Note that it's not guaranteed that the invoice will be sent although this function returns successfully. The invoice will be processed asynchronously. If any errors occur during processing, these errors will be displayed in GoApi.Invoices.OutgoingInvoice.LastErrorMessage .     Check GoApi.Invoices.OutgoingInvoice.Status to ensure that the invoice has actually been sent.


