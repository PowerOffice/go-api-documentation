
BankJournalVoucher
================

Bank Journal Voucher representing a posted voucher that is of type bank journal (Norwegian: Bankbilag).     This voucher type contains transactions that are generated though activity between the client and its bank connection.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Voucher.Voucher.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[AutoAdjustCurrencyExchangeDifference](GoApi.Voucher.BankJournalVoucher.AutoAdjustCurrencyExchangeDifference.md)|Bank journal voucher lines that provides InvoiceNo and posted against a sub ledger account - will use the same currency exchange rate as the sub ledger entry it's matched against.      The difference between the currency rate on the sub ledger entry matched, and the other entries, will often cause a currency loss (disagio) or a currency premium (agio) that needs to be accounted for either as a profit or an expense.      When this value is set to true, the API will add a BankJournalVoucherLine to account for the agio or disagio generated on the voucher on the agio or disagio account on the client.      This property should be used with causation since the API will calculate total debit and credit if the voucher has any lines that are in currency and invoice no is provided, and post it on the agio or disagio account of the client.      If there are any entries transferred on the API that are incorrectly not in balance, and erroneous difference will appear on the agio/disagio account.
[CreatedDate](GoApi.Voucher.Voucher.CreatedDate.md)|Gets the created date. This value is assigned by PowerOffice Go when the voucher is posted.
[CurrencyCode](GoApi.Voucher.Voucher.CurrencyCode.md)|Gets or sets the currency code.
[DepartmentCode](GoApi.Voucher.Voucher.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .
[Description](GoApi.Voucher.BankJournalVoucher.Description.md)|Gets or sets the description.
[Dim1Code](GoApi.Voucher.Voucher.Dim1Code.md)|Gets or sets the code of the custom dimension 1.
[Dim2Code](GoApi.Voucher.Voucher.Dim2Code.md)|Gets or sets the code of the custom dimension 2.
[Dim3Code](GoApi.Voucher.Voucher.Dim3Code.md)|Gets or sets the code of the custom dimension 3.
[ExternalImportReference](GoApi.Voucher.Voucher.ExternalImportReference.md)|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
[HasImportedDocumentation](GoApi.Voucher.Voucher.HasImportedDocumentation.md)|Set to true if the voucher has [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) imported through the API.
[ImportedVoucherNo](GoApi.Voucher.Voucher.ImportedVoucherNo.md)|Gets or sets the imported Voucher number. This value can be used to set a reference from the external system creating the voucher.
[IsReversed](GoApi.Voucher.Voucher.IsReversed.md)|Gets information whether this voucher has been reversed. This can be done by the API through the Reverse method in the voucher service, or by a user through the reverse function.
[Lines](GoApi.Voucher.BankJournalVoucher.Lines.md)|Gets or sets the bank journal lines ( [BankJournalVoucherLine](GoApi.Voucher.BankJournalVoucherLine.md) ).
[LocationCode](GoApi.Voucher.Voucher.LocationCode.md)|Gets or sets the code of the location
[ProjectCode](GoApi.Voucher.Voucher.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .
[SaftBatchId](GoApi.Voucher.Voucher.SaftBatchId.md)|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
[SaftSourceId](GoApi.Voucher.Voucher.SaftSourceId.md)|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
[VoucherDate](GoApi.Voucher.Voucher.VoucherDate.md)|Gets or sets the voucher date.
[VoucherNo](GoApi.Voucher.Voucher.VoucherNo.md)|Gets the Voucher number. This value is assigned by PowerOffice Go when the voucher is posted.

### Constructors
Name | Description
:----|:------------
[BankJournalVoucher()](GoApi.Voucher.BankJournalVoucher.BankJournalVoucher__.md)|



