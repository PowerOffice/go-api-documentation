
ProjectActivityService&lt;GoApi.Projects.Project&gt;
================

Service providing methods for querying, adding and removing [ProjectActivity](GoApi.Projects.ProjectActivity.md) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectActivityService&lt;GoApi.Projects.Project&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.ProjectActivityService_GoApi.Projects.Project__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[ProjectActivityService&lt;GoApi.Projects.Project&gt;(IAuthorization authorization, Host host)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.ProjectActivityService_GoApi.Projects.Project__IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Project parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.Delete_Project_parent__ProjectActivity_entity_.md)|Removes a [ProjectActivity](GoApi.Projects.ProjectActivity.md) from a project.
[Get()](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.Get__.md)|Get [ProjectActivity](GoApi.Projects.ProjectActivity.md) by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.Get_Int64_id_.md)|Gets the [Activity](GoApi.TimeTracking.Activity.md) for a project by its Id.
[Get(Project parent, long id)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.Get_Project_parent__Int64_id_.md)|Gets the [ProjectActivity](GoApi.Projects.ProjectActivity.md) for a project by its Id.
[Post(Project parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_GoApi.Projects.Project_.Post_Project_parent__ProjectActivity_entity_.md)|Adds the [ProjectActivity](GoApi.Projects.ProjectActivity.md) as a activity to the project. The activity has be be created through the [ActivityService](GoApi.TimeTracking.ActivityService.md) before         calling this method.


