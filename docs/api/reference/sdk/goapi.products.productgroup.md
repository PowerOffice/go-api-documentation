
ProductGroup
================

ProductGroup representing a group for products. Many of the properties on the product group will be inherited by products in this group.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Products.ProductGroup.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Code](GoApi.Products.ProductGroup.Code.md)|Gets or sets the code of the product group. This is a unique identification of the group.
[CostPrice](GoApi.Products.ProductGroup.CostPrice.md)|Gets or sets the default cost price for products in this product group.
[CreatedFromImportJournalId](GoApi.Products.ProductGroup.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this product group.
[Description](GoApi.Products.ProductGroup.Description.md)|Gets or sets the description.
[LastChanged](GoApi.Products.ProductGroup.LastChanged.md)|Gets the last changed date.
[Name](GoApi.Products.ProductGroup.Name.md)|Gets or sets the product group name.
[SalesAccount](GoApi.Products.ProductGroup.SalesAccount.md)|Gets or sets the code of the default [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) for products in this product group.
[SalesAccountAgricultureDepartment](GoApi.Products.ProductGroup.SalesAccountAgricultureDepartment.md)|The agriculture department for det sales account.
[SalesPrice](GoApi.Products.ProductGroup.SalesPrice.md)|Gets or sets the default sales price exempt value added tax (VAT) for products in this product group.
[Type](GoApi.Products.ProductGroup.Type.md)|Gets or sets the default product type for products in this product group.
[Unit](GoApi.Products.ProductGroup.Unit.md)|Gets or sets the default Oasis compatible unit-of-measure code. for products in this product group.
[VatExemptSalesAccount](GoApi.Products.ProductGroup.VatExemptSalesAccount.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product group when the invoice is sent if the customer is exempt VAT (Value added tax), or the invoice line on the invoice with a product in the product group has ExemptVat set to true.     The alternative sales account will be used for posting the revenue from a product in the product group when the invoice is sent if the customer is exempt vat, or the invoice line has ExemptVat set to true. The usual application in Go is that the alternative sales account is used for vat free sales with code 5. The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product group.
[VatExemptSalesAccountAgricultureDepartment](GoApi.Products.ProductGroup.VatExemptSalesAccountAgricultureDepartment.md)|The agriculture department for det sales vat example sales account.

### Constructors
Name | Description
:----|:------------
[ProductGroup()](GoApi.Products.ProductGroup.ProductGroup__.md)|



