
ClientSideProjectionBuilder
================

MA: aids in constructing a minimal client-side projection expression to be applied on the results     that come back from the remote service




### Methods
Name | Description
:----|:------------
[CreateProjection(IReadOnlyList&lt;System.Linq.Expressions.LambdaExpression&gt; projections)](GoApi.Core.OData.ClientSideProjectionBuilder.CreateProjection_IReadOnlyList_projections_.md)|Composes the given projection lambdas into a single projection which only references the     necessary selected colums. Thus, if you have something like ```javascript
query.Select(c =&gt; new { CompanyName = c.Company.Name, c.Name })
    .Where(t =&gt; t.CompanyName != null &gt;&gt; t.CompanyName.Length &gt; 0)
    .Select(t =&gt; t.Name);

``` we might naively generate a projection like c =&gt; new { CompanyName = c.Company.Name, c.Name }.Name.     This will fail when executed, because we will not have selected any columns from Company.


