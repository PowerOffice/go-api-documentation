
DebtCollectionCase
================

Debt collection case representing a case created by a debt collection agency for overdue invoices.


### Properties
Name | Description
:----|:------------
[Id](GoApi.DebtCollection.DebtCollectionCase.Id.md)|Gets or sets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[BalanceAgency](GoApi.DebtCollection.DebtCollectionCase.BalanceAgency.md)|The current balance at debt collection agency
[Code](GoApi.DebtCollection.DebtCollectionCase.Code.md)|Gets the code/case number of the debt collection case (Norwegian: Saksnummer).
[ExternalCaseUrl](GoApi.DebtCollection.DebtCollectionCase.ExternalCaseUrl.md)|External link to this case, if any exists. This could be used as a link from PowerOffice Go to the external system.
[InvoiceLastChanged](GoApi.DebtCollection.DebtCollectionCase.InvoiceLastChanged.md)|Gets the time for the latest updated invoice attached to this dept collection case.
[Invoices](GoApi.DebtCollection.DebtCollectionCase.Invoices.md)|Gets the invoices that are attached to this debt collection case.
[LastChanged](GoApi.DebtCollection.DebtCollectionCase.LastChanged.md)|Gets the last changed date.
[Status](GoApi.DebtCollection.DebtCollectionCase.Status.md)|Gets the debt collection case status.

### Constructors
Name | Description
:----|:------------
[DebtCollectionCase(string code, IEnumerable&lt;GoApi.DebtCollection.DebtCollectionInvoice&gt; invoices)](GoApi.DebtCollection.DebtCollectionCase.DebtCollectionCase_String_code__IEnumerable_invoices_.md)|Initializes a new instance of the [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) class.



