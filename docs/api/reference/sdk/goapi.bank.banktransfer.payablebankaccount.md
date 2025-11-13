
BankTransfer.PayableBankAccount
================
**Namespace:** GoApi.Bank

Gets or sets the account code of the payable bank account (Bank account transferred from). This property is required when creating new bank transfers.     There must exist an [ClientBankAccount](GoApi.Bank.ClientBankAccount.md) with the code provided on this property before payments can be made from the bank account.

### Syntax
```csharp
	public string PayableBankAccount { get; set; }
```

### Type

string



