
OutgoingInvoice
================

Service to query, create, edit and delete [OutgoingInvoice](Type_OutgoingInvoice.md) and [OutgoingInvoiceListItem](Type_OutgoingInvoiceListItem.md) .     Also contains methods to query and add [VoucherNote](Type_VoucherNote.md) on the invoices.

**Base Url**: `https://api.poweroffice.net/OutgoingInvoice/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[OutgoingInvoice/](Route_POST_OutgoingInvoice_.md)|POST|Creates or updates the specified [OutgoingInvoice](Type_OutgoingInvoice.md) .
[OutgoingInvoice/{id}](Route_GET_OutgoingInvoice__id__.md)|GET|Gets the specified [OutgoingInvoice](Type_OutgoingInvoice.md) by its identifier.
[OutgoingInvoice/{id}](Route_DELETE_OutgoingInvoice__id__.md)|DELETE|Deletes the specified [OutgoingInvoice](Type_OutgoingInvoice.md) by its identifier.
[OutgoingInvoice/GetNotes/{voucherId}](Route_GET_OutgoingInvoice_GetNotes__voucherId__.md)|GET|Gets all [VoucherNote](Type_VoucherNote.md) connected to an [OutgoingInvoice](Type_OutgoingInvoice.md) by the Outgoing Invoices Id.
[OutgoingInvoice/List](Route_GET_OutgoingInvoice_List_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [OutgoingInvoiceListItem](Type_OutgoingInvoiceListItem.md) filtered by odata query. This is a lightweight version of an [OutgoingInvoice](Type_OutgoingInvoice.md) .
[OutgoingInvoice/SaveNote](Route_POST_OutgoingInvoice_SaveNote_.md)|POST|Saves a new [VoucherNote](Type_VoucherNote.md) or updates an existing note on an [OutgoingInvoice](Type_OutgoingInvoice.md) .         Note that all with access to invoices can access the notes.
[OutgoingInvoice/SendInvoice](Route_POST_OutgoingInvoice_SendInvoice_.md)|POST|Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.     Note that it's not guaranteed that the invoice will be sent although this function returns successfully. The invoice will be processed asynchronously. If any errors occur during processing, these errors will be displayed in GoApi.Invoices.OutgoingInvoice.LastErrorMessage .     Check GoApi.Invoices.OutgoingInvoice.Status to ensure that the invoice has actually been sent.


