
SalaryLine
================

SalaryLine representing a imported salary line to be added to a payroll.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Payroll.SalaryLine.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Account](GoApi.Payroll.SalaryLine.Account.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) , or [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) , [Employee](GoApi.Party.Employee.md) if this entry should generate a sub ledger entry.     Optional field to override what account this salary line should be posted on.     If not provided, the account on the [PayItem](GoApi.Payroll.PayItem.md) will be used.
[AccountAgricultureDepartment](GoApi.Payroll.SalaryLine.AccountAgricultureDepartment.md)|The agriculture department for the account on the salary line
[Amount](GoApi.Payroll.SalaryLine.Amount.md)|Gets or sets the amount.
[CarRegistrationNo](GoApi.Payroll.SalaryLine.CarRegistrationNo.md)|Gets or sets the car registration number.
[Comment](GoApi.Payroll.SalaryLine.Comment.md)|Gets or sets additional comment to be shown on the payslip for this salary line.
[DepartmentCode](GoApi.Payroll.SalaryLine.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md)
[EmployeeCode](GoApi.Payroll.SalaryLine.EmployeeCode.md)|Gets or sets the code of the [Employee](GoApi.Party.Employee.md) that this salary line is for.
[ExternalImportReference](GoApi.Payroll.SalaryLine.ExternalImportReference.md)|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check salary lines. Must be a unique value for a given client. Max length is 50 characters. If not set, duplicate check is not performed.
[IsDeletedByUser](GoApi.Payroll.SalaryLine.IsDeletedByUser.md)|Flag indicating whether a instance has been deleted by a user in PowerOffice Go.
[IsLocked](GoApi.Payroll.SalaryLine.IsLocked.md)|Gets a value indicating whether this instance is locked.     Salary lines that have been added to a payroll in Go will have this property set as true, and cannot be altered further.
[OppositeAccount](GoApi.Payroll.SalaryLine.OppositeAccount.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) , or [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) , [Employee](GoApi.Party.Employee.md) if this entry should generate a sub ledger entry.     Optional field to override what opposite account this salary line should be posted on.     If not provided, the account on the [PayItem](GoApi.Payroll.PayItem.md) will be used.
[OppositeAccountAgricultureDepartment](GoApi.Payroll.SalaryLine.OppositeAccountAgricultureDepartment.md)|The agriculture department for the opposite account on the salary line
[PayItemCode](GoApi.Payroll.SalaryLine.PayItemCode.md)|Gets or sets code of the [PayItem](GoApi.Payroll.PayItem.md)
[ProjectCode](GoApi.Payroll.SalaryLine.ProjectCode.md)|Gets or sets code of the [Project](GoApi.Projects.Project.md) .
[Quantity](GoApi.Payroll.SalaryLine.Quantity.md)|Gets or sets the quantity.
[Rate](GoApi.Payroll.SalaryLine.Rate.md)|Gets or sets the rate.
[VatCode](GoApi.Payroll.SalaryLine.VatCode.md)|Gets or sets code of the [VatCode](GoApi.Dimension.VatCode.md) to be used on the salary line.     Can be specified for instance when the PayItem on the salary line is of type GoApi.Payroll.PayItemProcessingType.ExpenseRefund to specify the Vat Code.

### Constructors
Name | Description
:----|:------------
[SalaryLine()](GoApi.Payroll.SalaryLine.SalaryLine__.md)|



