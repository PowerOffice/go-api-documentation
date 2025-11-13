
Import
================

ImportService providing methods for importing data [Import](Type_Import.md) on the client.         To add data by using [Import](Type_Import.md) to PowerOffice Go, the integration first has to upload the import through the Go.Web.ExternalApi.Controllers.ImportController.Save(GoApi.Import.Import) method.         After the upload is completed and validated, the integration can add the data through the Go.Web.ExternalApi.Controllers.ImportController.Post(GoApi.Import.Import) method.         To check the status of the [Import](Type_Import.md) , the Go.Web.ExternalApi.Controllers.ImportController.GetImportStatus(System.Guid) method should be used.                  N.B.: If the desire is to make posted Vouchers in PowerOffice Go, we strongly recommend using one of the Voucher services ( BankJournalVoucherController , CashJournalVoucherController , ExpenseVoucherController , IncomingInvoiceVoucherController , ManualJournalVoucherController , OutgoingInvoiceVoucherController , PayrollJournalVoucherController or YearEndJournalVoucherController ).         If the desire is to make invoices that should be delivered by PowerOffice Go through the API, the OutgoingInvoiceController is recommended.

**Base Url**: `https://api.poweroffice.net/Import/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Import/](Route_GET_Import__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [Import](Type_Import.md) filtered by odata query.
[Import/](Route_POST_Import_.md)|POST|Saves the provided [Import](Type_Import.md) .         This will upload the import to PowerOffice Go and users might manually post the imports there or the integration can do this through the Go.Web.ExternalApi.Controllers.ImportController.Post(GoApi.Import.Import) method.
[Import/{id}](Route_GET_Import__id__.md)|GET|Gets the specified [Import](Type_Import.md) by its id.
[Import/{id}](Route_DELETE_Import__id__.md)|DELETE|Deletes the specified [Import](Type_Import.md) by its id.
[Import/{id}/status](Route_GET_Import__id__status_.md)|GET|Gets the [ImportStatus](Type_ImportStatus.md) by the [Import](Type_Import.md) id.
[Import/Post](Route_POST_Import_Post_.md)|POST|Imports the previously uploaded [Import](Type_Import.md) on the client.


