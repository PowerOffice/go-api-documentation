# Changelog
This file contains the full changelog of the PowerOffice Go API since the first release on the 26th of november 2015. All version numbers corresponds with the nuget release version, and the release dates are written with a norwegian date format (dd.MM.yyyy).

### 3.00.0 (01.12.2025)
- Added .NET 8.0 support via multi-targeting (net472;netstandard2.0;net8.0)
- Replaced System.Web.HttpUtility with cross-platform alternatives
- GeneralLedgerAccount: Added IsEnterpriseRequired, IsFixedAssetsRequired, IsQuantityRequired, IsQuantity2Required, IsProductRequired, IsAgricultureProductRequired, IsActivityRequired, IsLocationRequired, IsDim1Required, IsDim2Required and IsDim3Required

### 2.58.0 (24.01.2024):
- AccrualBase: Added ResultAccountAgricultureDepartment and BalancingAccountAgricultureDepartment
- JournalEntryVoucherLine: Added Quantity2
- AccountTransaction: Added AgricultureDepartment

### 2.57.0 (10.01.2024):
- SalaryLine: Added OppositeAccountAgricultureDepartment and AccountAgricultureDepartment
- Product: Added SalesAccountAgricultureDepartment and VatExampleSalesAccountAgricultureDepartment
- Supplier: Added StandardGeneralLedgerAccountAgricultureDepartment
- BugdetLineItem: Added AccountAgricultureDepartment
- BankTransfer: Added BalancingAccountAgricultureDepartment
- ClientBankAccount: Added GeneralLedgerAccountAgricultureDepartment
- AccountTransaction: Added Quantity2

### 2.56.0 (05.01.2024):
- GeneralLedgerAccount: Added Unit1 and Unit2
- JournalEntryVoucher: Added DebitAgricultureDepartment and CreditAgricultureDepartment to JournalEntryVoucherLine
- VoucherServices: Added AgricultureDepartment to lines

### 2.55.0 (20.12.2023):
- TrialBalance: Support for agriculture clients by adding AgricultureDepartment and splitting balances by department

### 2.54.0 (14.12.2023):
Various changes to support agriculture clients:
- Client: Added IsAgricultureClient and DefaultAgricultureDepartment
- GeneralLedgerAccount: Added AgricultureDepartment
- SubledgerNumberSeries: Added GeneralLedgerAccountAgricultureDepartment
- ImportLine: Added AgricultureDepartment

### 2.53.0 (06.12.2023):
- Added 1 new enum to UnitOfMeasureCode. (FOT)

### 2.52.0 (29.11.2023):
- Added 5 new enums to UnitOfMeasureCode. (P1, MFU, KMK, LM3, FM3)

### 2.51.0 (22.11.2023):
- Added 21 new enums to UnitOfMeasureCode. (MMT, DAA, H18, MLT, HLT, DLT, AK, XCR, E14, MJ, J57, XJG, XCT, XSA, XTU, WEE, XCA, XCN, NAR, M4, XVQ)

### 2.50.0 (23.08.2023):
- CustomerLedgerEntry: Added ReversedVoucherNo, CorrectionOfVoucherNo and IsReversed
- SupplierLedgerEntry: Added ReversedVoucherNo, CorrectionOfVoucherNo and IsReversed

### 2.49.0 (31.05.2023):
- Project: Added DenyTimeTracking.

### 2.48.0 (25.05.2023):
- JournalEntryVoucher: Added flag SubmitForApproval that can be used to try to auto submit incoming invoices / credit notes to approval.
- ImportLine: Added Dim1Code, Dim2Code, Dim3Code and LocationCode

### 2.47.0 (02.02.2023):
- Fixed failing CustomDimensionDefinition endpoint. Endpoint documentation is also updated.

### 2.46.0 (23.12.2022):
- Project: Exposed CreatedDate.

### 2.45.0 (13.12.2022):
- AccountTransaction: Added IsNoteMainEntry

### 2.44.0 (06.12.2022):
- TimeTransaction: Added ProjectCategoryName (Used in TimeTransactionsController)

### 2.43.0 (17.11.2022):
- Fixed bug in GoApi-nuget where token was not refreshed when there was less than 30 seconds left before token expiry.

### 2.42.0 (02.11.2022):
- JournalEntryVoucher: Exposed PayOut and PaymentDate. Only relevant for SupplierInvoice-, SupplierCreditNote- and Expense-JournalEntryVoucherTypes.

### 2.41.0 (04.10.2022):
- AccountTransaction: Added CorrectionOfVoucherNo and IsReversed

### 2.40.0 (22.09.2022):
- TimeTransactions: Added BreakDurationHours to report. 

### 2.39.0 (07.09.2022):
- TimeTrackingEntry: Added BreakTime property.

### 2.38.0 (17.08.2022):
- OutgoingInvoice Service: Added possibility to set "-1" (No Department/Project) on DepartmentCode and ProjectCode both in the head (OutgoingInvoice) and in OutgoingInvoiceLines. This can be used to avoid that department-/project-code is inherited from head to OutgoingInvoiceLines.
- JournalEntryVoucher: Added ProductCode, Quantity and Accrual on JournalEntryVoucherLine

