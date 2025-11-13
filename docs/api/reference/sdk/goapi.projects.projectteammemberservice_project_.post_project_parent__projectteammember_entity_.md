
public virtual ProjectTeamMember Post(Project parent, ProjectTeamMember entity)
=======
**Namespace:** GoApi.Projects

Adds the project team member as a team member to the project. The employee with the specified employee code has be         be created through the employee service before calling this method.

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



