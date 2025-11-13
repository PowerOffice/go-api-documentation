
BankTransfer (BankTransfer)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Amount|number|Gets or sets the amount. This amount must be positive when creating new bank transfers.
BalancingAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets the agriculture department for the balancing account
BalancingAccountNo|number|Gets or sets the balancing account no. This is the account that will be debited when the remittance is posted and is required when creating new bank tranfers.
Cid|string|Gets or sets the cid (Norwegian: KID).
CurrencyCode|string|Gets or sets the ISO 4217 currency code.
CurrencyRegistryCode|[CurrencyRegistryCodes](Type_CurrencyRegistryCodes.md)|Gets or sets the currency registry code. Currency registry code describes the intention of the payment.
CurrencyRegistryText|string|Gets or sets the currency registry text.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) . This is the code of the department that will be posted on when the payment has been remitted.
Description|string|Gets or sets the description. This property is required when creating new bank transfers.
ExternalImportReference|string|Gets or sets an unique external import reference. Used by external systems to match bank transfers.     It can also be used to prevent the external system to create duplicate entries since it must be unique.     Max length is 50 characters.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.     Should not be provided by an external system using the PowerOffice Go API since we don't support editing BankTransfers after creation.     If a BankTransfer needs to be edited, it should be deleted before creating it again.
InternationalPaymentFeeDistribution|[InternationalPaymentFeeDistribution](Type_InternationalPaymentFeeDistribution.md)|Gets or sets the international payment fee distribution. Used to specify if the sender or receiver, or both, should bear the charges for transferring the payment internationally.
InvoiceId|string (Guid)|Gets or sets the Id of the Supplier Invoice that this bank transfer should be matched against when the remittance receipt is imported.      When creating a [BankTransfer](Type_BankTransfer.md) , you can set either this property or GoApi.Bank.BankTransfer.SubLedgerEntryId .     If GoApi.Bank.BankTransfer.SubLedgerEntryId is set, and the entry is related to a Supplier Invoice, this property will contain the ID of the SubLedgerEntry's Invoice.
IsExpress|boolean|Gets or sets a value indicating whether this instance is express. This feature can be used on international payments to speed up payment processing, but banks may take extra charges.
IsOnHold|boolean|Gets or sets a value indicating whether this instance is on hold. On hold payments must be manually set to a specific payment date before authorizing by a user in PowerOffice Go.
PayableBankAccount|string|Gets or sets the account code of the payable bank account (Bank account transferred from). This property is required when creating new bank transfers.     There must exist an [ClientBankAccount](Type_ClientBankAccount.md) with the code provided on this property before payments can be made from the bank account.
PaymentDate|Date|Gets or sets the date that this payment should be transferred on.
PaymentMessage|string|Gets or sets the payment message to receiver. This message is used when GoApi.Bank.BankTransfer.Cid is not provided.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) . This is the code of the project that will be posted on when the payment has been remitted.
ReceivableBankAccountBankCode|string|Gets or sets the receivable bank account bank code.     If the transfer is international, it's highly recommended that GoApi.Bank.BankTransfer.ReceivableBankAccountBicSwift , or this bank code depending on the receiver's country, is provided since the transaction fee from the bank is increased when this is not provided.
ReceivableBankAccountBicSwift|string|Gets or sets the receivable bank account bic swift.     If the transfer is international, it's highly recommended that Bic/Swift, or GoApi.Bank.BankTransfer.ReceivableBankAccountBankCode depending on the receiver's country, is provided since the transaction fee from the bank is increased when this is not provided.
ReceivableBankAccountCode|string|Gets or sets the receivable bank account (bank account transferred to). This property is required when creating new bank transfers.     If the transfer is international it's recommended to use IBAN number instead of bank account number.
ReceivableBankAccountCountryCode|string|Gets or sets the receivable bank account ISO 3166-1 alfa-2 country code. This property is required when creating new bank transfers.
ReceiverCountryCode|string|Gets or sets the receiver country code. This property is required when creating new bank transfers.
ReceiverName|string|Gets or sets the name of the receiver. This property is required when creating new bank transfers.
ReceiverVatNumber|string|Gets or sets the receiver vat number (Norwegian: Organisasjonsnummer).
Status|[BankTransferStatus](Type_BankTransferStatus.md)|Gets the status.
SubLedgerEntryId|number|Gets or sets the Id of the SubLedger Entry that this bank transfer should be matched against when the remittance receipt is imported.      When creating a [BankTransfer](Type_BankTransfer.md) , you can set either this property or GoApi.Bank.BankTransfer.InvoiceId .     If GoApi.Bank.BankTransfer.InvoiceId is set this property contain return the ID of the Invoice's SubLedgerEntry.
