
SalaryLine (SalaryLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Account|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) , or [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) , [Employee](Type_Employee.md) if this entry should generate a sub ledger entry.     Optional field to override what account this salary line should be posted on.     If not provided, the account on the [PayItem](Type_PayItem.md) will be used.
AccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for the account on the salary line
Amount|number|Gets or sets the amount.
CarRegistrationNo|string|Gets or sets the car registration number.
Comment|string|Gets or sets additional comment to be shown on the payslip for this salary line.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md)
EmployeeCode|number|Gets or sets the code of the [Employee](Type_Employee.md) that this salary line is for.
ExternalImportReference|string|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check salary lines. Must be a unique value for a given client. Max length is 50 characters. If not set, duplicate check is not performed.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsDeletedByUser|boolean|Flag indicating whether a instance has been deleted by a user in PowerOffice Go.
IsLocked|boolean|Gets a value indicating whether this instance is locked.     Salary lines that have been added to a payroll in Go will have this property set as true, and cannot be altered further.
OppositeAccount|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) , or [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) , [Employee](Type_Employee.md) if this entry should generate a sub ledger entry.     Optional field to override what opposite account this salary line should be posted on.     If not provided, the account on the [PayItem](Type_PayItem.md) will be used.
OppositeAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for the opposite account on the salary line
PayItemCode|string|Gets or sets code of the [PayItem](Type_PayItem.md)
ProjectCode|string|Gets or sets code of the [Project](Type_Project.md) .
Quantity|number|Gets or sets the quantity.
Rate|number|Gets or sets the rate.
VatCode|string|Gets or sets code of the [VatCode](Type_VatCode.md) to be used on the salary line.     Can be specified for instance when the PayItem on the salary line is of type GoApi.Payroll.PayItemProcessingType.ExpenseRefund to specify the Vat Code.
