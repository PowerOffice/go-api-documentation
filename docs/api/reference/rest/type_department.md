
Department (Department)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Code|string|Gets or sets the code. This code must be unique for each department.
CreatedFromImportJournalId|string (Guid)|Gets the created from import journal identifier. If the department was created from an import, this property will contain the ID of the [Import](Type_Import.md) that created this account.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this instance is active.
LastChanged|Date|Gets the last changed date.
ManagerCode|number|Gets or sets the [Employee](Type_Employee.md) code of the manager on this department.     There must exist an [Employee](Type_Employee.md) with the code provided to set it as manager code.
Name|string|Gets or sets the name of the department.
