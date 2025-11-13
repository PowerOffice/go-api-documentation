
BankTransferService
================

Service to query, create and delete [BankTransfer](GoApi.Bank.BankTransfer.md) .         A bank transfer is representing a transaction of money from one of the client's bank accounts to another bank account.         Creating a new bank transfer  will add a payment that must be authorized by a user in PowerOffice Go.          Status will be update on bank transfers after the authorization is done.         A bank transfer can not be edited after creation. If there was something wrong with the bank transfer, it has to be deleted and recreated.         Querying this service will only return BankTransfers that is created by the integration itself, not all payments on the client.



### Constructors
Name | Description
:----|:------------
[BankTransferService(IAuthorization authorization)](GoApi.Bank.BankTransferService.BankTransferService_IAuthorization_authorization_.md)|Initializes a new instance of the [BankTransferService](GoApi.Bank.BankTransferService.md) class.
[BankTransferService(IAuthorization authorization, Host host)](GoApi.Bank.BankTransferService.BankTransferService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [BankTransferService](GoApi.Bank.BankTransferService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(BankTransfer entity)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.Delete_BankTransfer_entity_.md)|Delete a data object
[DeleteAsync(BankTransfer entity)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.DeleteAsync_BankTransfer_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(BankTransfer entity)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.Save_BankTransfer_entity_.md)|Saves the specified data object.
[SaveAsync(BankTransfer entity)](GoApi.Core.DataObjectCrudService_GoApi.Bank.BankTransfer_.SaveAsync_BankTransfer_entity_.md)|Saves the specified data object.


