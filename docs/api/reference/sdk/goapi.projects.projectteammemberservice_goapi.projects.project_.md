
ProjectTeamMemberService&lt;GoApi.Projects.Project&gt;
================

Class ProjectTeamMemberService providing methods for querying, adding and removing [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectTeamMemberService&lt;GoApi.Projects.Project&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.ProjectTeamMemberService_GoApi.Projects.Project__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[ProjectTeamMemberService&lt;GoApi.Projects.Project&gt;(IAuthorization authorization, Host host)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.ProjectTeamMemberService_GoApi.Projects.Project__IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Project parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.Delete_Project_parent__ProjectTeamMember_entity_.md)|Removes a [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) from a [Project](GoApi.Projects.Project.md) .
[Get()](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.Get__.md)|Get [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.Get_Int64_id_.md)|Gets the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) by its Id.
[Get(Project parent, long id)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.Get_Project_parent__Int64_id_.md)|Gets the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) for a given [Project](GoApi.Projects.Project.md) by its Id.
[Post(Project parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_GoApi.Projects.Project_.Post_Project_parent__ProjectTeamMember_entity_.md)|Adds the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) as a team member to the [Project](GoApi.Projects.Project.md) . The [Employee](GoApi.Party.Employee.md) with the specified employee code has be         be created through the [EmployeeService](GoApi.Party.EmployeeService.md) before calling this method.


