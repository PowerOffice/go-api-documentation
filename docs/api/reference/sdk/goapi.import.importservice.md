
ImportService
================

ImportService providing methods for importing data ( [Import](GoApi.Import.Import.md) ) on the client.         To add data by using [Import](GoApi.Import.Import.md) to PowerOffice Go, the integration first has to upload the import through the GoApi.Import.ImportService.Save(GoApi.Import.Import) / GoApi.Import.ImportService.SaveAsync(GoApi.Import.Import) method.         After the upload is completed and validated, the integration can add the data through the GoApi.Import.ImportService.Post(GoApi.Import.Import,GoApi.Import.ImportPostOptions) method.         To check the status of the [Import](GoApi.Import.Import.md) , the GoApi.Import.ImportService.Status(GoApi.Import.Import) method should be used.                  N.B.: We strongly recommend using one of the Voucher services ( [BankJournalVoucherService](GoApi.Voucher.BankJournalVoucherService.md) , [CashJournalVoucherService](GoApi.Voucher.CashJournalVoucherService.md) , [ExpenseVoucherService](GoApi.Voucher.ExpenseVoucherService.md) , [IncomingInvoiceVoucherService](GoApi.Voucher.IncomingInvoiceVoucherService.md) , [ManualJournalVoucherService](GoApi.Voucher.ManualJournalVoucherService.md) , [OutgoingInvoiceVoucherService](GoApi.Voucher.OutgoingInvoiceVoucherService.md) , [PayrollJournalVoucherService](GoApi.Voucher.PayrollJournalVoucherService.md) or [YearEndJournalVoucherService](GoApi.Voucher.YearEndJournalVoucherService.md) ) for the creation of posted Vouchers in PowerOffice Go through the API.         If the desire is to make invoices that should be delivered by PowerOffice Go through the API, the [OutgoingInvoiceService](GoApi.Invoices.OutgoingInvoiceService.md) is recommended.



### Constructors
Name | Description
:----|:------------
[ImportService(IAuthorization authorization)](GoApi.Import.ImportService.ImportService_IAuthorization_authorization_.md)|Initializes a new instance of the [ImportService](GoApi.Import.ImportService.md) class.
[ImportService(IAuthorization authorization, Host host)](GoApi.Import.ImportService.ImportService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ImportService](GoApi.Import.ImportService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Import entity)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.Delete_Import_entity_.md)|Delete a data object
[DeleteAsync(Import entity)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.DeleteAsync_Import_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Post(Import import, ImportPostOptions options = )](GoApi.Import.ImportService.Post_Import_import__ImportPostOptions_options____.md)|Imports the previously uploaded [Import](GoApi.Import.Import.md) on the client.
[Save(Import entity)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.Save_Import_entity_.md)|Saves the specified data object.
[Save(Import import)](GoApi.Import.ImportService.Save_Import_import_.md)|Saves the provided [Import](GoApi.Import.Import.md) .         This will upload the import to PowerOffice Go and users might manually post the imports there or the integration can do this through the GoApi.Import.ImportService.Post(GoApi.Import.Import,GoApi.Import.ImportPostOptions) method.
[SaveAsync(Import entity)](GoApi.Core.DataObjectCrudService_GoApi.Import.Import_.SaveAsync_Import_entity_.md)|Saves the specified data object.
[SaveAsync(Import import)](GoApi.Import.ImportService.SaveAsync_Import_import_.md)|Saves the provided [Import](GoApi.Import.Import.md) async.         This will upload the import to PowerOffice Go and users might manually post the imports there or the integration can do this through the GoApi.Import.ImportService.Post(GoApi.Import.Import,GoApi.Import.ImportPostOptions) method.
[Status(Import import)](GoApi.Import.ImportService.Status_Import_import_.md)|Gets the [ImportStatus](GoApi.Import.ImportStatus.md) of an [Import](GoApi.Import.Import.md) .


