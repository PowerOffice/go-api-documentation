
BudgetService
================

Service to query, create and delete [Budget](GoApi.Budget.Budget.md) .         A budget contains an estimate of the clients planned incomes and expenditures for a set period of time.         Updating a budget is in reality a delete and save, thus it is important that the updated budget is complete when saving.



### Constructors
Name | Description
:----|:------------
[BudgetService(IAuthorization authorization, Host host)](GoApi.Budget.BudgetService.BudgetService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [BudgetService](GoApi.Budget.BudgetService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Budget entity)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.Delete_Budget_entity_.md)|Delete a data object
[DeleteAsync(Budget entity)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.DeleteAsync_Budget_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(Budget entity)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.Save_Budget_entity_.md)|Saves the specified data object.
[SaveAsync(Budget entity)](GoApi.Core.DataObjectCrudService_GoApi.Budget.Budget_.SaveAsync_Budget_entity_.md)|Saves the specified data object.


