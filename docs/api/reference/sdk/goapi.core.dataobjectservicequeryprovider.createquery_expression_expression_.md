
public IQueryable CreateQuery(Expression expression)
=======
**Namespace:** GoApi.Core

Constructs an System.Linq.IQueryable object that can evaluate the query represented by a specified expression tree.

### Syntax
```csharp
	public IQueryable CreateQuery(Expression expression)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
expression|System.Linq.Expressions.Expression|An expression tree that represents a LINQ query.


### Returns
Type | Description
:----|:------------
System.Linq.IQueryable|An System.Linq.IQueryable that can evaluate the query represented by the specified expression tree.



