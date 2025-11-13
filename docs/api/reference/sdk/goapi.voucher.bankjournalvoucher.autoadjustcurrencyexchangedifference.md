
BankJournalVoucher.AutoAdjustCurrencyExchangeDifference
================
**Namespace:** GoApi.Voucher

Bank journal voucher lines that provides InvoiceNo and posted against a sub ledger account - will use the same currency exchange rate as the sub ledger entry it's matched against.      The difference between the currency rate on the sub ledger entry matched, and the other entries, will often cause a currency loss (disagio) or a currency premium (agio) that needs to be accounted for either as a profit or an expense.      When this value is set to true, the API will add a BankJournalVoucherLine to account for the agio or disagio generated on the voucher on the agio or disagio account on the client.      This property should be used with causation since the API will calculate total debit and credit if the voucher has any lines that are in currency and invoice no is provided, and post it on the agio or disagio account of the client.      If there are any entries transferred on the API that are incorrectly not in balance, and erroneous difference will appear on the agio/disagio account.

### Syntax
```csharp
	public bool AutoAdjustCurrencyExchangeDifference { get; set; }
```

### Type

bool