### 2.37.0 (06.07.2022):
- Customer, Supplier and Employee: Fixed bug where SubledgerNumberSeriesId was not set.
- JournalEntryVoucher: Fixed bug where Comment was not set.

### 2.36.0 (29.06.2022):
- Import: Added a ExternalImportReference property. Can be used to correlate/duplicate check vouchers.

### 2.35.0 (09.06.2022):
- DebtCollectionInvoiceMatch: Added PaidFromAccount (Gets the account code the OCR payment was paid from. Only present on OCR vouchers).
- CustomerLedgerEntry: Added PaidFromAccount (Gets the account code the OCR payment was paid from. Only present on OCR vouchers).

### 2.34.0 (25.05.2022):
- Bugfix: Removed duplicate headers in requests when using custom header
- Employee/Supplier/Customer: ExternalImportReference can now be edited by anyone - at any time, not just the client or integration that created the object.

### 2.33.0 (11.05.2022):
- Customer/Supplier: Exposed IsActive. Use this property to see if a contact is currently a Customer and/or Supplier.

### 2.32.0 (04.05.2022):
- PayItem: Added QuantityAndFixedRateReportingZeroAsQuantity (14) to PayItemProcessingType enum.
- Quality: Added KeyAccountManagerCode to AssignmentAgreement.

### 2.31.0 (21.04.2022):
- Customer and Supplier: IsPerson is now nullable.
- Customer, Supplier and Employee: IsArchived, ReportInternationalId, InternationalIdType and SubledgerNumberSeriesId is now nullable. Get method for SubledgerNumberSeriesId has also been removed since property is only used when creating new entities.
- SupplierLedger: Supplier-object is now deprecated, only returns Id, Code and Name properties. Use Supplier endpoint to get complete object.
- CustomerLedger: Customer-object is now deprecated, only returns Id, Code and Name properties. Use Customer endpoint to get complete object.
- InvoiceJournal: Customer-object is now deprecated, only returns Id, Code and Name properties. Product-object is also deprecated and will only return Id, Code, Name, Type and LastChanged properties. Use the appropriate endpoints to get the complete object.
- SupplierLedger/CustomerLedger: Exposed IsWriteOff.

### 2.30.0 (06.04.2022):
- OutgoingInvoice: Exposed InvoiceNo as a number to allow filtering. Same value as DocumentNo which is a string.
- OutgoingInvoiceListItem: Exposed InvoiceNo as a number to allow filtering. Same value as DocumentNo which is a string.
- AccountTransaction: Exposed ReversedVoucherNo. Returns VoucherNo of the voucher that was reversed.

### 2.29.0 (24.03.2022):
- TimeTracking.Activity: Fixed a bug where requesting activity by ID with REST failed.
- TimeTracking.Activity: Added two new properties; RequireProject and RequireExternalComment
- New CustomDimensionDefinitionService and CustomDimensionValueService and exposed Dim1Code, Dim2Code and Dim3Code in Voucher, VoucherLine, OutgoingInvoice and OutgoingInvoiceLine
- DiscountPercent on Customer, OutgoingInvoiceLine, OutgoingInvoiceVoucherLine: Now allowing to add a premium in percent of the sales price (usually markup) by having negative number.

### 2.28.0 (09.03.2022):
- OutgoingInvoice: Added SentDate and VoucherNo. SentDate represents the date the invoice was sent from Go. VoucherNo gets the invoice number.
- OutgoingInvoiceListItem: Added SentDate and VoucherNo. SentDate represents the date the invoice was sent from Go. VoucherNo gets the invoice number.
- Employee: Can set and update Gender.
- JournalEntryVoucher: Set default CreditVatCode and DebitVatCode for applicable account if custom VatCode is not provided.
- PayItem: Exposed Id.
- ProjectActivity: Exposed Name of activity.

### 2.27.0 (08.02.2022):
- Customer: Added UseInvoiceFee. Default true. Is only used if InvoiceFee is set in Invoice Settings on Client.
- Employee: Added ManagerEmployeeCode. Can set and update manager on Employee with this code.
- Employee: Added Gender. Can get gender of employee. Requires SSN privilege to expose this property.

### 2.26.1 (21.12.2021):
- IncomingInvoiceVoucherLine: Added CustomMatchingReference. Voucher lines with this value can be matched with other entries with same CustomMatchingReference.

### 2.26.0 (17.12.2021):
- JournalEntryVoucher: Added optional UserComment-field to JournalEntryVoucher. Maxlength 250 characters.
- JournalEntryVoucherLine: Added DebitVatReturnSpecification and CreditVatReturnSpecification (new reportable specification in vat returns from 2022).
- Added VatReturnSpecification (new reportable specification in vat returns from 2022) to the following objects: All VoucherLine types, OutgoingInvoiceLine, ImportLine, SalesOrderLine, AccountTransaction and GeneralLedgerAccount
- AccountTransaction: Exposed VoucherDate.
- CustomerBalance (Report): Added includeOnlyOpenItems filter
- SupplierBalance (Report): Added includeOnlyOpenItems filter

