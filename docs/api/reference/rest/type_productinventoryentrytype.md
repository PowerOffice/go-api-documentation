
ProductInventoryEntryType (number (Enum))
================


### Fields
Name |Value | Description
:----|:-----|:-----------
None|0|Unknown/none
Sales|1|This entry is for when an invoice or credit note sent to a customer.
VoucherPostingService|2|Voucher with lines with product dimension posted through Voucher Posting Service
StockTaking|3|This entry is of type stock taking (NO: Varetelling)
Correction|4|This entry is of type correction, created when a correction voucher corrects something directly without going through voucher posting service.
Reversal|5|This entry is from a correction or reversal voucher for all accounting entries that has flag IsReversal
Deletion|6|This entry is from a correction that deletes old accounting entries
Api|7|This entry is from when entity has been created by an external integration using the poweroffice api

