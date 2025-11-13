
Employee
================

Service that provides methods to query, create and update [Employee](Type_Employee.md) .     Also provides methods for querying and modifying [PartyBankAccount](Type_PartyBankAccount.md) on the employees.

**Base Url**: `https://api.poweroffice.net/Employee/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Employee/](Route_GET_Employee__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of parties ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) filtered by the odata query
[Employee/](Route_POST_Employee_.md)|POST|Saves the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Employee/{id}](Route_GET_Employee__id__.md)|GET|Gets the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) by its id.
[Employee/{id}](Route_DELETE_Employee__id__.md)|DELETE|Deletes the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Employee/{parentId}/BankAccount](Route_GET_Employee__parentId__BankAccount_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [PartyBankAccount](Type_PartyBankAccount.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Employee/{parentId}/BankAccount](Route_POST_Employee__parentId__BankAccount_.md)|POST|Creates or updates the specified [PartyBankAccount](Type_PartyBankAccount.md) .
[Employee/{parentId}/BankAccount/{id}](Route_GET_Employee__parentId__BankAccount__id__options__options_.md)?options=&lt;options&gt;|GET|Gets the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Employee/{parentId}/BankAccount/{id}](Route_DELETE_Employee__parentId__BankAccount__id__.md)|DELETE|Deletes the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id.


