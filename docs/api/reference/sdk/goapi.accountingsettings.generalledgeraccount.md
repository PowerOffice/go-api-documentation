
GeneralLedgerAccount
================

GeneralLedgerAccount representing an account on the general ledger of the client (Norwegian: Hovedbokskonto).


### Properties
Name | Description
:----|:------------
[Id](GoApi.AccountingSettings.GeneralLedgerAccount.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[AgricultureDepartment](GoApi.AccountingSettings.GeneralLedgerAccount.AgricultureDepartment.md)|Gets or sets the agriculture department to the account. If the client is an agriculture client, the account code is no longer unique and must be combined with agriculture department.
[Code](GoApi.AccountingSettings.GeneralLedgerAccount.Code.md)|Gets or sets the code. This is a required property when creating new general ledger accounts and the value has to be in the range 1000-9999.
[CreatedFromImportJournalId](GoApi.AccountingSettings.GeneralLedgerAccount.CreatedFromImportJournalId.md)|Gets the created from import journal identifier. If the account was created from an import, this property will contain the ID of the [Import](GoApi.Import.Import.md) that created this account.
[CurrencyCode](GoApi.AccountingSettings.GeneralLedgerAccount.CurrencyCode.md)|Gets or sets the currency code.
[DepartmentCode](GoApi.AccountingSettings.GeneralLedgerAccount.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) associated with this account.
[IsActive](GoApi.AccountingSettings.GeneralLedgerAccount.IsActive.md)|Gets or sets a value indicating whether this instance is active. Accounts that are not active will not be shown to users.
[IsActivityRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsActivityRequired.md)|Gets or sets a value indicating whether [Activity](GoApi.TimeTracking.Activity.md) is required when posting an accounting entry on this account.
[IsAgricultureProductRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsAgricultureProductRequired.md)|Gets or sets a value indicating whether agriculture product is required when posting an accounting entry on this account.
[IsDepartmentRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsDepartmentRequired.md)|Gets or sets a value indicating whether [Department](GoApi.Dimension.Department.md) is required when posting an accounting entry on this account.
[IsDim1Required](GoApi.AccountingSettings.GeneralLedgerAccount.IsDim1Required.md)|Gets or sets a value indicating whether dim1 is required when posting an accounting entry on this account.
[IsDim2Required](GoApi.AccountingSettings.GeneralLedgerAccount.IsDim2Required.md)|Gets or sets a value indicating whether dim2 is required when posting an accounting entry on this account.
[IsDim3Required](GoApi.AccountingSettings.GeneralLedgerAccount.IsDim3Required.md)|Gets or sets a value indicating whether dim3 is required when posting an accounting entry on this account.
[IsEnterpriseRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsEnterpriseRequired.md)|Gets or sets a value indicating whether Enterprise is required when posting an accounting entry on this account.
[IsFixedAssetsRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsFixedAssetsRequired.md)|Gets or sets a value indicating whether fixed assets is required when posting an accounting entry on this account.
[IsLocationRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsLocationRequired.md)|Gets or sets a value indicating whether [Activity](GoApi.TimeTracking.Activity.md) is required when posting an accounting entry on this account.
[IsProductRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsProductRequired.md)|Gets or sets a value indicating whether [Product](GoApi.Products.Product.md) is required when posting an accounting entry on this account.
[IsProjectRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsProjectRequired.md)|Gets or sets a value indicating whether [Project](GoApi.Projects.Project.md) is required when posting an accounting entry on this account.
[IsQuantity2Required](GoApi.AccountingSettings.GeneralLedgerAccount.IsQuantity2Required.md)|Gets or sets a value indicating whether quantity is required when posting an accounting entry on this account.
[IsQuantityRequired](GoApi.AccountingSettings.GeneralLedgerAccount.IsQuantityRequired.md)|Gets or sets a value indicating whether quantity is required when posting an accounting entry on this account.
[IsVatCodeLockedAfterPosting](GoApi.AccountingSettings.GeneralLedgerAccount.IsVatCodeLockedAfterPosting.md)|Gets or sets a value indicating whether vat code is locked after posting an accounting entry to this account.
[LastChanged](GoApi.AccountingSettings.GeneralLedgerAccount.LastChanged.md)|Gets the last changed date.
[Name](GoApi.AccountingSettings.GeneralLedgerAccount.Name.md)|Gets or sets the name. Required property when creating new general ledger accounts.
[ProjectCode](GoApi.AccountingSettings.GeneralLedgerAccount.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) associated with this account.
[Unit1](GoApi.AccountingSettings.GeneralLedgerAccount.Unit1.md)|Gets or sets the primary unit of measure ( [UnitOfMeasureCode](GoApi.Common.UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 .
[Unit2](GoApi.AccountingSettings.GeneralLedgerAccount.Unit2.md)|Gets or sets the secondary unit of measure ( [UnitOfMeasureCode](GoApi.Common.UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 .
[VatCode](GoApi.AccountingSettings.GeneralLedgerAccount.VatCode.md)|Gets or sets the code of the default [VatCode](GoApi.Dimension.VatCode.md) that should be used on this account. (Norwegian: MVA-kode)
[VatReturnSpecification](GoApi.AccountingSettings.GeneralLedgerAccount.VatReturnSpecification.md)|Gets or sets the vat return specification

### Constructors
Name | Description
:----|:------------
[GeneralLedgerAccount()](GoApi.AccountingSettings.GeneralLedgerAccount.GeneralLedgerAccount__.md)|



