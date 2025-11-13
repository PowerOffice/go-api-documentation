
ProjectTeamMemberService&lt;Project&gt;
================

Class ProjectTeamMemberService providing methods for querying, adding and removing team members ( [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) ) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectTeamMemberService&lt;Project&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectTeamMemberService_Project_.ProjectTeamMemberService_Project__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Project parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_Project_.Delete_Project_parent__ProjectTeamMember_entity_.md)|Removes a project team member from a project.
[Get()](GoApi.Projects.ProjectTeamMemberService_Project_.Get__.md)|Get team members for a given project by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectTeamMemberService_Project_.Get_Int64_id_.md)|Gets the project team member for a project by its Id.
[Get(Project parent, long id)](GoApi.Projects.ProjectTeamMemberService_Project_.Get_Project_parent__Int64_id_.md)|Gets the project team member for a project by its Id.
[Post(Project parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_Project_.Post_Project_parent__ProjectTeamMember_entity_.md)|Adds the project team member as a team member to the project. The employee with the specified employee code has be         be created through the employee service before calling this method.


