
public abstract Task&lt;System.Net.Http.HttpClient&gt; GetOrCreateAuthorizedHttpClientAsync(TimeSpan requestTimeout)
=======
**Namespace:** GoApi.Core

Gets the HTTP client if set on Authorization, if HttpClient is null it creates an authorized HTTP client and sets it on the Authorization.

### Syntax
```csharp
	public abstract Task<System.Net.Http.HttpClient> GetOrCreateAuthorizedHttpClientAsync(TimeSpan requestTimeout)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
requestTimeout|TimeSpan|


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.Net.Http.HttpClient&gt;|HttpClient.



