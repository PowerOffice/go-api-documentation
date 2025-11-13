
public async Task&lt;GoApi.Client.ClientAuthTemporaryUrlDto&gt; CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri, Uri redirectUri)
=======
**Namespace:** GoApi.Client

Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.

### Syntax
```csharp
	public async Task<GoApi.Client.ClientAuthTemporaryUrlDto> CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri, Uri redirectUri)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
applicationKey|Guid|The secret application key of the integration
callbackUri|Uri|The callback URL that PowerOffice Go should call when the on-boarding is finished, containing the client key of the added integration.
redirectUri|Uri|A redirect URI that PowerOffice Go navigates the user to when on-boarding is finished.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Client.ClientAuthTemporaryUrlDto&gt;](GoApi.Client.ClientAuthTemporaryUrlDto.md)|



