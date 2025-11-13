
ContactGroupService
================

Service providing methods for querying, creating and modifying [ContactGroup](GoApi.Party.ContactGroup.md) , and retrieving [Employee](GoApi.Party.Employee.md) , [Customer](GoApi.Party.Customer.md) and [Supplier](GoApi.Party.Supplier.md) for contact groups.



### Constructors
Name | Description
:----|:------------
[ContactGroupService(IAuthorization authorization)](GoApi.Party.ContactGroupService.ContactGroupService_IAuthorization_authorization_.md)|Initializes a new instance of the [ContactGroupService](GoApi.Party.ContactGroupService.md) class.
[ContactGroupService(IAuthorization authorization, Host host)](GoApi.Party.ContactGroupService.ContactGroupService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ContactGroupService](GoApi.Party.ContactGroupService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(ContactGroup entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.Delete_ContactGroup_entity_.md)|Delete a data object
[DeleteAsync(ContactGroup entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.DeleteAsync_ContactGroup_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[GetCustomers(string contactGroupName)](GoApi.Party.ContactGroupService.GetCustomers_String_contactGroupName_.md)|Gets the customers of type [Customer](GoApi.Party.Customer.md) that is connected to the contact group with given name.
[GetEmployees(string contactGroupName)](GoApi.Party.ContactGroupService.GetEmployees_String_contactGroupName_.md)|Gets the employees of type [Employee](GoApi.Party.Employee.md) that is connected to the contact group with given name.
[GetSuppliers(string contactGroupName)](GoApi.Party.ContactGroupService.GetSuppliers_String_contactGroupName_.md)|Gets the suppliers of type [Supplier](GoApi.Party.Supplier.md) that is connected to the contact group with given name.
[Save(ContactGroup entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.Save_ContactGroup_entity_.md)|Saves the specified data object.
[SaveAsync(ContactGroup entity)](GoApi.Core.DataObjectCrudService_GoApi.Party.ContactGroup_.SaveAsync_ContactGroup_entity_.md)|Saves the specified data object.


