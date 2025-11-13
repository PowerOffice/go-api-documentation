
Supplier
================

Service that provides methods to query, create and update [Supplier](Type_Supplier.md) .     Also provides methods for querying and modifying [PartyBankAccount](Type_PartyBankAccount.md) and PartyContactPerson on the suppliers.

**Base Url**: `https://api.poweroffice.net/Supplier/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Supplier/](Route_GET_Supplier__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of parties ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) filtered by the odata query
[Supplier/](Route_POST_Supplier_.md)|POST|Saves the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Supplier/{id}](Route_GET_Supplier__id__.md)|GET|Gets the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) by its id.
[Supplier/{id}](Route_DELETE_Supplier__id__.md)|DELETE|Deletes the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Supplier/{parentId}/BankAccount](Route_GET_Supplier__parentId__BankAccount_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [PartyBankAccount](Type_PartyBankAccount.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Supplier/{parentId}/BankAccount](Route_POST_Supplier__parentId__BankAccount_.md)|POST|Creates or updates the specified [PartyBankAccount](Type_PartyBankAccount.md) .
[Supplier/{parentId}/BankAccount/{id}](Route_GET_Supplier__parentId__BankAccount__id__options__options_.md)?options=&lt;options&gt;|GET|Gets the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).
[Supplier/{parentId}/BankAccount/{id}](Route_DELETE_Supplier__parentId__BankAccount__id__.md)|DELETE|Deletes the specified [PartyBankAccount](Type_PartyBankAccount.md) by its id.
[Supplier/{parentId}/Contact](Route_GET_Supplier__parentId__Contact_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ContactPerson](Type_ContactPerson.md) filtered by odata query for a given parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).
[Supplier/{parentId}/Contact](Route_POST_Supplier__parentId__Contact_.md)|POST|Creates or updates the specified [ContactPerson](Type_ContactPerson.md) .
[Supplier/{parentId}/Contact/{id}](Route_GET_Supplier__parentId__Contact__id__options__options_.md)?options=&lt;options&gt;|GET|Gets the specified [ContactPerson](Type_ContactPerson.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).
[Supplier/{parentId}/Contact/{id}](Route_DELETE_Supplier__parentId__Contact__id__.md)|DELETE|Deletes the specified [ContactPerson](Type_ContactPerson.md) by its id.


