
Product.VatExemptSalesAccount
================
**Namespace:** GoApi.Products

Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT (Value added tax), or the invoice line on the invoice with the product has ExemptVat set to true.     The alternative sales account will be used for posting the revenue from the product when the invoice is sent if the customer is exempt vat, or the line has ExemptVat set to true.     The usual application in Go is that the alternative sales account is used for vat free sales with code 5.     The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product.     ///

### Syntax
```csharp
	public Nullable<System.long> VatExemptSalesAccount { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



