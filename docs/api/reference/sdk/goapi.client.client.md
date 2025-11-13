
Client
================

Client representing an organization using PowerOffice Go.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Client.Client.Id.md)|Gets the id of the client.
[DefaultAgricultureDepartment](GoApi.Client.Client.DefaultAgricultureDepartment.md)|The default agriculture department on the client, will only have a value on clients that have GoApi.Client.Client.IsAgricultureClient set to true.
[EmailAddress](GoApi.Client.Client.EmailAddress.md)|Gets or sets the email address.
[FinancialYearEndMonth](GoApi.Client.Client.FinancialYearEndMonth.md)|Gets the end month for the accounting period.
[IsAgricultureClient](GoApi.Client.Client.IsAgricultureClient.md)|Whether this client is an agriculture client and therefore uses NIBIO's agricultural chart of accounts requiring agricultural department on it's accounts.
[IsVatCompensationEnabled](GoApi.Client.Client.IsVatCompensationEnabled.md)|Gets information whether this client is set up to enable VAT compensation (norwegian: merverdiavgiftskompensasjon)
[IsVatRegistered](GoApi.Client.Client.IsVatRegistered.md)|Gets information whether this client is registered for Value Added Tax (VAT). (norwegian: mva-registrert)         If IsVatRegistered is false, vat is not be applied to outgoing invoices.
[LastChanged](GoApi.Client.Client.LastChanged.md)|Gets the last changed date.
[LegalName](GoApi.Client.Client.LegalName.md)|Gets or sets the legal name.
[LockDate](GoApi.Client.Client.LockDate.md)|Gets the lock date on the client. It's not possible to create accounting entries on this date or any previous date on this client.
[MailAddress](GoApi.Client.Client.MailAddress.md)|Gets or sets the mail/postal address.
[Name](GoApi.Client.Client.Name.md)|Gets or sets the name of the client.
[PhoneNumber](GoApi.Client.Client.PhoneNumber.md)|Gets or sets the phone number.
[SalesAccountCode](GoApi.Client.Client.SalesAccountCode.md)|Gets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) of that is used as the default sales account on the client.
[StreetAddress](GoApi.Client.Client.StreetAddress.md)|Gets or sets the street address.
[VatExemptSalesAccountCode](GoApi.Client.Client.VatExemptSalesAccountCode.md)|Gets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that is the default account used for sales that is exempt Value Added Tax (VAT) (norwegian: untatt merverdiavgift).
[VatNumber](GoApi.Client.Client.VatNumber.md)|Gets or sets the vat number (Organization number).
[VatPeriod](GoApi.Client.Client.VatPeriod.md)|Gets the specified Value Added Tax period on this client. The VAT period states how often VAT is reported to the government from this client.
[WebsiteUrl](GoApi.Client.Client.WebsiteUrl.md)|Gets or sets the website URL.

### Constructors
Name | Description
:----|:------------
[Client()](GoApi.Client.Client.Client__.md)|



