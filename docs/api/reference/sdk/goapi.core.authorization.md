
Authorization
================

Class representing an authorization to use the GoApi. This class handles all the low level         bit and pieces of the authentication and authorization

### Fields
Name |Value | Description
:----|:-----|:-----------
UserAuthenticationPrefix|USER |A prefix used for user authentication appkeys

### Properties
Name | Description
:----|:------------
[HttpClient](GoApi.Core.Authorization.HttpClient.md)|Gets or sets the HttpClient.
[Settings](GoApi.Core.Authorization.Settings.md)|Gets or sets the settings.

### Constructors
Name | Description
:----|:------------
[Authorization(AuthorizationSettings settings)](GoApi.Core.Authorization.Authorization_AuthorizationSettings_settings_.md)|Initializes a new instance of the [Authorization](GoApi.Core.Authorization.md) class.
[Authorization()](GoApi.Core.Authorization.Authorization__.md)|

### Methods
Name | Description
:----|:------------
[CreateAsync(Authorization authorization, AuthorizationSettings settings)](GoApi.Core.Authorization.CreateAsync_Authorization_authorization__AuthorizationSettings_settings_.md)|Creates a new Authorization instance with the given settings.
[CreateAsync(AuthorizationSettings settings, IReadOnlyDictionary&lt;System.string, System.string&gt; httpHeaders = )](GoApi.Core.Authorization.CreateAsync_AuthorizationSettings_settings__IReadOnlyDictionary_httpHeaders____.md)|Creates a new Authorization instance with the given settings.
[CreateAuthorizationHandler()](GoApi.Core.Authorization.CreateAuthorizationHandler__.md)|Creates an authorization handler.
[CreateAuthorizedHttpClient()](GoApi.Core.Authorization.CreateAuthorizedHttpClient__.md)|Creates an authorized HTTP client.
[CreateAuthorizedHttpClientAsync()](GoApi.Core.Authorization.CreateAuthorizedHttpClientAsync__.md)|Creates an authorized HTTP client.
[GetAuthorizationState()](GoApi.Core.Authorization.GetAuthorizationState__.md)|Gets a state object with the current of autorization info.
[GetAutorizationState()](GoApi.Core.Authorization.GetAutorizationState__.md)|Gets a state object with the current of autorization info.
[GetCusomtRequestHeaders()](GoApi.Core.Authorization.GetCusomtRequestHeaders__.md)|Returns a list of headers that should be added to all requests.
[GetCustomRequestHeaders()](GoApi.Core.Authorization.GetCustomRequestHeaders__.md)|Returns a list of headers that should be added to all requests.
[GetOrCreateAuthorizedHttpClientAsync()](GoApi.Core.Authorization.GetOrCreateAuthorizedHttpClientAsync__.md)|Gets the HTTP client if set on Authorization, if HttpClient is null it creates an authorized HTTP client and sets it on the Authorization.
[Refresh()](GoApi.Core.Authorization.Refresh__.md)|Refreshes authorization.


