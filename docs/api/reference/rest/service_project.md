
Project
================

Service to query, create and update [Project](Type_Project.md) , [ProjectTeamMember](Type_ProjectTeamMember.md) and [ProjectActivity](Type_ProjectActivity.md)

**Base Url**: `https://api.poweroffice.net/Project/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Project/](Route_GET_Project__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [Project](Type_Project.md) filtered by odata query.
[Project/](Route_POST_Project_.md)|POST|Creates or updates the specified [Project](Type_Project.md) .
[Project/{id}](Route_GET_Project__id__.md)|GET|Gets the specified [Project](Type_Project.md) by its id.
[Project/{id}](Route_DELETE_Project__id__.md)|DELETE|Deletes the specified [Project](Type_Project.md) by its id.
[Project/{parentId}/Activity](Route_GET_Project__parentId__Activity_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ProjectActivity](Type_ProjectActivity.md) filtered by odata query for a given parent identifier ( [Project](Type_Project.md) ).
[Project/{parentId}/Activity](Route_POST_Project__parentId__Activity_.md)|POST|Creates or updates the specified [ProjectActivity](Type_ProjectActivity.md) .
[Project/{parentId}/Activity/{id}](Route_GET_Project__parentId__Activity__id__.md)|GET|Gets the specified [ProjectActivity](Type_ProjectActivity.md) by its id and its parent identifier ( [Project](Type_Project.md) ).
[Project/{parentId}/Activity/{id}](Route_DELETE_Project__parentId__Activity__id__.md)|DELETE|Deletes the specified [ProjectActivity](Type_ProjectActivity.md) by its identifier and its parent identifier ( [Project](Type_Project.md) ).
[Project/{parentId}/TeamMember](Route_GET_Project__parentId__TeamMember_options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ProjectTeamMember](Type_ProjectTeamMember.md) by odata query for a given parent identifier ( [Project](Type_Project.md) ).
[Project/{parentId}/TeamMember](Route_POST_Project__parentId__TeamMember_.md)|POST|Creates or updates the specified [ProjectTeamMember](Type_ProjectTeamMember.md) .
[Project/{parentId}/TeamMember/{id}](Route_GET_Project__parentId__TeamMember__id__.md)|GET|Gets the specified [ProjectTeamMember](Type_ProjectTeamMember.md) by its id and its parent identifier ( [Project](Type_Project.md) ).
[Project/{parentId}/TeamMember/{id}](Route_DELETE_Project__parentId__TeamMember__id__.md)|DELETE|Deletes the specified [ProjectTeamMember](Type_ProjectTeamMember.md) by its identifier and its parent identifier ( [Project](Type_Project.md) ).


