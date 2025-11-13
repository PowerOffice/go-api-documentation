
SubledgerNumberSeries
================

SubledgerNumberSeries representing a number range for sub ledger accounts ( [Customer](GoApi.Party.Customer.md) / [Supplier](GoApi.Party.Supplier.md) / [Employee](GoApi.Party.Employee.md) ). (Norwegian: Reskontronummerserier)


### Properties
Name | Description
:----|:------------
[Id](GoApi.AccountingSettings.SubledgerNumberSeries.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[FromInclusive](GoApi.AccountingSettings.SubledgerNumberSeries.FromInclusive.md)|The minimum number sub ledger accounts in this number series can have.
[GeneralLedgerAccountAgricultureDepartment](GoApi.AccountingSettings.SubledgerNumberSeries.GeneralLedgerAccountAgricultureDepartment.md)|Gets the agriculture department of the underlying [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that accounting entries posted on a sub ledger account in this number series is posted on. Will only have value on clients that are agriculture clients.
[GeneralLedgerAccountCode](GoApi.AccountingSettings.SubledgerNumberSeries.GeneralLedgerAccountCode.md)|Gets the code of the underlying [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that accounting entries posted on a sub ledger account in this number series is posted on.
[IsClientTrust](GoApi.AccountingSettings.SubledgerNumberSeries.IsClientTrust.md)|Gets a value indicating whether this number series is used by accounts that contain client trust funds.     Client trust accounts are accounts that where for instance, realtors or lawyers, handles their clients' money.
[IsDefault](GoApi.AccountingSettings.SubledgerNumberSeries.IsDefault.md)|Gets a value indicating whether this instance is the default number series for that subledger NumberSeriesType.
[Name](GoApi.AccountingSettings.SubledgerNumberSeries.Name.md)|Gets the name of the number series.
[ToInclusive](GoApi.AccountingSettings.SubledgerNumberSeries.ToInclusive.md)|The maximum number sub ledger accounts in this number series can have.
[Type](GoApi.AccountingSettings.SubledgerNumberSeries.Type.md)|Gets the type indicating what kind of sub ledger accounts are contained in the number series.

### Constructors
Name | Description
:----|:------------
[SubledgerNumberSeries()](GoApi.AccountingSettings.SubledgerNumberSeries.SubledgerNumberSeries__.md)|