### 2.25.0 (28.10.2021):
- Project: Made IsBillable boolean-property nullable to ensure correct behaviour when serializing. Integrations using the Project object in the Nuget package might have to change their code slightly to adjust this change. API clients using REST are unaffected.
- ExternalImportReference available on Customer, Supplier and Employee
- External Code is now available for ContactPerson and StreetAdresses
- New CustomerBalanceService: Gets the balance at the specified date for active customers.
- New SupplierBalanceService: Gets the balance at the specified date for active suppliers.
- Validation on External Invoice Delivery: Exception is thrown if ExternalDelivery Integration is not active on client and InvoiceDeliveryType is set to ExternalDelivery.
- FactoringInvoiceDetails: Added ProjectCode and ProjectName
- Bugfix: VatCode/{id} now works for REST-calls. An error is also given when VatCode is not found.

### 2.24.0 (13.10.2021):
- Customer: Added CreatedDate and CustomerCreatedDate.
- Supplier: Added CreatedDate and SupplierCreatedDate.
- Employee: Added CreatedDate and EmployeeCreatedDate.
- TimeTrackingEntry now allows entry overlapping midnight.
- OutgoingInvoice and OutgoingInvoiceListItem: Added DeliveryAddress1, DeliveryAddress2, DeliveryAddressZipCode, DeliveryAddressCity and DeliveryAddressCountryCode that will be populated on posted invoices.

### 2.23.0 (09.09.2021):
- AssignmentAgreement: Added AnnualStatementSystem and AnnualDispoitionsReceivedBy.
- BrandingThemeService: Implemented Get methods.

### 2.22.0 (06.07.2021):
- IncomingInvoiceVoucher: Added UpdateRemittanceInfo. Updates remittance related properties on a voucher, thus making changes to the invoice payment.
- Customer: Made boolean properties nullable to ensure correct behaviour when serializing. Integrations using the Customer object in the Nuget package might have to change their code slightly to adjust this change. API clients using REST are unaffected since the GET request wont return null.

### 2.21.0 (21.05.2021):
- Customer: Added InvoiceEmailAddressCC.
- VatCode: Added IsCustom and VatBasisRatio. Bugfix for IsActive - should now work as intended (was previously always returning true)
- Employee: Added ReportInternationalId, InternationalIdCountryCode, InternationalIdType and InternationalIdNumber.
- BankJournalVoucher: Added AutoAdjustCurrencyExchangeDifference that can be set to true to make PowerOffice Go auto adjust any currency exchange differences on the bank journal voucher.
- Voucher services: Added ExternalImportLineReference to all types of voucher lines that external integrations can use to keep track of the lines imported.

### 2.20.0 (23.03.2021):
Important notice for integrations using BasicTokenStore:
- Marked BasicTokenStore as obsolete since .NET 5.0 made BinaryFormatter serialization methods that BasicTokenStore uses obsolete and prohibited in ASP.NET Core 5.0 apps. Read more here: https://docs.microsoft.com/en-us/dotnet/core/compatibility/core-libraries/5.0/binaryformatter-serialization-obsolete
- Added BasicInMemoryTokenStore as an alternative to BasicTokenStore. This basic implementation saves token to a dictionary instead of a local file. We do recommend that integrations make their own implementation of ITokenStore that suits their environment.

Other changes:
- BlobService: Added GetVoucherDocumentationList that will retrieve all available documentation on a Voucher.
- ContactPerson: Added HasNorwegianSSN, DateOfBirth, PlaceOfBirth, Citizenship and Gender.
- ContactUltimateBeneficialOwner: Name field is now obsolete.
- Shareholder: Name field is now only valid if the shareholder is not a person.

### 2.19.0 (10.02.2021):
- CustomerLedgerEntry: Added IsCreatedByCurrentIntegration that can be used to filter by vouchers created by the integration currently querying the API.
- SupplierLedgerEntry: Added IsCreatedByCurrentIntegration that can be used to filter by vouchers created by the integration currently querying the API.
- OutgoingInvoice: Added CustomerReferenceContactPersonId

### 2.18.0 (18.12.2020):
- Activity: Added HourType, IsLockedHourType, UseEmployeeDefaultHourType and UseRegularHoursHourType
- ContactShareholders: Added FirstName and LastName
- UltimateBeneficialOwners: Added FirstName and LastName

### 2.17.0 (26.11.2020):
- HourType: Added CostPriceFactor
- FactoringInvoiceStatusRequest: Added FactoringInvoiceStatusDescription
- FactoringInvoiceDetails: Added FactoringInvoiceStatusDescription
- AccountTransction: Added CustomMatchingReference and Quantity
- CustomerLedgerEntry: Added CustomMatchingReference
- SupplierLedgerEntry: Added CustomMatchingReference
- ContactPerson: Added Address fields, SocialSecurityNumber and ResidenceCountryCode

### 2.16.0 (14.09.2020):
- TrialBalanceService: Added showOnlyTransactionsWithoutDepartment. Can be used to get all transactions without department. (will override departmentcode-filter)
- OutgoingInvoiceService: Added SendByAvtaleGiroIfPossible. Restricted Invoice-DeliveryType to Email, Efaktura, Avtalegiro and EHF. Changed default behaviour when no Invoice-DeliveryType is defined to be PdfByEmail instead of Print.
- DocumentFolder: Added HasWriteAccess. Can be used to check if client has write access on folders.
- DebtCollection: Fixed issue with IsActiveDebtCollection returning 400 BadRequest, and fixed client side parsing pure boolean results.
- Error handling: Fixed issue with synchronous methods throwing AggregateException with one inner exception instead of just throwing the inner exception.
- Error handling: Saving duplicate objects with equal ExternalImportReference now correctly returns 200 with Success false and ApiUniqueConstraint exception instead of 400 BadRequest.
- OutgoingInvoice: Added async methods for methods missing an async version of the request.

