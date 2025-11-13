
public abstract Task&lt;TResult&gt; ExecuteAsync(Expression&lt;Func&lt;IQueryable&lt;TElement&gt;, TResult&gt;&gt; executeExpression)
=======
**Namespace:** GoApi.Core.OData



### Syntax
```csharp
	public abstract Task<TResult> ExecuteAsync(Expression<Func<IQueryable<TElement>, TResult>> executeExpression)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
executeExpression|Expression&lt;Func&lt;IQueryable&lt;TElement&gt;, TResult&gt;&gt;|


### Returns
Type | Description
:----|:------------
[Task&lt;TResult&gt;](GoApi.Core.OData.TResult.md)|



