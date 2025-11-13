
SupplierService
================

Service provides methods to query and manipulate [Supplier](GoApi.Party.Supplier.md) .         Also provides sub-services for querying and modifying [PartyBankAccount](GoApi.Party.PartyBankAccount.md) and [ContactPerson](GoApi.Party.ContactPerson.md) on the suppliers.


### Properties
Name | Description
:----|:------------
[ContactPerson](GoApi.Party.CustomerAndSupplierService_GoApi.Party.Supplier_.ContactPerson.md)|Contact person sub service.
[PartyBankAccount](GoApi.Party.PartyService_GoApi.Party.Supplier_.PartyBankAccount.md)|Party bank account sub-service.

### Constructors
Name | Description
:----|:------------
[SupplierService(IAuthorization authorization, Uri baseUri)](GoApi.Party.SupplierService.SupplierService_IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [SupplierService](GoApi.Party.SupplierService.md) class.
[SupplierService(IAuthorization authorization, Host host)](GoApi.Party.SupplierService.SupplierService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [SupplierService](GoApi.Party.SupplierService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Supplier entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.Delete_Supplier_entity_.md)|Delete a data object
[DeleteAsync(Supplier entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.DeleteAsync_Supplier_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(Supplier entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.Save_Supplier_entity_.md)|Saves the specified data object.
[SaveAsync(Supplier entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Supplier_.SaveAsync_Supplier_entity_.md)|Saves the specified data object.


