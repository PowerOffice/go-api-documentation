
public virtual ProjectActivity Post&lt;T&gt;(T parent, ProjectActivity entity)
=======
**Namespace:** GoApi.Projects

Adds the [ProjectActivity](GoApi.Projects.ProjectActivity.md) as a activity to the project. The activity has be be created through the [ActivityService](GoApi.TimeTracking.ActivityService.md) before         calling this method.

### Syntax
```csharp
	public virtual ProjectActivity Post<T>(T parent, ProjectActivity entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
parent|[T](GoApi.Projects.T.md)|The project.
entity|[ProjectActivity](GoApi.Projects.ProjectActivity.md)|The activity.


### Returns
Type | Description
:----|:------------
[ProjectActivity](GoApi.Projects.ProjectActivity.md)|Activity.



