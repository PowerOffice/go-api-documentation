
DebtCollectionCase (DebtCollectionCase)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BalanceAgency|number|The current balance at debt collection agency
Code|string|Gets the code/case number of the debt collection case (Norwegian: Saksnummer).
ExternalCaseUrl|string|External link to this case, if any exists. This could be used as a link from PowerOffice Go to the external system.
Id|string (Guid)|Gets or sets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InvoiceLastChanged|Date|Gets the time for the latest updated invoice attached to this dept collection case.
Invoices|[DebtCollectionInvoice](Type_DebtCollectionInvoice.md)|Gets the invoices that are attached to this debt collection case.
LastChanged|Date|Gets the last changed date.
Status|[DebtCollectionCaseStatus](Type_DebtCollectionCaseStatus.md)|Gets the debt collection case status.
