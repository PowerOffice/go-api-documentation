
Client (Client)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
DefaultAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The default agriculture department on the client, will only have a value on clients that have GoApi.Client.Client.IsAgricultureClient set to true.
EmailAddress|string|Gets or sets the email address.
FinancialYearEndMonth|[Months](Type_Months.md)|Gets the end month for the accounting period.
Id|string (Guid)|Gets the id of the client.
IsAgricultureClient|boolean|Whether this client is an agriculture client and therefore uses NIBIO's agricultural chart of accounts requiring agricultural department on it's accounts.
IsVatCompensationEnabled|boolean|Gets information whether this client is set up to enable VAT compensation (norwegian: merverdiavgiftskompensasjon)
IsVatRegistered|boolean|Gets information whether this client is registered for Value Added Tax (VAT). (norwegian: mva-registrert)         If IsVatRegistered is false, vat is not be applied to outgoing invoices.
LastChanged|Date|Gets the last changed date.
LegalName|string|Gets or sets the legal name.
LockDate|Date|Gets the lock date on the client. It's not possible to create accounting entries on this date or any previous date on this client.
MailAddress|[Address](Type_Address.md)|Gets or sets the mail/postal address.
Name|string|Gets or sets the name of the client.
PhoneNumber|string|Gets or sets the phone number.
SalesAccountCode|number|Gets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) of that is used as the default sales account on the client.
StreetAddress|[Address](Type_Address.md)|Gets or sets the street address.
VatExemptSalesAccountCode|number|Gets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that is the default account used for sales that is exempt Value Added Tax (VAT) (norwegian: untatt merverdiavgift).
VatNumber|string|Gets or sets the vat number (Organization number).
VatPeriod|[VatPeriod](Type_VatPeriod.md)|Gets the specified Value Added Tax period on this client. The VAT period states how often VAT is reported to the government from this client.
WebsiteUrl|string|Gets or sets the website URL.
