
ProjectService
================

Service providing methods for querying and manipulating [Project](GoApi.Projects.Project.md) .     Also contains the sub-services [ProjectTeamMemberService&lt;GoApi.Projects.Project&gt;](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.md) and [ProjectActivityService&lt;T&gt;](GoApi.Projects.ProjectActivityService_T_.md) for querying and manipulating [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) and [ProjectActivity](GoApi.Projects.ProjectActivity.md)


### Properties
Name | Description
:----|:------------
[Activity](GoApi.Projects.ProjectService.Activity.md)|[ProjectActivity](GoApi.Projects.ProjectActivity.md) sub-service.
[TeamMember](GoApi.Projects.ProjectService.TeamMember.md)|[ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) sub-service.

### Constructors
Name | Description
:----|:------------
[ProjectService(IAuthorization authorization)](GoApi.Projects.ProjectService.ProjectService_IAuthorization_authorization_.md)|Initializes a new instance of the [ProjectService](GoApi.Projects.ProjectService.md) class.
[ProjectService(IAuthorization authorization, Host host)](GoApi.Projects.ProjectService.ProjectService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ProjectService](GoApi.Projects.ProjectService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Project entity)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.Delete_Project_entity_.md)|Delete a data object
[DeleteAsync(Project entity)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.DeleteAsync_Project_entity_.md)|Delete a data object
[Get()](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.Get__.md)|Get objects by a LINQ expression
[Get(long id)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.Get_Int64_id_.md)|Gets a data object by its Id.
[GetAsync(Guid id)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.GetAsync_Guid_id_.md)|Get a data object by its Id.
[GetAsync(long id)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.GetAsync_Int64_id_.md)|Gets a data object by its Id.
[Save(Project entity)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.Save_Project_entity_.md)|Saves the specified data object.
[SaveAsync(Project entity)](GoApi.Core.DataObjectCrudService_GoApi.Projects.Project_.SaveAsync_Project_entity_.md)|Saves the specified data object.


