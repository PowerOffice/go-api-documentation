
Go.PaymentTerms
================
**Namespace:** GoApi

Service used to query, update and delete [PaymentTerm](GoApi.Invoices.PaymentTerm.md) . A payment term is the number of days from a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) is sent until it's due.     If a payment term is default, it cannot be deleted. In this case another payment term must be set to default before delete can be done.

### Syntax
```csharp
	public PaymentTermsService PaymentTerms { get; }
```

### Type

[PaymentTermsService](GoApi.Invoices.PaymentTermsService.md)



