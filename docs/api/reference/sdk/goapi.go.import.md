
Go.Import
================
**Namespace:** GoApi

ImportService providing methods for importing data ( [Import](GoApi.Import.Import.md) ) on the client.         To add data by using [Import](GoApi.Import.Import.md) to PowerOffice Go, the integration first has to upload the import through the GoApi.Import.ImportService.Save(GoApi.Import.Import) / GoApi.Import.ImportService.SaveAsync(GoApi.Import.Import) method.         After the upload is completed and validated, the integration can add the data through the GoApi.Import.ImportService.Post(GoApi.Import.Import,GoApi.Import.ImportPostOptions) method.         To check the status of the [Import](GoApi.Import.Import.md) , the GoApi.Import.ImportService.Status(GoApi.Import.Import) method should be used.                  N.B.: We strongly recommend using one of the Voucher services ( [BankJournalVoucherService](GoApi.Voucher.BankJournalVoucherService.md) , [CashJournalVoucherService](GoApi.Voucher.CashJournalVoucherService.md) , [ExpenseVoucherService](GoApi.Voucher.ExpenseVoucherService.md) , [IncomingInvoiceVoucherService](GoApi.Voucher.IncomingInvoiceVoucherService.md) , [ManualJournalVoucherService](GoApi.Voucher.ManualJournalVoucherService.md) , [OutgoingInvoiceVoucherService](GoApi.Voucher.OutgoingInvoiceVoucherService.md) , [PayrollJournalVoucherService](GoApi.Voucher.PayrollJournalVoucherService.md) or [YearEndJournalVoucherService](GoApi.Voucher.YearEndJournalVoucherService.md) ) for the creation of posted Vouchers in PowerOffice Go through the API.         If the desire is to make invoices that should be delivered by PowerOffice Go through the API, the [OutgoingInvoiceService](GoApi.Invoices.OutgoingInvoiceService.md) is recommended.

### Syntax
```csharp
	public ImportService Import { get; }
```

### Type

[ImportService](GoApi.Import.ImportService.md)



