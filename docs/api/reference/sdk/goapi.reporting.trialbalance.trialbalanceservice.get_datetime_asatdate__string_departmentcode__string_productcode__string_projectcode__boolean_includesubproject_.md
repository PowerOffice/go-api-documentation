
public IQueryable&lt;GoApi.Reporting.TrialBalance.TrialBalanceLine&gt; Get(DateTime asAtDate, string departmentCode, string productCode, string projectCode, bool includeSubProject)
=======
**Namespace:** GoApi.Reporting.TrialBalance

Gets the trial balance as at the specified date filtered by department-, product- and/or project-code, represented as an IQueryable of [TrialBalanceLine](GoApi.Reporting.TrialBalance.TrialBalanceLine.md)

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.TrialBalance.TrialBalanceLine> Get(DateTime asAtDate, string departmentCode, string productCode, string projectCode, bool includeSubProject)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
asAtDate|DateTime|As at date.
departmentCode|string|Department code.
productCode|string|Product code.
projectCode|string|Project code.
includeSubProject|bool|Include Sub-project(s) for specified project. If projectCode is null, all (sub)projects are included (regardless of this variable).


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.TrialBalance.TrialBalanceLine&gt;](GoApi.Reporting.TrialBalance.TrialBalanceLine.md)|IEnumerable&lt;TrialBalanceLine&gt;.



