
PaymentTerms
================

Service used to query, update and delete [PaymentTerm](Type_PaymentTerm.md) . A payment term is the number of days from a [OutgoingInvoice](Type_OutgoingInvoice.md) is sent until it's due.     If a payment term is default, it cannot be deleted. In this case another payment term must be set to default before delete can be done.

**Base Url**: `https://api.poweroffice.net/PaymentTerms/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[PaymentTerms/](Route_GET_PaymentTerms__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [PaymentTerm](Type_PaymentTerm.md) filtered by odata query.
[PaymentTerms/](Route_POST_PaymentTerms_.md)|POST|Creates or updates the specified [PaymentTerm](Type_PaymentTerm.md) .
[PaymentTerms/{id}](Route_GET_PaymentTerms__id__.md)|GET|Gets the specified [PaymentTerm](Type_PaymentTerm.md) by its identifier.
[PaymentTerms/{id}](Route_DELETE_PaymentTerms__id__.md)|DELETE|Deletes the specified [PaymentTerm](Type_PaymentTerm.md) by its identifier.


