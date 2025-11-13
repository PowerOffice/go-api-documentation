
ClientAuthTemporaryUrlRequestDto (ClientAuthTemporaryUrlRequestDto)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
ApplicationKey|string (Guid)|The third party integration key
CallbackUri|Uri|CallbackUri is used to send result back to third party server when authentication is completed.         This Uri have to be on the list of whitelisted urls for the integration.
ClientOrganizationNo|string|Optional parameter with the organization no of the organization you want to activate integration for. This can be used to filter the clients that the user have access to.
RedirectUri|Uri|An optional redirect uri that can be used to redirect the user back to the third party page after authentication.         This Uri have to be on the list of whitelisted urls for the integration.
