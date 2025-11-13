
BankTransfer
================

Service to query, create and delete [BankTransfer](Type_BankTransfer.md) .         A bank transfer is representing a transaction of money from one of the client's bank accounts to another bank account.         Creating a new bank transfer  will add a payment that must be authorized by a user in PowerOffice Go.          Status will be update on bank transfers after the authorization is done.         A bank transfer can not be edited after creation. If there was something wrong with the bank transfer, it has to be deleted and recreated.         Querying this service will only return BankTransfers that is created by the integration itself, not all payments on the client.

**Base Url**: `https://api.poweroffice.net/Bank/BankTransfer/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Bank/BankTransfer/](Route_GET_Bank_BankTransfer__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of bank transfers filtered by odata query.         Querying will only return BankTransfers that is created by the integration itself, not all payments on the client.
[Bank/BankTransfer/](Route_POST_Bank_BankTransfer_.md)|POST|Creates the specified bank transfer.         A bank transfer can not be edited after creation. If there was something wrong with the bank transfer, it has to be deleted and recreated.
[Bank/BankTransfer/{id}](Route_GET_Bank_BankTransfer__id__.md)|GET|Gets the specified bank transfer by its id.
[Bank/BankTransfer/{id}](Route_DELETE_Bank_BankTransfer__id__.md)|DELETE|Deletes the specified bank transfer by its id.


