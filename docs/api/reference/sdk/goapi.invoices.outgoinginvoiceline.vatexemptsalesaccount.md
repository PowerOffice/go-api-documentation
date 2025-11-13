
OutgoingInvoiceLine.VatExemptSalesAccount
================
**Namespace:** GoApi.Invoices

Gets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT.     This applies to all outgoing invoices with OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .     Lines on invoices that are posted (has OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Sent or GoApi.Invoices.OutgoingInvoiceStatus.Paid .), this property will contain the actual account that was used to post the revenue.

### Syntax
```csharp
	public Nullable<System.long> VatExemptSalesAccount { get; internal set; }
```

### Type

System.Nullable&lt;System.long&gt;



