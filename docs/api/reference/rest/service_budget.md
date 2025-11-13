
Budget
================

Service to query, create and delete [Budget](Type_Budget.md) .         A budget contains an estimate of the clients planned incomes and expenditures for a set period of time.         Updating a budget is in reality a delete and save, thus it is important that the updated budget is complete when saving.

**Base Url**: `https://api.poweroffice.net/Budget/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Budget/](Route_GET_Budget__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of budgets filtered by odata query.
[Budget/](Route_POST_Budget_.md)|POST|Creates the specified budget.
[Budget/{id}](Route_GET_Budget__id__.md)|GET|Gets the specified budget by its id.
[Budget/{id}](Route_DELETE_Budget__id__.md)|DELETE|Deletes the specified budget by its id.