### 2.15.0 (07.07.2020):
- VoucherDocumentationService: Removed some methods on the service that was not implemented server side.
- TrialBalanceService: Added new Get() function for extracting trial balance with filtered values (Department-, Project- and Product code).
- DataService: Api requests now throw more specific exceptions: AuthorizationApiException when access was denied, and ThrottledApiException when number of requests exceed max during throttling. Both exceptions derive from ApiException.
- DebtCollectionService: Added IsActiveDebtCollection method that can be called to check whether the current integration can retrieve available invoices and create new debt collection cases.

### 2.14.0 (26.05.2020):
- New reporting service: TimeTransactions. Used to get a report of time tracking entries.
- TimeTrackingEntry: Added ExternalImportReference. When this is set, it is used to duplicate check TimeTrackingEntries. The same ExternalImportLineReference value
cannot be used for multiple TimeTrackingEntries on the same client.
- OutgoingInvoiceService: Added SendInvoice and SendInvoiceAsync functions for sending invoice.
- OutgoingInvoiceVoucher: Added ImportedOrderNo variable.
- SupplierLedgerEntry: Added SupplierCode to enable filtering by supplier

### 2.13.0 (05.05.2020):
- New service: ProductInventoryEntry. Used to get changes in inventory.
- Product: Added ProductsOnHandLastChanged
- TimeTrackingEntry: Made FromTime and ToTime setter public, making it available for use by external integrations.

### 2.12.0 (21.02.2020):
- GetAllMatchedItems method added to DebtCollectionService. Returns all matched subledgerentries with changes later than specified time.
- OurReferenceEmployeeCode added to AccountTransaction. Returns the employee code for the salesperson on the transaction.
- ContactPersonId added to Project. This makes it possible to get or set the project contact person.
- UnitOfMeasureCode Enum added to Product. Unit in Product is marked obsolete.
- UnitOfMeasureCode moved to new namespace: GoApi.Common.UnitOfMeasureCode
- ExternalImportLineReference added to OutgoingInvoiceLine. When this is set, it is used to duplicate check salesdraftlines. The same ExternalImportLineReference value
cannot be used for the same invoice.
- ExemptDebtCollection added to ExternallyDeliverableInvoiceDeliveredRequest. When this is set to true, the invoice in Go will be set on hold indefinitely.
Further handling should be performed by the external party.
- IsInvoiced on TimeTrackingEndtry is made writeable from API. When this is set to true, invoice will not be created in Go for this TimeTrackingEntry.
- IsDefault property added to SubledgerNumberSeries. Indicates if a Subledger number series is default for the specific subledger number type.
- PayrollEmailAddress added to Employee.
- Added method ForwardIncomingEhf to JournalEntryVoucherService. Is used to forward EHF invoices to Go.
- Accrual added to IncomingInvoiceVoucher and OutgoingInvoiceVoucher.
- TimeTrackingEntry updated. Added BillableHours, BillableAmount and Minutes. Hours is deprecated. FromTime and ToTime added as read only fields. Will be writeable in later version.
- New service: ClientDocumentsService. Used to administrate folders and files.
- New service: CurrencyService. Used to get available currencies in the system.
- ExceptMonths and AutoClearExclusions added to RecurringInvoice. Used to set invoice free months. AutoClearExclusion is used to clear the invoice free months after first exclusion.
- CustomerService: Added functionality to set default invoice delivery type on customer. When creating a new customer account, the default invoice delivery type will be selected if not provided via the API and if mandatory settings for that invoice delivery type is fulfilled.
If default is set to EHF, this delivery method will be selected , with fallback to Email if validation of mandatory parameters fails. If validation of mandatory parameters for Email is failing, fallback is invoice delivery type print.
- OriginalPostedAmount added to DebtCollectionInvoice. This is the original amount in the clients currency. If the invoice is in another currency than the clients currency, OriginalPostedAmount will hold the original calculated amount in the clients currency based on currency rate.
- HasVoucherDocumentation added to OutgoingInvoiceVoucher, CustomerLedgerEntry, InvoiceJournalLine and AccountTransaction. Indicates if the voucher has original documentation.
- GetVoucherDocumentation method added to BlobService. Can be used to get original voucher documentation.
- Added SaftSourceId and SaftBatchId to BankJournalVoucher, CashJournalVoucher, ExpenseVoucher, IncomingInvoiceVoucher, ManualJournalVoucher, OutgoingInvoiceVoucher, PayrollVoucher and YearEndJournalVoucher. These two properties should be set when importing batch-vouchers where you need to ensure an Audit Trail between PowerOffice Go's SAF-T export and the SAF-T export that should be created from the external system.
- Added SaftSourceId and SaftBatchId to ImportLine.
- FactoringService: Removed GET for FactoringSettings, and the FactoringSettings dataobject, since this was unwanted functionality by the factoring agencies (NB! Breaking change for those who use it).

