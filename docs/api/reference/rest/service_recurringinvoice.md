
RecurringInvoice
================

Service to query, create, edit and delete [RecurringInvoice](Type_RecurringInvoice.md) and [RecurringInvoiceListItem](Type_RecurringInvoiceListItem.md) .         Also contains methods to query and add [VoucherNote](Type_VoucherNote.md) on the recurring invoices.

**Base Url**: `https://api.poweroffice.net/RecurringInvoice/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[RecurringInvoice/](Route_POST_RecurringInvoice_.md)|POST|Creates or updates the specified [RecurringInvoice](Type_RecurringInvoice.md) .
[RecurringInvoice/{id}](Route_GET_RecurringInvoice__id__.md)|GET|Gets the specified [RecurringInvoice](Type_RecurringInvoice.md) by its identifier.
[RecurringInvoice/{id}](Route_DELETE_RecurringInvoice__id__.md)|DELETE|Deletes the specified [RecurringInvoice](Type_RecurringInvoice.md) by its identifier.
[RecurringInvoice/GetNotes/{voucherId}](Route_GET_RecurringInvoice_GetNotes__voucherId__.md)|GET|Gets all [VoucherNote](Type_VoucherNote.md) connected to an [RecurringInvoice](Type_RecurringInvoice.md) by the Recurring Invoices Id.
[RecurringInvoice/List](Route_GET_RecurringInvoice_List_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [RecurringInvoiceListItem](Type_RecurringInvoiceListItem.md) filtered by odata query. This is a lightweight version of an [RecurringInvoice](Type_RecurringInvoice.md) .
[RecurringInvoice/SaveNote](Route_POST_RecurringInvoice_SaveNote_.md)|POST|Saves a new [VoucherNote](Type_VoucherNote.md) or updates an existing note on an [RecurringInvoice](Type_RecurringInvoice.md) .         Note that all with access to invoices can access the notes.


