
DeliveryTerms
================

Service used to create, read, update and delete [DeliveryTerm](Type_DeliveryTerm.md) available on the client.     If a delivery term is default, it cannot be deleted. In this case another delivery term must be set to default before delete can be done.

**Base Url**: `https://api.poweroffice.net/DeliveryTerms/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[DeliveryTerms/](Route_GET_DeliveryTerms__options__options_.md)?options=&lt;options&gt;|GET|Gets a collection of [DeliveryTerm](Type_DeliveryTerm.md) filtered by odata query.
[DeliveryTerms/](Route_POST_DeliveryTerms_.md)|POST|
[DeliveryTerms/{id}](Route_GET_DeliveryTerms__id__.md)|GET|Gets the specified [DeliveryTerm](Type_DeliveryTerm.md) by its identifier.
[DeliveryTerms/{id}](Route_DELETE_DeliveryTerms__id__.md)|DELETE|


