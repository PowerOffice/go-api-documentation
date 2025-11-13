
ClientAuthTemporaryUrlRequestDto
================

Dto used by [ClientAuthService](GoApi.Client.ClientAuthService.md) to contain the necessary information to begin an on-boarding process using the CreateTemporaryUrl method.


### Properties
Name | Description
:----|:------------
[ApplicationKey](GoApi.Client.ClientAuthTemporaryUrlRequestDto.ApplicationKey.md)|The third party integration key
[CallbackUri](GoApi.Client.ClientAuthTemporaryUrlRequestDto.CallbackUri.md)|CallbackUri is used to send result back to third party server when authentication is completed.         This Uri have to be on the list of whitelisted urls for the integration.
[ClientOrganizationNo](GoApi.Client.ClientAuthTemporaryUrlRequestDto.ClientOrganizationNo.md)|Optional parameter with the organization no of the organization you want to activate integration for. This can be used to filter the clients that the user have access to.
[RedirectUri](GoApi.Client.ClientAuthTemporaryUrlRequestDto.RedirectUri.md)|An optional redirect uri that can be used to redirect the user back to the third party page after authentication.         This Uri have to be on the list of whitelisted urls for the integration.

### Constructors
Name | Description
:----|:------------
[ClientAuthTemporaryUrlRequestDto()](GoApi.Client.ClientAuthTemporaryUrlRequestDto.ClientAuthTemporaryUrlRequestDto__.md)|



