
public bool SetExternalCaseNumber(Guid id, string externalCaseNumber)
=======
**Namespace:** GoApi.Reporting.InvoiceJournal

OBSOLETE - Sets the external case number.      This method is now obsolete, since we now have a specific service for debt collection ( [DebtCollectionService](GoApi.DebtCollection.DebtCollectionService.md) ).

### Syntax
```csharp
	public bool SetExternalCaseNumber(Guid id, string externalCaseNumber)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
id|Guid|The identifier.
externalCaseNumber|string|The external case number.


### Returns
Type | Description
:----|:------------
bool|*true* if update was successful, *false* otherwise.



