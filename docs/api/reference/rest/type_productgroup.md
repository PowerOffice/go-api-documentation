
ProductGroup (ProductGroup)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Code|string|Gets or sets the code of the product group. This is a unique identification of the group.
CostPrice|number|Gets or sets the default cost price for products in this product group.
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this product group.
Description|string|Gets or sets the description.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
LastChanged|Date|Gets the last changed date.
Name|string|Gets or sets the product group name.
SalesAccount|number|Gets or sets the code of the default [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) for products in this product group.
SalesAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for det sales account.
SalesPrice|number|Gets or sets the default sales price exempt value added tax (VAT) for products in this product group.
Type|[ProductType](Type_ProductType.md)|Gets or sets the default product type for products in this product group.
Unit|string|Gets or sets the default Oasis compatible unit-of-measure code. for products in this product group.
VatExemptSalesAccount|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that will be used for posting the revenue from the product group when the invoice is sent if the customer is exempt VAT (Value added tax), or the invoice line on the invoice with a product in the product group has ExemptVat set to true.     The alternative sales account will be used for posting the revenue from a product in the product group when the invoice is sent if the customer is exempt vat, or the invoice line has ExemptVat set to true. The usual application in Go is that the alternative sales account is used for vat free sales with code 5. The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product group.
VatExemptSalesAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for det sales vat example sales account.
