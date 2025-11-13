
DebtCollection
================

Debt collection service used to create and administer [DebtCollectionCase](Type_DebtCollectionCase.md) .

**Base Url**: `https://api.poweroffice.net/DebtCollection/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[DebtCollection/](Route_POST_DebtCollection_.md)|POST|Saves a new debt collection case, and returns the debt collection case with an assigned id.
[DebtCollection/](Route_GET_DebtCollection__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of debt collection cases filtered by a oData query.
[DebtCollection/{id}](Route_GET_DebtCollection__id__.md)|GET|Gets the specified debt collection case by its identifier.
[DebtCollection/{id}](Route_DELETE_DebtCollection__id__.md)|DELETE|Deletes the specified [DebtCollectionCase](Type_DebtCollectionCase.md) .         This call should be used if the debt collection agency rejects the case.
[DebtCollection/AddInvoicesToCase](Route_POST_DebtCollection_AddInvoicesToCase_.md)|POST|Adds a collection of invoices to a debt collection case by the debt collection case assigned id and the invoices ids.
[DebtCollection/GetAllMatchedItems](Route_GET_DebtCollection_GetAllMatchedItems_fromDateTime__fromDateTime_.md)?fromDateTime=&lt;fromDateTime&gt;|GET|Gets all the matched items for each invoice where changes is newer than fromDateTime.          This will contain all voucher's sub ledger entries (i.e. Payments/Creditnotes) that have been matched with the invoice's sub ledger entry.
[DebtCollection/GetInvoicePdf/{id}](Route_GET_DebtCollection_GetInvoicePdf__id__.md)|GET|Gets the PDF for an invoice by a given id.
[DebtCollection/Invoices/AvailableInvoices](Route_GET_DebtCollection_Invoices_AvailableInvoices_options__options_.md)?options=&lt;options&gt;|GET|Gets the all the available invoices for debt collection filtered by a oData query.
[DebtCollection/IsActiveDebtCollection](Route_GET_DebtCollection_IsActiveDebtCollection_.md)|GET|Gets whether new debt collection cases can be created. If false, Go.Web.ExternalApi.Controllers.DebtCollectionController.GetAvailableInvoices(ODataQueryOptions{GoApi.DebtCollection.DebtCollectionInvoice}) and Go.Web.ExternalApi.Controllers.DebtCollectionController.Save(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.
[DebtCollection/MatchedItems/{debtCollectionInvoiceId}](Route_GET_DebtCollection_MatchedItems__debtCollectionInvoiceId__.md)|GET|Gets all the matched items on a debt collection invoice by the debt collection invoice id.          This will contain all voucher's sub ledger entries (i.e. Payments/Creditnotes) that have been matched with the invoice's sub ledger entry.
[DebtCollection/MergeCases](Route_POST_DebtCollection_MergeCases_.md)|POST|Merges a collection of debt collection cases by their ids to a single debt collection case with a given code.
[DebtCollection/UpdateStatus](Route_POST_DebtCollection_UpdateStatus_.md)|POST|Updates a debt collection case status by it's id and a status text.      The request will by default set the status of a debt collection case to Active, but can also close or reject cases by setting flags on the request.


