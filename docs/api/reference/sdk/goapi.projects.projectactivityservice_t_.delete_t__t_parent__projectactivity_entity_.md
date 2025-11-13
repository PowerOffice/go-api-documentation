
public virtual bool Delete&lt;T&gt;(T parent, ProjectActivity entity)
=======
**Namespace:** GoApi.Projects

Removes a [ProjectActivity](GoApi.Projects.ProjectActivity.md) from a project.

### Syntax
```csharp
	public virtual bool Delete<T>(T parent, ProjectActivity entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
parent|[T](GoApi.Projects.T.md)|The project.
entity|[ProjectActivity](GoApi.Projects.ProjectActivity.md)|The activity.


### Returns
Type | Description
:----|:------------
bool|T.

### Exceptions
Type | Description
:----|:-----------
System.Exception|Entity must be of type DataObject         or         Key property of entity has illegal type



