
Project.AllowAllEmployees
================
**Namespace:** GoApi.Projects

Gets or sets a value indicating whether all [Employee](GoApi.Party.Employee.md) can work on this project. If this is set to false, the team members working on the project should be specified through the ProjectTeamMember service ( [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all employees means that this sub-project is allowed to use all the team members specified on the parent project.

### Syntax
```csharp
	public Nullable<System.bool> AllowAllEmployees { get; set; }
```

### Type

System.Nullable&lt;System.bool&gt;



