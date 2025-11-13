
RecurringInvoiceDetailsService
================

Service for retrieving, manipulating and deleting [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) .



### Constructors
Name | Description
:----|:------------
[RecurringInvoiceDetailsService(IAuthorization authorization)](GoApi.Invoices.RecurringInvoiceDetailsService.RecurringInvoiceDetailsService_IAuthorization_authorization_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[RecurringInvoiceDetailsService(IAuthorization authorization, Host host)](GoApi.Invoices.RecurringInvoiceDetailsService.RecurringInvoiceDetailsService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(RecurringInvoice entity)](GoApi.Invoices.RecurringInvoiceDetailsService.Delete_RecurringInvoice_entity_.md)|Deletes [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) . Id must be provided on the invoice when deleting.
[Get(Guid id)](GoApi.Invoices.RecurringInvoiceDetailsService.Get_Guid_id_.md)|Get a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) by its Id.
[GetNotes(Guid voucherId)](GoApi.Invoices.RecurringInvoiceDetailsService.GetNotes_Guid_voucherId_.md)|Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) by the invoice id.
[Save(RecurringInvoice entity)](GoApi.Invoices.RecurringInvoiceDetailsService.Save_RecurringInvoice_entity_.md)|Saves the specified [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) .
[SaveNote(VoucherNote entity)](GoApi.Invoices.RecurringInvoiceDetailsService.SaveNote_VoucherNote_entity_.md)|Saves a [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) . Note that all with access to invoices can access the notes.


