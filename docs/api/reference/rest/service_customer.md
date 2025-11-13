
Customer
================

Service that provides methods to query, create and update [Customer](Type_Customer.md) .     Also provides methods for querying and modifying [PartyBankAccount](Type_PartyBankAccount.md) and PartyContactPerson on the customers.

**Base Url**: `https://api.poweroffice.net/Customer/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Customer/](Route_GET_Customer__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of parties ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) filtered by the odata query
[Customer/](Route_POST_Customer_.md)|POST|Saves the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Customer/{id}](Route_GET_Customer__id__.md)|GET|Gets the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) by its id.
[Customer/{id}](Route_DELETE_Customer__id__.md)|DELETE|Deletes the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Customer/{parentId}/BankAccount](Route_GET_Customer__parentId__BankAccount_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [PartyBankAccount](Type_PartyBankAccount.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Customer/{parentId}/BankAccount](Route_POST_Customer__parentId__BankAccount_.md)|POST|Creates or updates the specified [PartyBankAccount](Type_PartyBankAccount.md) .
[Customer/{parentId}/BankAccount/{id}](Route_GET_Customer__parentId__BankAccount__id__options__options_.md)?options=&lt;options&gt;|GET|Gets the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Customer/{parentId}/BankAccount/{id}](Route_DELETE_Customer__parentId__BankAccount__id__.md)|DELETE|Deletes the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id.
[Customer/{parentId}/Contact](Route_GET_Customer__parentId__Contact_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ContactPerson](Type_ContactPerson.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).
[Customer/{parentId}/Contact](Route_POST_Customer__parentId__Contact_.md)|POST|Creates or updates the specified [ContactPerson](Type_ContactPerson.md) .
[Customer/{parentId}/Contact/{id}](Route_GET_Customer__parentId__Contact__id__options__options_.md)?options=&lt;options&gt;|GET|Gets the specified [ContactPerson](Type_ContactPerson.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).
[Customer/{parentId}/Contact/{id}](Route_DELETE_Customer__parentId__Contact__id__.md)|DELETE|Deletes the specified [ContactPerson](Type_ContactPerson.md) by its id.


