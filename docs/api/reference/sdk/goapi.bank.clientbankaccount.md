
ClientBankAccount
================

ClientBankAccount representing a bank account on the client in PowerOffice Go.


### Properties
Name | Description
:----|:------------
[BankName](GoApi.Bank.ClientBankAccount.BankName.md)|Gets or sets the name of the bank.
[BicSwift](GoApi.Bank.ClientBankAccount.BicSwift.md)|Gets or sets the bic swift.
[Code](GoApi.Bank.ClientBankAccount.Code.md)|Gets or sets the bank account code. This property is required when creating new client bank accounts, and must contain a valid bank account code.
[CountryCode](GoApi.Bank.ClientBankAccount.CountryCode.md)|Gets or sets the ISO 3166-1 alfa-2 country code that this client bank account is located.
[CurrencyCode](GoApi.Bank.ClientBankAccount.CurrencyCode.md)|Gets or sets the ISO 4217 currency code on this client bank account.
[GeneralLedgerAccountAgricultureDepartment](GoApi.Bank.ClientBankAccount.GeneralLedgerAccountAgricultureDepartment.md)|Gets the general ledger account agriculture department
[GeneralLedgerAccountCode](GoApi.Bank.ClientBankAccount.GeneralLedgerAccountCode.md)|Gets or sets the code of the underlying [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) .
[HasIncomingPaymentService](GoApi.Bank.ClientBankAccount.HasIncomingPaymentService.md)|Gets a value indicating whether this instance has an incoming payment service.
[HasOutgoingPaymentService](GoApi.Bank.ClientBankAccount.HasOutgoingPaymentService.md)|Gets a value indicating whether this instance has an outgoing payment service (remittance service).
[Id](GoApi.Bank.ClientBankAccount.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[IsClientTrustAccount](GoApi.Bank.ClientBankAccount.IsClientTrustAccount.md)|Gets or sets a value indicating whether this bank account is a account that contain client trust funds.     Client trust accounts are accounts that where for instance, realtors or lawyers, handles their clients' money.
[IsCurrentAccount](GoApi.Bank.ClientBankAccount.IsCurrentAccount.md)|Gets a value indicating whether bank account is the clients current account/operating account (Norwegian: driftskonto).     The current account is the bank account where the most of the day-to-day liquidity goes through.     Invoices billed from the client have the current account as the bank account that the invoice should be paid too.

### Constructors
Name | Description
:----|:------------
[ClientBankAccount()](GoApi.Bank.ClientBankAccount.ClientBankAccount__.md)|



