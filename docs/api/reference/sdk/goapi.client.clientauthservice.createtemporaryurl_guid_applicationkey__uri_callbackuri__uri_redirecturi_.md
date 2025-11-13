
public ClientAuthTemporaryUrlDto CreateTemporaryUrl(Guid applicationKey, Uri callbackUri, Uri redirectUri)
=======
**Namespace:** GoApi.Client

Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).

### Syntax
```csharp
	public ClientAuthTemporaryUrlDto CreateTemporaryUrl(Guid applicationKey, Uri callbackUri, Uri redirectUri)
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
[ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md)|ClientAuthTemporaryUrlDto



