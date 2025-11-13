
public async Task&lt;GoApi.Client.ClientAuthTemporaryUrlDto&gt; CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri)
=======
**Namespace:** GoApi.Client

Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).

### Syntax
```csharp
	public async Task<GoApi.Client.ClientAuthTemporaryUrlDto> CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
applicationKey|Guid|The secret application key of the integration
callbackUri|Uri|The callback URL that PowerOffice Go should call when the on-boarding is finished, containing the client key of the added integration.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Client.ClientAuthTemporaryUrlDto&gt;](GoApi.Client.ClientAuthTemporaryUrlDto.md)|ClientAuthTemporaryUrlDto



