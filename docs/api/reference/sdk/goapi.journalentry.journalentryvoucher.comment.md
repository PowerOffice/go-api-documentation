
JournalEntryVoucher.Comment
================
**Namespace:** GoApi.JournalEntry

Optional comment that will be shown in the journal entry history in Go. Only new vouchers will get the comment as part of the initial history. It is thus not possible to change the comment later, and it will not be returned in API-calls. Max length is 250 characters.

### Syntax
```csharp
	public string Comment { get; set; }
```

### Type

string



