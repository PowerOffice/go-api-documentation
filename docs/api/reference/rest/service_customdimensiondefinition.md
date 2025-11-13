
CustomDimensionDefinition
================

Service to query, create and update [CustomDimensionDefinition](Type_CustomDimensionDefinition.md)

**Base Url**: `https://api.poweroffice.net/CustomDimensionDefinition/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[CustomDimensionDefinition/](Route_GET_CustomDimensionDefinition__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of custom dimension definitions filtered by odata query.
[CustomDimensionDefinition/](Route_POST_CustomDimensionDefinition_.md)|POST|Updates the specified customDimensionDefinition.         Ordinal must be 1,2 or 3. If not then an ArgumentOutOfRangeException is thrown.
[CustomDimensionDefinition/{ordinal}](Route_GET_CustomDimensionDefinition__ordinal__.md)|GET|Gets the specified customDimensionDefinition by its ordinal (number).         Ordinal must be 1,2 or 3. If not then an ArgumentOutOfRangeException is thrown.


