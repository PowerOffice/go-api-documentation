
public static Task&lt;GoApi.Core.OData.TResult&gt; ExecuteAsync(IQueryable&lt;GoApi.Core.OData.TElement&gt; this, Expression&lt;System.Func&lt;System.Linq.IQueryable&lt;GoApi.Core.OData.TElement&gt;, GoApi.Core.OData.TResult&gt;&gt; executeExpression)
=======
**Namespace:** GoApi.Core.OData

Provides aync OData query execution after applying the given execute expression. For example: ```javascript
var count = await query.ExecuteAsync(q =&gt; q.Count());

```

### Syntax
```csharp
	public static Task<GoApi.Core.OData.TResult> ExecuteAsync(IQueryable<GoApi.Core.OData.TElement> this, Expression<System.Func<System.Linq.IQueryable<GoApi.Core.OData.TElement>, GoApi.Core.OData.TResult>> executeExpression)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
this|[IQueryable&lt;GoApi.Core.OData.TElement&gt;](GoApi.Core.OData.TElement.md)|
executeExpression|System.Linq.Expressions.Expression&lt;System.Func&lt;System.Linq.IQueryable&lt;GoApi.Core.OData.TElement&gt;, GoApi.Core.OData.TResult&gt;&gt;|


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Core.OData.TResult&gt;](GoApi.Core.OData.TResult.md)|



