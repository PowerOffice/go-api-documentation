
ImportType
================

ImportType specifying the type of the [Import](GoApi.Import.Import.md) . All vouchers generated from the import will have the same voucher type as the ImportType.

### Fields
Name |Value | Description
:----|:-----|:-----------
None|0|No import type - validation value
OutgoingVoucher|1|Import containing Outgoing vouchers (Invoice / Credit note) to customers.
Payroll|3|Import containing payroll journals.
Cash|4|Import containing cash journals.
YearEnd|5|Import containing year end journals.
VoucherJournal|99|An import containing manual journals.


### Constructors
Name | Description
:----|:------------
[ImportType()](GoApi.Import.ImportType.ImportType__.md)|



