
Go.BankTransfer
================
**Namespace:** GoApi

Service to query, create and delete [BankTransfer](GoApi.Bank.BankTransfer.md) .         A bank transfer is representing a transaction of money from one of the client's bank accounts to another bank account.         Creating a new bank transfer  will add a payment that must be authorized by a user in PowerOffice Go.          Status will be update on bank transfers after the authorization is done.         A bank transfer can not be edited after creation. If there was something wrong with the bank transfer, it has to be deleted and recreated.

### Syntax
```csharp
	public BankTransferService BankTransfer { get; }
```

### Type

[BankTransferService](GoApi.Bank.BankTransferService.md)



