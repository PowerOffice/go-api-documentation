
BankTransferStatus
================

Enum BankTransferStatus containing the current status of a [BankTransfer](GoApi.Bank.BankTransfer.md) .

### Fields
Name |Value | Description
:----|:-----|:-----------
AwaitingAuthorization|0|The bank transfer is created, but not yet authorized by a user in PowerOffice Go.
Authorized|1|The bank transfer is authorized by a user and is awaiting remittance.
Completed|2|The bank transfer is completed.
Deleted|10|The bank transfer is deleted by a user.
Failed|99|The payment failed.


### Constructors
Name | Description
:----|:------------
[BankTransferStatus()](GoApi.Bank.BankTransferStatus.BankTransferStatus__.md)|



