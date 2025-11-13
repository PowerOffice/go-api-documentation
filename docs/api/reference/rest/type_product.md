
Product (Product)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AvailableStock|number|Gets the number of products available. This is the GoApi.Products.Product.ProductsOnHand reduced by the amount of products added to order lines that is yet to be billed.
Code|string|Gets or sets the code. This code is an unique identification of the product.
CostPrice|number|Gets or sets the cost price of the product.
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this product.
Description|string|Gets or sets the description.
Gtin|string|Gets or sets the GTIN (Global trade item number).
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this product is active.
LastChanged|Date|Gets the last changed date.
Name|string|Gets or sets the name of the product.
ProductGroupId|number|Gets or sets the identifier of the [ProductGroup](Type_ProductGroup.md) that this product belongs in.
ProductsOnHand|number|Gets or sets the number of products on hand (total currently in stock).
ProductsOnHandLastChanged|Date|Gets the last products on hand changed date.
SalesAccount|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that is used as sales account when invoicing this product.
SalesAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for det sales account.
SalesPrice|number|Gets or sets the sales price of the product exclusive Value Added Tax (VAT).
Type|[ProductType](Type_ProductType.md)|Gets or sets the type of the product. Products can either be a GoApi.Products.ProductType.Product or a GoApi.Products.ProductType.Service
Unit|string|OBSOLETE - Gets or sets the Oasis compatible unit-of-measure code. This property is marked obsolete. Use GoApi.Products.Product.UnitOfMeasureCode instead when creating or updating a product.
UnitOfMeasureCode|[UnitOfMeasureCode](Type_UnitOfMeasureCode.md)|Gets or sets the unit of measure ( [UnitOfMeasureCode](Type_UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code.         If the unit of measure was saved using GoApi.Products.Product.Unit , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.Products.Product.Unit .
VatCode|string|Gets the code of the [VatCode](Type_VatCode.md) used when billing the product. If not present, get the from the product group this product is in.
VatExampleSalesAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for det sales vat example sales account.
VatExemptSalesAccount|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT (Value added tax), or the invoice line on the invoice with the product has ExemptVat set to true.     The alternative sales account will be used for posting the revenue from the product when the invoice is sent if the customer is exempt vat, or the line has ExemptVat set to true.     The usual application in Go is that the alternative sales account is used for vat free sales with code 5.     The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product.     ///
