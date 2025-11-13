
ImportLine.Amount
================
**Namespace:** GoApi.Import

Gets or sets the total posted amount for this import line. Positive lines will result in a debit entry and negative lines will result in a credit entry.         The sum of Amount must be equal to 0 when ImportLines are grouped by document number and posting date.         The Amount is in the client's local currency, meaning the currency used on the general ledger of the client.

### Syntax
```csharp
	public Nullable<System.decimal> Amount { get; set; }
```

### Type

System.Nullable&lt;System.decimal&gt;



