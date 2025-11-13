
SubledgerNumberSeries (SubledgerNumberSeries)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
FromInclusive|number|The minimum number sub ledger accounts in this number series can have.
GeneralLedgerAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets the agriculture department of the underlying [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that accounting entries posted on a sub ledger account in this number series is posted on. Will only have value on clients that are agriculture clients.
GeneralLedgerAccountCode|number|Gets the code of the underlying [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that accounting entries posted on a sub ledger account in this number series is posted on.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsClientTrust|boolean|Gets a value indicating whether this number series is used by accounts that contain client trust funds.     Client trust accounts are accounts that where for instance, realtors or lawyers, handles their clients' money.
IsDefault|boolean|Gets a value indicating whether this instance is the default number series for that subledger NumberSeriesType.
Name|string|Gets the name of the number series.
ToInclusive|number|The maximum number sub ledger accounts in this number series can have.
Type|[SubledgerNumberSeriesType](Type_SubledgerNumberSeriesType.md)|Gets the type indicating what kind of sub ledger accounts are contained in the number series.
