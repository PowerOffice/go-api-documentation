
Import.SalesOrders
================
**Namespace:** GoApi.Import

Gets or sets a collection of [SalesOrder](GoApi.SalesOrders.SalesOrder.md) that should be posted. Will only be used if GoApi.Import.Import.File is not provided.         Sales Order is no longer recommended for use when importing invoices to be sent from PowerOffice Go. [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) is the preferred data object to be used.

### Syntax
```csharp
	public List<GoApi.SalesOrders.SalesOrder> SalesOrders { get; set; }
```

### Type

[List&lt;GoApi.SalesOrders.SalesOrder&gt;](GoApi.SalesOrders.SalesOrder.md)



