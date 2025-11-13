
JournalEntryVoucher.IsSubmittedForApproval
================
**Namespace:** GoApi.JournalEntry

Gets whether the voucher was submitted for approval. Will only contain a value in the response when saving a new JournalEntryVoucher with the flag GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval set to true and contains information whether the voucher was submitted or not. If the voucher failed to submit, the GoApi.JournalEntry.JournalEntryVoucher.SubmitForApprovalErrorMessage will contain the reason why the submission failed.

### Syntax
```csharp
	public Nullable<System.bool> IsSubmittedForApproval { get; internal set; }
```

### Type

System.Nullable&lt;System.bool&gt;



