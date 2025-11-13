
CustomerService
================

Service provides methods to query and manipulate [Customer](GoApi.Party.Customer.md) .         Also provides sub-services for querying and modifying [PartyBankAccount](GoApi.Party.PartyBankAccount.md) and [ContactPerson](GoApi.Party.ContactPerson.md) on the customers.


### Properties
Name | Description
:----|:------------
[ContactPerson](GoApi.Party.CustomerAndSupplierService_GoApi.Party.Customer_.ContactPerson.md)|Contact person sub service.
[PartyBankAccount](GoApi.Party.PartyService_GoApi.Party.Customer_.PartyBankAccount.md)|Party bank account sub-service.

### Constructors
Name | Description
:----|:------------
[CustomerService(IAuthorization authorization, Uri baseUri)](GoApi.Party.CustomerService.CustomerService_IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [CustomerService](GoApi.Party.CustomerService.md) class.
[CustomerService(IAuthorization authorization, Host host)](GoApi.Party.CustomerService.CustomerService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [CustomerService](GoApi.Party.CustomerService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Customer entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.Delete_Customer_entity_.md)|Delete a data object
[DeleteAsync(Customer entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.DeleteAsync_Customer_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(Customer entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.Save_Customer_entity_.md)|Saves the specified data object.
[SaveAsync(Customer entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.Customer_.SaveAsync_Customer_entity_.md)|Saves the specified data object.


### Examples


LinkTo:CustomerDemo:The purpose of this demo is to test some of the Customer functionality available to PowerOffice Go users

