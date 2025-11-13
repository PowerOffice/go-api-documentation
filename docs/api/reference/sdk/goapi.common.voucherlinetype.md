
VoucherLineType
================

Describes the line type of outgoing vouchers.

### Fields
Name |Value | Description
:----|:-----|:-----------
Normal|0|A normal line, usually with a product
Text|1|A text line
Summary|2|A summary (subtotal) line. See also the specialized value flags below.
InvoiceFee|3|A line containing an invoice fee.
Total|4|
BasicTypeMask|65535|A mask value containing the mask to retrieve the basic line type information, removing the specialized value flags. This makes it easier     to identify the underlying line types for each of the specialized value flags. This value should never be used directly as a line type.
TotalHours|65540|A summary line providing the total number of hours registered in a voucher.


### Constructors
Name | Description
:----|:------------
[VoucherLineType()](GoApi.Common.VoucherLineType.VoucherLineType__.md)|



