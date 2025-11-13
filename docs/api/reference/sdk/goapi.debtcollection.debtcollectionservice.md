
DebtCollectionService
================

Debt collection service used to create and administer [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) .



### Constructors
Name | Description
:----|:------------
[DebtCollectionService(IAuthorization authorization)](GoApi.DebtCollection.DebtCollectionService.DebtCollectionService_IAuthorization_authorization_.md)|Initializes a new instance of the [DebtCollectionService](GoApi.DebtCollection.DebtCollectionService.md) class.
[DebtCollectionService(IAuthorization authorization, Host host)](GoApi.DebtCollection.DebtCollectionService.DebtCollectionService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DebtCollectionService](GoApi.DebtCollection.DebtCollectionService.md) class.

### Methods
Name | Description
:----|:------------
[AddInvoicesToCase(DebtCollectionAddInvoicesToCaseRequest request)](GoApi.DebtCollection.DebtCollectionService.AddInvoicesToCase_DebtCollectionAddInvoicesToCaseRequest_request_.md)|Adds a collection of invoices to a debt collection case by the debt collection case assigned id and the invoice's ids.
[CreateCase(DebtCollectionCase entity)](GoApi.DebtCollection.DebtCollectionService.CreateCase_DebtCollectionCase_entity_.md)|Saves a new debt collection case, and returns the debt collection case with an assigned id.
[Delete(Guid entityId)](GoApi.DebtCollection.DebtCollectionService.Delete_Guid_entityId_.md)|Deletes the [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) specified by Guid .         This call should be used if the debt collection agency rejects the case.
[DeleteAsync(Guid entityId)](GoApi.DebtCollection.DebtCollectionService.DeleteAsync_Guid_entityId_.md)|Deletes the [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) specified by Guid .         This call should be used if the debt collection agency rejects the case.
[Get()](GoApi.DebtCollection.DebtCollectionService.Get__.md)|Gets all debt collection cases as a Linq expression.
[GetAllMatchedItems(DateTimeOffset fromDateTime)](GoApi.DebtCollection.DebtCollectionService.GetAllMatchedItems_DateTimeOffset_fromDateTime_.md)|Gets all matched items for all debt collection invoices with last changed date later than given date and time. This will contain all payments, creditnotes and manual vouchers that is matched with the customer subledger entry on the invoices.     Only outgoing invoices with which is a debt collection case or has debt collection status other than "None" or "Draft" is returned, with corresponding matches.
[GetAvailableInvoices()](GoApi.DebtCollection.DebtCollectionService.GetAvailableInvoices__.md)|Gets the available invoices for debt collection.
[GetMatchedItems(Guid debtCollectionInvoiceId)](GoApi.DebtCollection.DebtCollectionService.GetMatchedItems_Guid_debtCollectionInvoiceId_.md)|Gets all matched items on a debt collection invoice. This will contain all payments, creditnotes and manual vouchers that is matched with the customer subledger entry on the invoice.
[GetPdf(Guid id)](GoApi.DebtCollection.DebtCollectionService.GetPdf_Guid_id_.md)|Gets the PDF for a given invoice by it's id.
[IsActiveDebtCollection()](GoApi.DebtCollection.DebtCollectionService.IsActiveDebtCollection__.md)|Gets whether new debt collection cases can be created. If false, GoApi.DebtCollection.DebtCollectionService.GetAvailableInvoices and GoApi.DebtCollection.DebtCollectionService.CreateCase(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.
[IsActiveDebtCollectionAsync()](GoApi.DebtCollection.DebtCollectionService.IsActiveDebtCollectionAsync__.md)|Gets whether new debt collection cases can be created. If false, GoApi.DebtCollection.DebtCollectionService.GetAvailableInvoices and GoApi.DebtCollection.DebtCollectionService.CreateCase(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.
[MergeCases(DebtCollectionMergeCasesRequest request)](GoApi.DebtCollection.DebtCollectionService.MergeCases_DebtCollectionMergeCasesRequest_request_.md)|Merges a collection of debt collection cases by their ids to a single debt collection case with a given code.
[UpdateStatus(DebtCollectionStatusUpdateRequest request)](GoApi.DebtCollection.DebtCollectionService.UpdateStatus_DebtCollectionStatusUpdateRequest_request_.md)|Updates a debt collection case status by it's id and a status text.      The request will by default set the status of a debt collection case to Active, but can also close or reject cases by setting flags on the request.


