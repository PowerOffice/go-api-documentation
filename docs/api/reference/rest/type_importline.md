
ImportLine (ImportLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountNumber|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) to post on.
AgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the agriculture department to the account. If the client is an agriculture client, the account code is no longer unique and must be combined with agriculture department.     Defaults to the client's default agriculture department if not provided and the client is an agriculture client for most accounts. Some balance accounts defaults to finance as agriculture department.
Amount|number|Gets or sets the total posted amount for this import line. Positive lines will result in a debit entry and negative lines will result in a credit entry.         The sum of Amount must be equal to 0 when ImportLines are grouped by document number and posting date.         The Amount is in the client's local currency, meaning the currency used on the general ledger of the client.
Cid|string|Gets or sets the CID number (Norwegian: KID).
ContractNo|string|Gets or sets the Contract Number of an incoming/outgoing Invoices or Credit Notes.     This value can be put on sub ledger entries (lines with CustomerNo and SupplierNo).
CurrencyAmount|number|Gets or sets the amount in the currency provided.
CurrencyCode|string|Gets or sets the currency code.
CustomerCode|number|Gets or sets code of the [Customer](Type_Customer.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
CustomMatchingReference|string|Gets or sets the custom matching reference. This value can be put on sub ledger entries (lines with CustomerNo, SupplierNo and EmployeeNo).     Lines with this value set will be matched with other entries with same CustomMatchingReference after the import is complete.
DeliveryDate|Date|Gets or sets the delivery date.
DepartmentCode|string|Gets or sets code of the [Department](Type_Department.md) used as dimension on the accounting entry.
Description|string|Gets or sets the description.
Dim1Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 1 this line is for.
Dim2Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 2 this line is for.
Dim3Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 3 this line is for.
Discount|number|Gets or sets the discount as percentage. i.e. 25% discount on this line will have 25.0000 as value.
DocumentDate|Date|Gets or sets the document date (voucher date).
DocumentNumber|number|Gets or sets the document number (Voucher number). All import lines with equal number will be on the same voucher in PowerOffice Go.
DueDate|Date|Gets or sets the due date.
EmployeeCode|number|Gets or sets code of the [Employee](Type_Employee.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InvoiceNo|string|Gets or sets the invoice number.
LocationCode|string|Gets the code of the [Location](Type_Location.md) this line is for.
PostingDate|Date|Gets or sets the posting date / accrual date.
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) .
ProjectCode|string|Gets or sets code of the [Project](Type_Project.md) used as dimension on the accounting entry.
PurchaseOrderNo|string|Gets or sets the purchase order no.
Quantity|number|Gets or sets the quantity.
Reference|string|Gets or sets the reference.
SaftBatchId|string|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
SaftSourceId|string|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
SupplierCode|number|Gets or sets code of the [Supplier](Type_Supplier.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
VatCode|string|Gets or sets the code of the [VatCode](Type_VatCode.md) .
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the vat return specification.