### 2.11.0 (16.12.2019):
- UnitOfMeasureCode Enum added to OutgoingInvoiceLine. UnitOfMeasure is depricated. If both values are set, the new enum property is used.
- CustomMatchingReference added to OutgoingInvoice. Used to automatically match against other vouchers with same CustomMatching reference.
- RelatedDocumentNo added to OutgoingInvoice. Sets the related invoicenumber linking the original invoice. Can be used when creating creditnotes, in order to match the creditnote with an invoice when posted in Go.
- ExternalImportReference added to SalaryLine. Makes it possible for external systems to do duplicate checks.
- ApiUniqueConstraintException: New exception type added. Used when an unique constraint is detected when saving an entity.

### 2.10.0 (03.12.2019):
- InvoiceDebtCollectionStatus added to OutgoingInvoice, OutgoingInvoiceListItem and InvoiceJournalLine. Represents the Debt collection status in Go.
- DebtCollectionCaseStatus added to OutgoingInvoice, OutgoingInvoiceListItem and InvoiceJournalLine. Represents the status (Active, Closed) when debt collection agency has taken resposibility for the invoice.
- DebtCollectionCode added to OutgoingInvoice, OutgoingInvoiceListItem and InvoiceJournalLine. External reference set by debt collection agency when transferring the invoice to external debt collection agency.
- New service: DeliveryTermsService. Used to create, read, update and delete delivery terms.
- New service: PaymentTermsService. Used to create, read, update and delete payment terms.
- Method ClientContact[] GetContacts() added to ClientService. Returns the client contact persons.
- DueDate and VoucherDate added to OutgoingInvoice and OutgoingInvoiceListItem.
- ExpectedDueDate added to InvoiceJournalLine, OutgoingInvoice and OutgoingInvoiceListItem.
- Updated Party ContactPerson. Added properties indicating if the person is a politically exposed person (PEP) and if the person has relatives or close associates of PEP (RCA)
- Updated OutgoingInvoiceService. Added method SaveNote and GetNotes. SaveNote is used to add or update a note to an outgoing invoice. GetNotes is used  to get all notes connected to an outgoing invoice. Note that all users with access to invoices will have acces to the notes.
- Updated RecurringInvoiceService. Added method SaveNote and GetNotes. SaveNote is used to add or update a note to a recurring invoice. GetNotes is used  to get all notes connected to a recurring invoice.. Note that all users with access to invoices will have acces to the notes.
- New service: ShareHolderService. Used to access shareholders connected to customers or suppliers.
- New service: UltimateBeneficialOwnerService. Used to access UBO's connected to customers or suppliers.
- New service: QualityAssignmentService. NB: Only for internal use.
- New service: QualityDocumentationService. NB: Only for internal use.
- Changed documentation text for property VatCode in VoucherLineBase.

### 2.9.0 (28.10.2019):
- New service: BudgetService. Gets and sets budget via API.
- New service: QuoteService. Gets and sets quotes via API.
- RedirectUri added to services ClientAuthService.CreateTemporaryUrl and ClientAuthService.CreateTemporaryUrlAsync. When onboarding is finished successfully, the page is redirected to this URL. If RedirectUri  is left empty, the same view is presented as before when onboarding is finished.
- CustomerCode added to CustomerLedgerEntry. Makes it possible to filter CustomerLedger entries on CustomerCode.
- PayrollBankAccountCode and ExpenseBankAccountCode added to Employee. This makes it possible to get or set the bank accounts to be used for payroll and expenses for an employee. The bank accounts must be added to the employee first.

### 2.8.0 (09.09.2019):
- Breaking change in ExternallyDeliverableInvoiceService. Generated invoice file is made mandatory in the Delivered method in ExternallyDeliverableInvoiceService.
- DebtorEmailAddress and DebtorPhoneNumber added to FactoringInvoiceDetails.
- ExternalImportReference added to DebtCollectionInvoiceMatch and DebtCollectionInvoice.
- SubledgerNumberSeriesId added to Customer, Supplier and Employee. Makes it possible to select which number series the party should belong to.
- FinancialYearEndMonth added to Client.
- Added new data object Accrual that is used by OutgoingInvoiceLine to enable accrual of invoices.
- Added new service FinancingService. Used by invoice financing providers to get and update financing status.
- Added RetrieveClientDataFromSessionId to ClientAuthService. This is currently used by invoice financing providers to onboard integrations from Go using a temporary session id.
- HourlyCost and HourlyRate added to TimeTrackingEntry
- SalesAccount, VatExemptSalesAccount , VatCode and VatRate added to OutgoingInvoiceLine
- VatCode added to Product
- Added ContractNo to ImportLine, JournalEntryVoucher and IncomingInvoiceVoucher
- Added PurchaseOrderNo to JournalEntryVoucher and IncomingInvoiceVoucher
- Bug fix TimeTrackingEntryService: If the provided project belongs to a different customer than the provided customer in the TimeTrackingEntry, the TimeTrackingEntry was prevously stored with customer connected to the project entity. This is now changed to throw an Exception.

