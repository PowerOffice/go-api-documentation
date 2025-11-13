
public async Task&lt;GoApi.Core.OAuth.IAuthorizationState&gt; RefreshAuthorization(IAuthorizationState authorization, Nullable&lt;System.TimeSpan&gt; skipIfUsefulLifeExceeds = , CancellationToken cancellationToken = )
=======
**Namespace:** GoApi.Core.OAuth



### Syntax
```csharp
	public async Task<GoApi.Core.OAuth.IAuthorizationState> RefreshAuthorization(IAuthorizationState authorization, Nullable<System.TimeSpan> skipIfUsefulLifeExceeds = , CancellationToken cancellationToken = )
```

### Parameters
Name | Type | Description
:----|:-----|:------------
authorization|[IAuthorizationState](GoApi.Core.OAuth.IAuthorizationState.md)|
skipIfUsefulLifeExceeds|System.Nullable&lt;System.TimeSpan&gt;|
cancellationToken|System.Threading.CancellationToken|


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Core.OAuth.IAuthorizationState&gt;](GoApi.Core.OAuth.IAuthorizationState.md)|



