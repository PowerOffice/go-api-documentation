
ImportLine
================

ImportLine representing an import Line for posted vouchers.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Import.ImportLine.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[AccountNumber](GoApi.Import.ImportLine.AccountNumber.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) to post on.
[AgricultureDepartment](GoApi.Import.ImportLine.AgricultureDepartment.md)|Gets or sets the agriculture department to the account. If the client is an agriculture client, the account code is no longer unique and must be combined with agriculture department.     Defaults to the client's default agriculture department if not provided and the client is an agriculture client for most accounts. Some balance accounts defaults to finance as agriculture department.
[Amount](GoApi.Import.ImportLine.Amount.md)|Gets or sets the total posted amount for this import line. Positive lines will result in a debit entry and negative lines will result in a credit entry.         The sum of Amount must be equal to 0 when ImportLines are grouped by document number and posting date.         The Amount is in the client's local currency, meaning the currency used on the general ledger of the client.
[Cid](GoApi.Import.ImportLine.Cid.md)|Gets or sets the CID number (Norwegian: KID).
[ContractNo](GoApi.Import.ImportLine.ContractNo.md)|Gets or sets the Contract Number of an incoming/outgoing Invoices or Credit Notes.     This value can be put on sub ledger entries (lines with CustomerNo and SupplierNo).
[CurrencyAmount](GoApi.Import.ImportLine.CurrencyAmount.md)|Gets or sets the amount in the currency provided.
[CurrencyCode](GoApi.Import.ImportLine.CurrencyCode.md)|Gets or sets the currency code.
[CustomerCode](GoApi.Import.ImportLine.CustomerCode.md)|Gets or sets code of the [Customer](GoApi.Party.Customer.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
[CustomMatchingReference](GoApi.Import.ImportLine.CustomMatchingReference.md)|Gets or sets the custom matching reference. This value can be put on sub ledger entries (lines with CustomerNo, SupplierNo and EmployeeNo).     Lines with this value set will be matched with other entries with same CustomMatchingReference after the import is complete.
[DeliveryDate](GoApi.Import.ImportLine.DeliveryDate.md)|Gets or sets the delivery date.
[DepartmentCode](GoApi.Import.ImportLine.DepartmentCode.md)|Gets or sets code of the [Department](GoApi.Dimension.Department.md) used as dimension on the accounting entry.
[Description](GoApi.Import.ImportLine.Description.md)|Gets or sets the description.
[Dim1Code](GoApi.Import.ImportLine.Dim1Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 1 this line is for.
[Dim2Code](GoApi.Import.ImportLine.Dim2Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 2 this line is for.
[Dim3Code](GoApi.Import.ImportLine.Dim3Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 3 this line is for.
[Discount](GoApi.Import.ImportLine.Discount.md)|Gets or sets the discount as percentage. i.e. 25% discount on this line will have 25.0000 as value.
[DocumentDate](GoApi.Import.ImportLine.DocumentDate.md)|Gets or sets the document date (voucher date).
[DocumentNumber](GoApi.Import.ImportLine.DocumentNumber.md)|Gets or sets the document number (Voucher number). All import lines with equal number will be on the same voucher in PowerOffice Go.
[DueDate](GoApi.Import.ImportLine.DueDate.md)|Gets or sets the due date.
[EmployeeCode](GoApi.Import.ImportLine.EmployeeCode.md)|Gets or sets code of the [Employee](GoApi.Party.Employee.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
[InvoiceNo](GoApi.Import.ImportLine.InvoiceNo.md)|Gets or sets the invoice number.
[LocationCode](GoApi.Import.ImportLine.LocationCode.md)|Gets the code of the [Location](GoApi.Projects.Location.md) this line is for.
[PostingDate](GoApi.Import.ImportLine.PostingDate.md)|Gets or sets the posting date / accrual date.
[ProductCode](GoApi.Import.ImportLine.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) .
[ProjectCode](GoApi.Import.ImportLine.ProjectCode.md)|Gets or sets code of the [Project](GoApi.Projects.Project.md) used as dimension on the accounting entry.
[PurchaseOrderNo](GoApi.Import.ImportLine.PurchaseOrderNo.md)|Gets or sets the purchase order no.
[Quantity](GoApi.Import.ImportLine.Quantity.md)|Gets or sets the quantity.
[Reference](GoApi.Import.ImportLine.Reference.md)|Gets or sets the reference.
[SaftBatchId](GoApi.Import.ImportLine.SaftBatchId.md)|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
[SaftSourceId](GoApi.Import.ImportLine.SaftSourceId.md)|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
[SupplierCode](GoApi.Import.ImportLine.SupplierCode.md)|Gets or sets code of the [Supplier](GoApi.Party.Supplier.md) to post on. GoApi.Import.ImportLine.AccountNumber will be ignored on entries posted on a sub ledger account.
[VatCode](GoApi.Import.ImportLine.VatCode.md)|Gets or sets the code of the [VatCode](GoApi.Dimension.VatCode.md) .
[VatReturnSpecification](GoApi.Import.ImportLine.VatReturnSpecification.md)|Gets or sets the vat return specification.

### Constructors
Name | Description
:----|:------------
[ImportLine()](GoApi.Import.ImportLine.ImportLine__.md)|



