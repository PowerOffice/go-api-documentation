
Employee (Employee)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Code|number|Gets or sets the code.
ContactGroups|string|Gets or sets the contact groups. This collection will contain the names of all the [ContactGroup](Type_ContactGroup.md) the party is associated with.     If the collection is provided a contact group that does not exist, the contact group will be created when saving.
CreatedDate|Date|Gets the creation date.
CreatedFromImportJournalId|string (Guid)|Gets the if of the [Import](Type_Import.md) that created this party.
DateOfBirth|Date|Gets or sets the date of birth.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) this employee belongs to.
EmailAddress|string|Gets or sets the email address.
EmployeeCreatedDate|Date|Gets date when contact first became a employee
EndDate|Date|Gets or sets the end date.
ExpenseBankAccountCode|string|Gets or sets the expense bank account code     Saving the employee entity will fail if the [PartyBankAccount](Type_PartyBankAccount.md) with given code does not exist on the employee.
ExternalCode|number|Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.
ExternalImportReference|string|Gets or sets an external import reference that is unique within the account type (Customer, Supplier, Employee).     It can be edited by any integration - at any time.     Max length is 50 characters.
FirstName|string|Gets or sets the first name.
Gender|[Gender](Type_Gender.md)|Gets or sets the gender of the employee. Valid inputs; 0, (Unspecified) 1, (Male) and 2 (Female).     Requires Social Security Number privilege to retreive, and will return "hidden" (-1) if queried without this privilege. The privilege must be granted by the API team.
HiredDate|Date|Gets or sets the hired date.
HourlyCost|number|OBSOLETE - Gets or sets the hourly cost as used by the time tracking system. Use HourlyRates collection to add, update and delete.
HourlyRate|number|OBSOLETE - Gets or sets the hourly rate on this employee to use when billing time. Use HourlyRates collection to add, update and delete.
HourlyRates|[EmployeeTimeHourlyRates](Type_EmployeeTimeHourlyRates.md)|Contains a collection of [EmployeeTimeHourlyRates](Type_EmployeeTimeHourlyRates.md) .         To add a new hourlyRate, create and add a new EmployeeTimeHourlyRates with wanted values without setting the Id.         To update an hourlyRate, add an EmployeeTimeHourlyRates with a valid Id and set the new values.         To delete an hourlyRate, add an EmployeeTimeHourlyRates with a valid Id and set IsDeleted=true.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InternationalIdCountryCode|string|Gets or sets the international ID country code. Country code is given in ISO 3166-1 alfa-2 standard (Two characters).
InternationalIdNumber|string|Gets or sets the international ID number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
InternationalIdType|[InternationalIdType](Type_InternationalIdType.md)|Gets or sets the international ID type.
IsArchived|boolean|Gets or sets a value indicating whether this party is archived (is inactive)
JobTitle|string|Gets or sets the job title.
LastChanged|Date|Gets the last changed date.
LastName|string|Gets or sets the last name.
LocationCode|string|Gets or sets the code of the [Location](Type_Location.md) this employee works at.
MailAddress|[Address](Type_Address.md)|Gets or sets the mail/postal address.
ManagerEmployeeCode|number|Gets or sets the code of the Employee that is the manager of this employee.
NationalityCountryCode|string|Gets or sets the nationality country code.
PayrollBankAccountCode|string|Gets or sets the payroll bank account code.     Saving the employee entity will fail if the [PartyBankAccount](Type_PartyBankAccount.md) with given code does not exist on the employee.
PayrollEmailAddress|string|Gets or sets the payroll e-mail address used for delivery of the payslip.
PhoneNumber|string|Gets or sets the phone number.
ReportInternationalId|boolean|Gets or sets a value indicating whether International ID should be reported to Altinn.
SocialSecurityNumber|string|Sets the social security number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
StartDate|Date|Gets or sets the start date.
StreetAddress|[Address](Type_Address.md)|OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.
StreetAddresses|[Address](Type_Address.md)|Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.
SubledgerNumberSeriesId|string (Guid)|Sets the id to the [SubledgerNumberSeries](Type_SubledgerNumberSeries.md) the party should be applied to when creating it.
