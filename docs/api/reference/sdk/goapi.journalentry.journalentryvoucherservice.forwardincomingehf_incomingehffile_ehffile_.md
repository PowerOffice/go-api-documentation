
public virtual bool ForwardIncomingEhf(IncomingEhfFile ehfFile)
=======
**Namespace:** GoApi.JournalEntry

Forward incoming EHF to Go. If successful, an asynchronous message handler is initiated to try to create a journal entry voucher.

### Syntax
```csharp
	public virtual bool ForwardIncomingEhf(IncomingEhfFile ehfFile)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
ehfFile|[IncomingEhfFile](GoApi.JournalEntry.IncomingEhfFile.md)|


### Returns
Type | Description
:----|:------------
bool|



