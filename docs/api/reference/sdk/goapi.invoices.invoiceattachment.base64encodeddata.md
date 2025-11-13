
InvoiceAttachment.Base64EncodedData
================
**Namespace:** GoApi.Invoices

The data file encoded using base64. This property must be provided when adding new attachments.         To reduce the payloads when calling the GET function on the endpoint working with this object, this property will be empty when calling it as an IQueryable.         To get the attachment with the attachment data - the GET by ID method on the endpoint should be used.

### Syntax
```csharp
	public string Base64EncodedData { get; set; }
```

### Type

string



