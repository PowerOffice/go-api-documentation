
public virtual ProjectTeamMember Post(Project parent, ProjectTeamMember entity)
=======
**Namespace:** GoApi.Projects

Adds the [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) as a team member to the [Project](GoApi.Projects.Project.md) . The [Employee](GoApi.Party.Employee.md) with the specified employee code has be         be created through the [EmployeeService](GoApi.Party.EmployeeService.md) before calling this method.

### Syntax
```csharp
	public virtual ProjectTeamMember Post(Project parent, ProjectTeamMember entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
parent|[Project](GoApi.Projects.Project.md)|The project.
entity|[ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md)|The project team member.


### Returns
Type | Description
:----|:------------
[ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md)|ProjectTeamMember.



