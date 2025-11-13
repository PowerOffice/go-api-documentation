
PaymentTermsService
================

Service used to query, update and delete [PaymentTerm](GoApi.Invoices.PaymentTerm.md) . A payment term is the number of days from a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) is sent until it's due.     If a payment term is default, it cannot be deleted. In this case another payment term must be set to default before delete can be done.



### Constructors
Name | Description
:----|:------------
[PaymentTermsService(IAuthorization authorization, Host host)](GoApi.Invoices.PaymentTermsService.PaymentTermsService_IAuthorization_authorization__Host_host_.md)|

### Methods
Name | Description
:----|:------------
[Delete(PaymentTerm entity)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.Delete_PaymentTerm_entity_.md)|Delete a data object
[DeleteAsync(PaymentTerm entity)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.DeleteAsync_PaymentTerm_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(PaymentTerm entity)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.Save_PaymentTerm_entity_.md)|Saves the specified data object.
[SaveAsync(PaymentTerm entity)](GoApi.Core.DataObjectCrudService_GoApi.Invoices.PaymentTerm_.SaveAsync_PaymentTerm_entity_.md)|Saves the specified data object.


