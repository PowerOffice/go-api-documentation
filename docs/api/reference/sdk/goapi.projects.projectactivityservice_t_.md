
ProjectActivityService&lt;T&gt;
================

Service providing methods for querying, adding and removing [ProjectActivity](GoApi.Projects.ProjectActivity.md) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectActivityService&lt;T&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectActivityService_T_.ProjectActivityService_T__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[ProjectActivityService&lt;T&gt;(IAuthorization authorization, Host host)](GoApi.Projects.ProjectActivityService_T_.ProjectActivityService_T__IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete&lt;T&gt;(T parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_T_.Delete_T__T_parent__ProjectActivity_entity_.md)|Removes a [ProjectActivity](GoApi.Projects.ProjectActivity.md) from a project.
[Get()](GoApi.Projects.ProjectActivityService_T_.Get__.md)|Get [ProjectActivity](GoApi.Projects.ProjectActivity.md) by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectActivityService_T_.Get_Int64_id_.md)|Gets the [Activity](GoApi.TimeTracking.Activity.md) for a project by its Id.
[Get&lt;T&gt;(T parent, long id)](GoApi.Projects.ProjectActivityService_T_.Get_T__T_parent__Int64_id_.md)|Gets the [ProjectActivity](GoApi.Projects.ProjectActivity.md) for a project by its Id.
[Post&lt;T&gt;(T parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_T_.Post_T__T_parent__ProjectActivity_entity_.md)|Adds the [ProjectActivity](GoApi.Projects.ProjectActivity.md) as a activity to the project. The activity has be be created through the [ActivityService](GoApi.TimeTracking.ActivityService.md) before         calling this method.


