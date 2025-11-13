
Project.AllowAllActivities
================
**Namespace:** GoApi.Projects

Gets or sets a value indicating whether it's allowed to use all the available [Activity](GoApi.TimeTracking.Activity.md) when adding [TimeTrackingEntry](GoApi.TimeTracking.TimeTrackingEntry.md) on the project. If this is set to false, the activities allowed on the project should be specified through the ProjectActivity service ( [ProjectActivity](GoApi.Projects.ProjectActivity.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all activities means that this sub-project is allowed to use all the activities specified on the parent project.

### Syntax
```csharp
	public Nullable<System.bool> AllowAllActivities { get; set; }
```

### Type

System.Nullable&lt;System.bool&gt;



