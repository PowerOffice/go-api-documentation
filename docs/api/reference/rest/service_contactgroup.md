
ContactGroup
================

Service providing methods for querying, creating and modifying [ContactGroup](Type_ContactGroup.md) .

**Base Url**: `https://api.poweroffice.net/ContactGroup/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[ContactGroup/](Route_GET_ContactGroup__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ContactGroup](Type_ContactGroup.md) filtered by odata query.
[ContactGroup/](Route_POST_ContactGroup_.md)|POST|Creates or updates the specified [ContactGroup](Type_ContactGroup.md) .
[ContactGroup/{contactGroupName}/customers](Route_GET_ContactGroup__contactGroupName__customers_contactGroupName__contactGroupName__options__options_.md)?contactGroupName=&lt;contactGroupName&gt;&options=&lt;options&gt;|GET|Gets a list of [Customer](Type_Customer.md) that is connected to the contact group with given name.
[ContactGroup/{contactGroupName}/employees](Route_GET_ContactGroup__contactGroupName__employees_contactGroupName__contactGroupName__options__options_.md)?contactGroupName=&lt;contactGroupName&gt;&options=&lt;options&gt;|GET|Gets a list of [Employee](Type_Employee.md) that is connected to the contact group with given name.
[ContactGroup/{contactGroupName}/suppliers](Route_GET_ContactGroup__contactGroupName__suppliers_contactGroupName__contactGroupName__options__options_.md)?contactGroupName=&lt;contactGroupName&gt;&options=&lt;options&gt;|GET|Gets a list of [Supplier](Type_Supplier.md) that is connected to the contact group with given name.
[ContactGroup/{id}](Route_GET_ContactGroup__id__.md)|GET|Gets the specified [ContactGroup](Type_ContactGroup.md) by its identifier.
[ContactGroup/{id}](Route_DELETE_ContactGroup__id__.md)|DELETE|Deletes the specified [ContactGroup](Type_ContactGroup.md) by its identifier.


