
ClientAuthService
================

Service that provides an external integration methods for adding client integrations to PowerOffice Go from their system.



### Constructors
Name | Description
:----|:------------
[ClientAuthService(Uri baseUri)](GoApi.Client.ClientAuthService.ClientAuthService_Uri_baseUri_.md)|Initializes a new instance of the [ClientAuthService](GoApi.Client.ClientAuthService.md) class. Obsolete and should not be used.
[ClientAuthService(Host host)](GoApi.Client.ClientAuthService.ClientAuthService_Host_host_.md)|Initializes a new instance of the [ClientAuthService](GoApi.Client.ClientAuthService.md) class.

### Methods
Name | Description
:----|:------------
[CreateTemporaryUrl(Guid applicationKey, string clientOrganizationNo, Uri callbackUri, Uri redirectUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrl_Guid_applicationKey__String_clientOrganizationNo__Uri_callbackUri__Uri_redirectUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).
[CreateTemporaryUrl(Guid applicationKey, Uri callbackUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrl_Guid_applicationKey__Uri_callbackUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).
[CreateTemporaryUrl(Guid applicationKey, Uri callbackUri, Uri redirectUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrl_Guid_applicationKey__Uri_callbackUri__Uri_redirectUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).
[CreateTemporaryUrlAsync(Guid applicationKey, string clientOrganizationNo, Uri callbackUri, Uri redirectUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrlAsync_Guid_applicationKey__String_clientOrganizationNo__Uri_callbackUri__Uri_redirectUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.
[CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrlAsync_Guid_applicationKey__Uri_callbackUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.     For more details see [onboarding documentation](Common/Onboarding.md).
[CreateTemporaryUrlAsync(Guid applicationKey, Uri callbackUri, Uri redirectUri)](GoApi.Client.ClientAuthService.CreateTemporaryUrlAsync_Guid_applicationKey__Uri_callbackUri__Uri_redirectUri_.md)|Creates, and returns, a [ClientAuthTemporaryUrlDto](GoApi.Client.ClientAuthTemporaryUrlDto.md) that can be navigated to for adding a client integration to PowerOffice Go.


