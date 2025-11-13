
ProjectTeamMemberService&lt;T&gt;
================

Class ProjectTeamMemberService providing methods for querying, adding and removing [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) on a [Project](GoApi.Projects.Project.md) .



### Constructors
Name | Description
:----|:------------
[ProjectTeamMemberService&lt;T&gt;(IAuthorization authorization, Uri baseUri)](GoApi.Projects.ProjectTeamMemberService_T_.ProjectTeamMemberService_T__IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[ProjectTeamMemberService&lt;T&gt;(IAuthorization authorization, Host host)](GoApi.Projects.ProjectTeamMemberService_T_.ProjectTeamMemberService_T__IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[Delete&lt;T&gt;(T parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_T_.Delete_T__T_parent__ProjectTeamMember_entity_.md)|Removes a [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) from a [Project](GoApi.Projects.Project.md) .
[Get()](GoApi.Projects.ProjectTeamMemberService_T_.Get__.md)|Get [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) by a LINQ expression
[Get(long id)](GoApi.Projects.ProjectTeamMemberService_T_.Get_Int64_id_.md)|Gets the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) by its Id.
[Get&lt;T&gt;(T parent, long id)](GoApi.Projects.ProjectTeamMemberService_T_.Get_T__T_parent__Int64_id_.md)|Gets the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) for a given [Project](GoApi.Projects.Project.md) by its Id.
[Post&lt;T&gt;(T parent, ProjectTeamMember entity)](GoApi.Projects.ProjectTeamMemberService_T_.Post_T__T_parent__ProjectTeamMember_entity_.md)|Adds the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) as a team member to the [Project](GoApi.Projects.Project.md) . The [Employee](GoApi.Party.Employee.md) with the specified employee code has be         be created through the [EmployeeService](GoApi.Party.EmployeeService.md) before calling this method.


