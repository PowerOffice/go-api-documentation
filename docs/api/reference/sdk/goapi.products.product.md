
Product
================

Product representing a product that the client has. A product can be both a product and a service.     Required to use outgoing invoices (customer invoices) on the client.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Products.Product.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[AvailableStock](GoApi.Products.Product.AvailableStock.md)|Gets the number of products available. This is the GoApi.Products.Product.ProductsOnHand reduced by the amount of products added to order lines that is yet to be billed.
[Code](GoApi.Products.Product.Code.md)|Gets or sets the code. This code is an unique identification of the product.
[CostPrice](GoApi.Products.Product.CostPrice.md)|Gets or sets the cost price of the product.
[CreatedFromImportJournalId](GoApi.Products.Product.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this product.
[Description](GoApi.Products.Product.Description.md)|Gets or sets the description.
[Gtin](GoApi.Products.Product.Gtin.md)|Gets or sets the GTIN (Global trade item number).
[IsActive](GoApi.Products.Product.IsActive.md)|Gets or sets a value indicating whether this product is active.
[LastChanged](GoApi.Products.Product.LastChanged.md)|Gets the last changed date.
[Name](GoApi.Products.Product.Name.md)|Gets or sets the name of the product.
[ProductGroupId](GoApi.Products.Product.ProductGroupId.md)|Gets or sets the identifier of the [ProductGroup](GoApi.Products.ProductGroup.md) that this product belongs in.
[ProductsOnHand](GoApi.Products.Product.ProductsOnHand.md)|Gets or sets the number of products on hand (total currently in stock).
[ProductsOnHandLastChanged](GoApi.Products.Product.ProductsOnHandLastChanged.md)|Gets the last products on hand changed date.
[SalesAccount](GoApi.Products.Product.SalesAccount.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that is used as sales account when invoicing this product.
[SalesAccountAgricultureDepartment](GoApi.Products.Product.SalesAccountAgricultureDepartment.md)|The agriculture department for det sales account.
[SalesPrice](GoApi.Products.Product.SalesPrice.md)|Gets or sets the sales price of the product exclusive Value Added Tax (VAT).
[Type](GoApi.Products.Product.Type.md)|Gets or sets the type of the product. Products can either be a GoApi.Products.ProductType.Product or a GoApi.Products.ProductType.Service
[Unit](GoApi.Products.Product.Unit.md)|OBSOLETE - Gets or sets the Oasis compatible unit-of-measure code. This property is marked obsolete. Use GoApi.Products.Product.UnitOfMeasureCode instead when creating or updating a product.
[UnitOfMeasureCode](GoApi.Products.Product.UnitOfMeasureCode.md)|Gets or sets the unit of measure ( [UnitOfMeasureCode](GoApi.Common.UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code.         If the unit of measure was saved using GoApi.Products.Product.Unit , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.Products.Product.Unit .
[VatCode](GoApi.Products.Product.VatCode.md)|Gets the code of the [VatCode](GoApi.Dimension.VatCode.md) used when billing the product. If not present, get the from the product group this product is in.
[VatExampleSalesAccountAgricultureDepartment](GoApi.Products.Product.VatExampleSalesAccountAgricultureDepartment.md)|The agriculture department for det sales vat example sales account.
[VatExemptSalesAccount](GoApi.Products.Product.VatExemptSalesAccount.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT (Value added tax), or the invoice line on the invoice with the product has ExemptVat set to true.     The alternative sales account will be used for posting the revenue from the product when the invoice is sent if the customer is exempt vat, or the line has ExemptVat set to true.     The usual application in Go is that the alternative sales account is used for vat free sales with code 5.     The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product.     ///

### Constructors
Name | Description
:----|:------------
[Product()](GoApi.Products.Product.Product__.md)|



