
Employee
================

Class representing an Employee.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Party.Party.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Code](GoApi.Party.Party.Code.md)|Gets or sets the code.
[ContactGroups](GoApi.Party.Party.ContactGroups.md)|Gets or sets the contact groups. This collection will contain the names of all the [ContactGroup](GoApi.Party.ContactGroup.md) the party is associated with.     If the collection is provided a contact group that does not exist, the contact group will be created when saving.
[CreatedDate](GoApi.Party.Party.CreatedDate.md)|Gets the creation date.
[CreatedFromImportJournalId](GoApi.Party.Party.CreatedFromImportJournalId.md)|Gets the if of the [Import](GoApi.Import.Import.md) that created this party.
[DateOfBirth](GoApi.Party.Party.DateOfBirth.md)|Gets or sets the date of birth.
[DepartmentCode](GoApi.Party.Employee.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) this employee belongs to.
[EmailAddress](GoApi.Party.Party.EmailAddress.md)|Gets or sets the email address.
[EmployeeCreatedDate](GoApi.Party.Employee.EmployeeCreatedDate.md)|Gets date when contact first became a employee
[EndDate](GoApi.Party.Employee.EndDate.md)|Gets or sets the end date.
[ExpenseBankAccountCode](GoApi.Party.Employee.ExpenseBankAccountCode.md)|Gets or sets the expense bank account code     Saving the employee entity will fail if the [PartyBankAccount](GoApi.Party.PartyBankAccount.md) with given code does not exist on the employee.
[ExternalCode](GoApi.Party.Party.ExternalCode.md)|Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.
[ExternalImportReference](GoApi.Party.Party.ExternalImportReference.md)|Gets or sets an external import reference that is unique within the account type (Customer, Supplier, Employee).     It can be edited by any integration - at any time.     Max length is 50 characters.
[FirstName](GoApi.Party.Party.FirstName.md)|Gets or sets the first name.
[Gender](GoApi.Party.Employee.Gender.md)|Gets or sets the gender of the employee. Valid inputs; 0, (Unspecified) 1, (Male) and 2 (Female).     Requires Social Security Number privilege to retreive, and will return "hidden" (-1) if queried without this privilege. The privilege must be granted by the API team.
[HiredDate](GoApi.Party.Employee.HiredDate.md)|Gets or sets the hired date.
[HourlyCost](GoApi.Party.Employee.HourlyCost.md)|OBSOLETE - Gets or sets the hourly cost as used by the time tracking system. Use HourlyRates collection to add, update and delete.
[HourlyRate](GoApi.Party.Employee.HourlyRate.md)|OBSOLETE - Gets or sets the hourly rate on this employee to use when billing time. Use HourlyRates collection to add, update and delete.
[HourlyRates](GoApi.Party.Employee.HourlyRates.md)|Contains a collection of [EmployeeTimeHourlyRates](GoApi.Party.EmployeeTimeHourlyRates.md) .         To add a new hourlyRate, create and add a new EmployeeTimeHourlyRates with wanted values without setting the Id.         To update an hourlyRate, add an EmployeeTimeHourlyRates with a valid Id and set the new values.         To delete an hourlyRate, add an EmployeeTimeHourlyRates with a valid Id and set IsDeleted=true.
[InternationalIdCountryCode](GoApi.Party.Party.InternationalIdCountryCode.md)|Gets or sets the international ID country code. Country code is given in ISO 3166-1 alfa-2 standard (Two characters).
[InternationalIdNumber](GoApi.Party.Party.InternationalIdNumber.md)|Gets or sets the international ID number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
[InternationalIdType](GoApi.Party.Party.InternationalIdType.md)|Gets or sets the international ID type.
[IsArchived](GoApi.Party.Party.IsArchived.md)|Gets or sets a value indicating whether this party is archived (is inactive)
[JobTitle](GoApi.Party.Employee.JobTitle.md)|Gets or sets the job title.
[LastChanged](GoApi.Party.Party.LastChanged.md)|Gets the last changed date.
[LastName](GoApi.Party.Party.LastName.md)|Gets or sets the last name.
[LocationCode](GoApi.Party.Employee.LocationCode.md)|Gets or sets the code of the [Location](GoApi.Projects.Location.md) this employee works at.
[MailAddress](GoApi.Party.Party.MailAddress.md)|Gets or sets the mail/postal address.
[ManagerEmployeeCode](GoApi.Party.Employee.ManagerEmployeeCode.md)|Gets or sets the code of the Employee that is the manager of this employee.
[NationalityCountryCode](GoApi.Party.Employee.NationalityCountryCode.md)|Gets or sets the nationality country code.
[PayrollBankAccountCode](GoApi.Party.Employee.PayrollBankAccountCode.md)|Gets or sets the payroll bank account code.     Saving the employee entity will fail if the [PartyBankAccount](GoApi.Party.PartyBankAccount.md) with given code does not exist on the employee.
[PayrollEmailAddress](GoApi.Party.Employee.PayrollEmailAddress.md)|Gets or sets the payroll e-mail address used for delivery of the payslip.
[PhoneNumber](GoApi.Party.Party.PhoneNumber.md)|Gets or sets the phone number.
[ReportInternationalId](GoApi.Party.Party.ReportInternationalId.md)|Gets or sets a value indicating whether International ID should be reported to Altinn.
[SocialSecurityNumber](GoApi.Party.Party.SocialSecurityNumber.md)|Sets the social security number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
[StartDate](GoApi.Party.Employee.StartDate.md)|Gets or sets the start date.
[StreetAddress](GoApi.Party.Party.StreetAddress.md)|OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.
[StreetAddresses](GoApi.Party.Party.StreetAddresses.md)|Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.
[SubledgerNumberSeriesId](GoApi.Party.Party.SubledgerNumberSeriesId.md)|Sets the id to the [SubledgerNumberSeries](GoApi.AccountingSettings.SubledgerNumberSeries.md) the party should be applied to when creating it.

### Constructors
Name | Description
:----|:------------
[Employee()](GoApi.Party.Employee.Employee__.md)|



