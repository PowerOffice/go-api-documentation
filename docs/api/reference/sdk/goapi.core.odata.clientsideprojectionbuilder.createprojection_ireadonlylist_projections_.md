
public static LambdaExpression CreateProjection(IReadOnlyList&lt;System.Linq.Expressions.LambdaExpression&gt; projections)
=======
**Namespace:** GoApi.Core.OData

Composes the given projection lambdas into a single projection which only references the     necessary selected colums. Thus, if you have something like ```javascript
query.Select(c =&gt; new { CompanyName = c.Company.Name, c.Name })
    .Where(t =&gt; t.CompanyName != null &gt;&gt; t.CompanyName.Length &gt; 0)
    .Select(t =&gt; t.Name);

``` we might naively generate a projection like c =&gt; new { CompanyName = c.Company.Name, c.Name }.Name.     This will fail when executed, because we will not have selected any columns from Company.

### Syntax
```csharp
	public static LambdaExpression CreateProjection(IReadOnlyList<System.Linq.Expressions.LambdaExpression> projections)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
projections|System.Collections.Generic.IReadOnlyList&lt;System.Linq.Expressions.LambdaExpression&gt;|


### Returns
Type | Description
:----|:------------
System.Linq.Expressions.LambdaExpression|



