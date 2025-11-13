
ProjectActivityService&lt;Project&gt;
================

Class ProjectActivityService providing methods for querying, adding and removing project activities ( [ProjectActivity](GoApi.Projects.ProjectActivity.md) ) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectActivityService&lt;Project&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectActivityService_Project_.ProjectActivityService_Project__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Project parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_Project_.Delete_Project_parent__ProjectActivity_entity_.md)|Removes a activity from a project.
[Get()](GoApi.Projects.ProjectActivityService_Project_.Get__.md)|Get activitys for a given project by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectActivityService_Project_.Get_Int64_id_.md)|Gets the activity for a project by its Id.
[Get(Project parent, long id)](GoApi.Projects.ProjectActivityService_Project_.Get_Project_parent__Int64_id_.md)|Gets the activity for a project by its Id.
[Post(Project parent, ProjectActivity entity)](GoApi.Projects.ProjectActivityService_Project_.Post_Project_parent__ProjectActivity_entity_.md)|Adds the activity as a activity to the project. The activity has be be created through the activity service before         calling this method.