### 2.7.1 (27.06.2019):
- New Service: FactoringServcie, which is custom-made for factoring integrations.
- BankTransfer: Added InvoiceId and SubLedgerEntryId that can be used to make the remittances from bank transfers match with subledger entries.

### 2.7.0 (21.05.2019):
**Employee hourly rate and cost:**

Employee hourly rate and cost was reworked in PowerOffice Go that leads to some breaking changes. The employee hourly rates and cost is now replaced with a collection with a valid from date instead of single properties:
- New class EmployeeTimeHourlyRates added, and an IEnumerable of EmployeeTimeHourlyRates is added to the Employee object. To alter the hourly rate and/or hourly cost of an employee either edit the current EmployeeHourlyRates in the collection, or add a new EmployeeHourlyRates with a new ValidFromDate these rates should be valid from, and run a Save (POST) of the Employee object.
- HourlyRate and HourlyCost on Employee is now marked as Obsolete. GET requests on employee will return the current (today's) HourlyRate and HourlyCost on the Employee, while Save (POST) requests will not alter the rates.

**Better handling of duplicate Save/POST requests:**

To prevent the creation of duplicate vouchers or payments when saving, we've added the property ExternalImportReference to a few API data objects. When saving a new API object with ExternalImportReference provided, PowerOffice Go checks if there is already an object of the same type and equal reference already saved. If the object already exists, PowerOffice Go throws an exception and does not save the provided API object. API objects that now have ExternalImportReference are:
- BankTransfer
- JournalEntryVoucher
- OutgoingInvoice
- All objects extending Voucher (BankJournalVoucher, CashJournalVoucher, ExpenseVoucher, IncomingInvoiceVoucher, ManualJournalVoucher, OutgoingInvoiceVoucher, PayrollJournalVoucher and YearEndJournalVoucher)
It is also possible to query vouchers or accounting entries by ExternalImportReference in the reports:
- InvoiceJournal
- AccountTransaction
- CustomerLedger
- SupplierLedger

**Other changes:**
- New Service: VoucherDocumentationService that can be used to retrieve voucher documentation and add documentation to an imported voucher.
- OutgoingInvoice and OutgoingInvoiceListItem: Added ContactGroupId and ContactGroup.
- Project: Added FixedPrice and BillableRate.
- DebtCollectionCase: Added InvoiceLastChanged.
- DebtCollectionInvoice: Added LastReminderEmailAddress and InvoiceEmailAddress.
- SalaryLine: Added CarRegistrationNo.
- Customer: Added ReminderEmailAddress and TransferToDebtCollectionAgency.
- ContactGroupService: Added methods GetCustomers, GetEmployees and GetSuppliers that can be used to query all Customers/Employees/Suppliers that are added to a specific ContactGroup.
- VatCode: Added ValidFrom and ValidTo.
- Voucher: Added HasImportedDocumentation added to base class Voucher. This property is set to true if the voucher is imported and has documentation added by the new VoucherDocumentationService.

### 2.6.2 (08.04.2019):
**Project's budget was reworked in PowerOffice Go, leading to some breaking changes on Project in the API:**
- BudgetedRevenueBillableExpenses no longer exist on the server side. Property in the API is marked as obsolete and will no longer return anything other then null. Setting the property does nothing. Budgeted revenue billable expenses is now included in the new property BudgetedTotalRevenue.
- New property: BudgetedTotalRevenue that holds the total budgeted revenue for a project. This includes revenue from billable hours and other expenses that is being invoiced to the customer.
- New property: BudgetedCostOfGoods that holds the budgeted cost of goods from purchases.

**Other changes:**

- PartyCustomerCode and PartySupplierCode added to ContactPerson
- CustomMatchingReference added to Voucher lines of type BankJournalVoucherLine, CashJournalVoucherLine, ManualJournalVoucherLine, PayrollJournalVoucherLine and YearEndJournalVoucherLine
- CustomMatchingReference added to Vouchers of type IncomingInvoiceVoucher, OutgoingInvoiceVoucher and ExpenseVoucher


### 2.6.1 (05.03.2019):
- Added ImportedVoucherNo to Voucher.

### 2.6.0 (12.02.2019):
- Authorization, Go: Streamlined the API by adding a standardized CreateAsync factory method - marked the members that should be avoided in the future as obsolete
- Authorization: Makes it easier to write thread-safe code by allowing for individual headers for individual Authorization instances
- EndPointMode that was previously only a global variable, can now be overridden on the Go object - enabling the possibility of one solution communicating with both our production and our demo environment.
- Changed Authorization endpoint from go.poweroffice.net to api.poweroffice.net.
- Fixed potential performance issue with HttpClient being instanciated too often.
- New Service: VoucherService enabling the creation of different voucher types and posting them directly into PowerOffice Go without going through the ImportService.
- OutgoingInvoice: Added Balance
- OutgoingInvoiceListItem: Added Balance

### 2.5.0 (20.12.2018):
- Customer: Added PaymentTerms, UseFactoring, DepartmentCode, OurReferenceEmployeeCode, DeliveryTerm and other settings related to reminders
- Employee: Added HourlyCost
- ProjectTeamMember: Added BudgetHours
- Client: Added VatPeriod
- OutgoingInvoiceListItem: Added ContractNo, CustomerReference, DeliveryAddressId, DeliveryTerm and CurrencyExchangeRate
- OutgoingInvoice: Added DeliveryTerm and CurrencyExchangeRate
- Product: Added AvailableStock
- DebtCollectionInvoice: Added LastReminderSentDate, LastReminderDueDate and LastReminderVoucherType
- InvoiceJournalLine: Added Balance

### 2.4.1 (30.11.2018):
- DebtCollectionMergeCasesRequest: Added ExternalCaseUrl

### 2.4.0 (22.11.2018):
- Client: Added SalesAccountCode, VatExemptSalesAccountCode and IsVatRegistered
- TimeTrackingEntry: Added IsInvoiced and IsTransferedToPayroll
- Project: Added many more properties
- AccountTransaction: Added SubLedgerEntryId
- Fixed a bug on ImportService.SaveAsync method

### 2.3.0 (08.10.2018):
- NewService: InvoiceAttachment that can be used to get, add and delete attachments from OutgoingInvoices and RecurringInvoices
- TimeTrackingEntry: Added ExcludedFromPayroll and OutgoingInvoiceLineId
- New service: Go.PartyBankAccount to query party bank accounts without iterating customer, supplier or employee objects
- New service: Go.PartyContactPerson to query party contact persons without iterating customer or supplier objects
- ProjectActivity: Added HourlyRate
- OutgoingInvoiceLine: Added UnitCost
- DebtCollectionInvoiceMatch added IsWriteOff
- Customer/Employee/Supplier: Added LastChanged to Addresses. LastChanged on the entity will include when one of it's addresses is changed last.
- Fixed issue with DateTime that had specified DateTimeKind.Local causing offset to have effect on the Date.
- Fixed an issue with DebtCollection.GetInvoicePdf routing generation
- Fixed an issue with refresh authorization and ITokenStore.Save being called to often.

### 2.2.1 (23.08.2018):
- DebtCollectionInvoiceMatch added ImportedVoucherNo, CreatedFromImportId and VoucherId

### 2.2.0 (06.07.2018):
- Public release with support for temporary authorization urls
- JournalEntryVoucherLine added InvoiceNo
- All API services now have server side access controll implemented for each service and type of request (Get, Post, Put and Delete). This means that not every integration have access to all API services and methods. Calling an API service method that the current integration does not have permission to use will result in an ApiException with the message "Unauthorized access".

### 2.1.0 (05.06.2018):
- New Service: ExternallyDeliverableInvoice used by invoice delivery services to deliver invoices instead of sending them from PowerOffice Go
- SalaryLine: Added VatCode

### 2.0.4 (11.04.2018):
- First official version of support for multiple .NET Framework targets: .NET Standard 2.0, .NET 4.6.1 and .NET 4.5.2
- New Service: JournalEntryVoucher to create vouchers that will appear in Journal Entry.
- Service for debt collection agencies (DebtCollectionService) finalized.

### 2.0.0-beta1 (13.02.2018):
- New Service: DebtCollection to be used by debt collection agencies to manage debt collection cases
- Customer: Added ExternalCode
- Supplier: Added ExternalCode and StandardGeneralLedgerAccountCode
- Employee: Added ExternalCode
- Client: Added LockDate
- ClientBankAccount: Added IsCurrentAccount
- Project: Added ContractNo
- Removed Dependency on DotNetOAuth
- Support for multiple .NET Framework targets: .NET Standard 2.0, .NET 4.6.1 and .NET 4.5.2
- Fixed possible deadlock in http requests
- Added async methods in DataObject services base classes

### 1.7.3 (15.12.2017):
- AccountTransaction: Added ImportedVoucherNo

### 1.7.2 (14.12.2017):
- ImportFile: Added ImportFileType.NetsOcrFile adding the possibility to upload Nets OCR files to PowerOffice.

### 1.7.1 (28.11.2017):
- New Service: BrandingTheme to query branding themes on the client.
- Customer: Added InvoiceBrandingThemeCode
- Project: Added BrandingThemeCode
- OutgoingInvoice (and OutgoingInvoiceListItem): Added BrandingThemeCode
- SalesOrder: Added BrandingThemeCode

### 1.6.3 (04.10.2017):
- OutgoingInvoice: Now possible to set status to either Draft or Approved through the API.
- Customer: Added DateOfBirth and SocialSecurityCode. SocialSecurityCode is hidden when querying customers through Get.
- Supplier: Added DateOfBirth and SocialSecurityCode. SocialSecurityCode is hidden when querying suppliers through Get.

### 1.6.2 (04.10.2017):
- OutgoingInvoiceLine added flag IsDeleted that can be used to delete lines from an Invoice/RecurringInvoice calling the Save method.

### 1.6.1 (29.09.2017):
**API Support for Time:**

TimeTrackingServices is buildt up by 3 services:
- HourType: Service to query and manipulating hour types on the client.
- Activity: Service to query and manipulating activities on the client.
- TimeTrackingEntry: Service to query and manipulating time tracking entries on the client.

**Other changes:**
- New Service: GeneralLedgerAccount service to query and manipulating general ledger accounts on the client.
- New Service: SubledgerNumberSeries for querying subledger number series on the client.
- New Service: Location for querying and manipulating locations on the client.
- New Service: RecurringInvoice for querying and manipulating recurring invoices (repeated invoices) on the client.
- Support for adding, removing and editing bank accounts on parties (Customer/Supplier/Employee).
- Added CreatedFromImportJournalId on GeneraLedgerAccount, Department, Customer, Supplier, Employee, Product, ProductGroup, Project, AccountTransaction, InvoiceJournalLine, CustomerLedgerEntry, SupplierLedgerEntry to indicate witch import has created this entity.
- Added IsCreatedFromEhf on SupplierLedgerEntry and AccountTransaction.
- BlobService: New method (VoucherEhf) to get EHF documents for vouchers sent to PowerOffice Go as streams.
- Added IsOnHold, ExternalCaseNumber and LastChanged to InvoiceJournalLine
- InvoiceJournal: New method (SetExternalCaseNumber)
- ContactPerson: Added IsActive
- BankTransfer: Added ProjectCode and DepartmentCode
- Customer: Added InvoiceEmailAddress and HourlyRate
- ClientBankAccount: Added IsClientTrustAccount
- AccountTransaction: Added BankTransferId
- Project: Added LocationCode, AllowAllActivities and AllowAllEmployees
- Employee: Added LocationCode and HourlyRate
- ProjectService: Added sub-service TeamMember to add, manipulate and removing team members from projects.
- ProjectService: Added sub-service Activity to add, manipulate and removing project activities from projects.
- PayItem: Added ProcessingType
- SalaryLine: Added IsDeletedByUser flag. Lines that have been manually deleted in PowerOffice Go will have this flag set to true.
- OutgoingInvoice (and OutgoingInvoiceListItem): Added PaymentTerms

### 1.5.1 (29.06.2017):
- Added IsPerson, FirstName and LastName to Customer and Supplier
- Added DeliveryDate and PurchaseOrderNo to ImportLine and SalesOrder
- Added CustomMatchingReference on ImportLine. Can be used to match subledger (Customer, Supplier and Employee) entries when importing.
- Added DocumentNo on AccountTransaction.
- New Service: ClientBankAccountService to query, update and delete bank accounts on the client.
- New Service: BankTransferService to query, create and delete bank transfers on the client.
- Added ReminderSentDate and ReminderDueDate to InvoiceJournalLine

### 1.4.12 (22.05.2017):
- Added Id to InvoiceJournalSalesLine
- Added SortOrder to SalesOrderLine
- Added VoucherDueDate, VoucherReference, VoucherCID, VoucherCreditNoteReference and VoucherId to AccountTransaction
- Added CurrencyRate to InvoiceJournalLine

### 1.4.11 (19.04.2017):
- Fixed issue with using enum values in Where expressions

### 1.4.1 (05.04.2017):
- New Service: PayrollService. This service can be used to query pay items on Go clients, and create salary lines that will be added to next payroll.
- New Service: OutgoingInvoiceService. This service can be used to create OutgoingInvoices that will get draft status on Go. This is a reimplementation of SalesOrder import. The service can also be used to query invoices and check it's status, and edit/delete invoices that have draft status.

### 1.3.12 (24.03.2017):
- Automatic handling of API request per second limit
- BasicTokenStore is now thread safe

### 1.3.11 (21.03.2017):
- Added method to get AccountTransaction within a date without specifying account code
- Added Id and AccountCode properties to AccountTransaction

### 1.3.10 (23.02.2017):
- Fixed missing time zone offset in DateTimeOffset OData filters

### 1.3.9 (03.02.2017):
- Added ContactGroupService for querying, creating and modifying contact groups
- Customer/Employee/Supplier contact groups can now be queried and edited from Customer/Supplier/Employee service
- Fixed error with currency code not working on SalesOrder

### 1.3.8 (30.12.2016):
- Added ContactPersonId on SalesOrder import.

### 1.3.7 (27.12.2016):
- Fixed error on VatCode.Get method.

### 1.3.6 (30.11.2016):
- Added support for DateTimeOffset in OData-queries

### 1.3.4 (30.09.2016):
- Added ImportedOrderNo to InvoiceJournal and CustomerLedger.
- CustomerLedger/SupplierLedger now displays LastChanged and CreatedDate.
- Default contact person is now set on orders imported.

### 1.3.3 (21.09.2016):
- Open items for Customers/Suppliers now also displays CID on each entry

### 1.3.2 (06.09.2016):
- Open items for Customers/Suppliers with matching abilities
- It is now possible to set customers "excempt vat"

### 1.2.1 (29.06.2016):
- New report: InvoiceJournal

### 1.1.3 (15.06.2016):
- Product: Now possible to update ProductsOnHand through API.

### 1.1.2 (01.06.2016):
- Added last changed date/created date to many entities. Added InvoiceDeliveryType to Customers.

### 1.1.1.2 (18.03.2016):
- Fixed an issue with some cultures getting BadRequest.

### 1.1.1 (08.03.2016):
- Import: SalesOrderLines can now override product's price by setting SalesOrderLineUnitPrice.

### 1.1.0 (16.02.2016):
- Support for Orders
- Support for Products

### 1.0.0 (26.11.2015):
- First official release