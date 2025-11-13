
BankTransfer.ReceivableBankAccountBankCode
================
**Namespace:** GoApi.Bank

Gets or sets the receivable bank account bank code.     If the transfer is international, it's highly recommended that GoApi.Bank.BankTransfer.ReceivableBankAccountBicSwift , or this bank code depending on the receiver's country, is provided since the transaction fee from the bank is increased when this is not provided.

### Syntax
```csharp
	public string ReceivableBankAccountBankCode { get; set; }
```

### Type

string



