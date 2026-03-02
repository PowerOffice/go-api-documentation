
GeneralLedgerAccount (GeneralLedgerAccount)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the agriculture department to the account. If the client is an agriculture client, the account code is no longer unique and must be combined with agriculture department.
Code|number|Gets or sets the code. This is a required property when creating new general ledger accounts and the value has to be in the range 1000-9999.
CreatedFromImportJournalId|string (Guid)|Gets the created from import journal identifier. If the account was created from an import, this property will contain the ID of the [Import](Type_Import.md) that created this account.
CurrencyCode|string|Gets or sets the currency code.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) associated with this account.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this instance is active. Accounts that are not active will not be shown to users.
IsActivityRequired|boolean|Gets or sets a value indicating whether [Activity](Type_Activity.md) is required when posting an accounting entry on this account.
IsAgricultureProductRequired|boolean|Gets or sets a value indicating whether agriculture product is required when posting an accounting entry on this account.
IsDepartmentRequired|boolean|Gets or sets a value indicating whether [Department](Type_Department.md) is required when posting an accounting entry on this account.
IsDim1Required|boolean|Gets or sets a value indicating whether dim1 is required when posting an accounting entry on this account.
IsDim2Required|boolean|Gets or sets a value indicating whether dim2 is required when posting an accounting entry on this account.
IsDim3Required|boolean|Gets or sets a value indicating whether dim3 is required when posting an accounting entry on this account.
IsEnterpriseRequired|boolean|Gets or sets a value indicating whether Enterprise is required when posting an accounting entry on this account.
IsFixedAssetsRequired|boolean|Gets or sets a value indicating whether fixed assets is required when posting an accounting entry on this account.
IsLocationRequired|boolean|Gets or sets a value indicating whether [Activity](Type_Activity.md) is required when posting an accounting entry on this account.
IsProductRequired|boolean|Gets or sets a value indicating whether [Product](Type_Product.md) is required when posting an accounting entry on this account.
IsProjectRequired|boolean|Gets or sets a value indicating whether [Project](Type_Project.md) is required when posting an accounting entry on this account.
IsQuantity2Required|boolean|Gets or sets a value indicating whether quantity is required when posting an accounting entry on this account.
IsQuantityRequired|boolean|Gets or sets a value indicating whether quantity is required when posting an accounting entry on this account.
IsVatCodeLockedAfterPosting|boolean|Gets or sets a value indicating whether vat code is locked after posting an accounting entry to this account.
LastChanged|Date|Gets the last changed date.
Name|string|Gets or sets the name. Required property when creating new general ledger accounts. (Max length 320).
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) associated with this account.
Unit1|[UnitOfMeasureCode](Type_UnitOfMeasureCode.md)|Gets or sets the primary unit of measure ( [UnitOfMeasureCode](Type_UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 .
Unit2|[UnitOfMeasureCode](Type_UnitOfMeasureCode.md)|Gets or sets the secondary unit of measure ( [UnitOfMeasureCode](Type_UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 .
VatCode|string|Gets or sets the code of the default [VatCode](Type_VatCode.md) that should be used on this account. (Norwegian: MVA-kode)
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the vat return specification
