
AuthorizationStateExtended
================

Class AuthorizationStateExtended.


### Properties
Name | Description
:----|:------------
[AccessToken](GoApi.Core.OAuth.AuthorizationState.AccessToken.md)|
[AccessTokenExpirationUtc](GoApi.Core.OAuth.AuthorizationState.AccessTokenExpirationUtc.md)|
[AccessTokenIssueDateUtc](GoApi.Core.OAuth.AuthorizationState.AccessTokenIssueDateUtc.md)|
[RefreshToken](GoApi.Core.OAuth.AuthorizationState.RefreshToken.md)|

### Constructors
Name | Description
:----|:------------
[AuthorizationState()](GoApi.Core.OAuth.AuthorizationState.AuthorizationState__.md)|
[AuthorizationStateExtended(ITokenStore tokenStore, string clientKey)](GoApi.Core.AuthorizationStateExtended.AuthorizationStateExtended_ITokenStore_tokenStore__String_clientKey_.md)|

### Methods
Name | Description
:----|:------------
[SaveChanges()](GoApi.Core.AuthorizationStateExtended.SaveChanges__.md)|
[ToToken()](GoApi.Core.AuthorizationStateExtended.ToToken__.md)|Convert the authorization state to a token instance
[UpdateFromAuthorizationState(IAuthorizationState authorizationState, bool triggerSave = True)](GoApi.Core.AuthorizationStateExtended.UpdateFromAuthorizationState_IAuthorizationState_authorizationState__Boolean_triggerSave___True_.md)|Updates the state of from authorization.
[UpdateFromToken(Token token, bool triggerSave = True)](GoApi.Core.AuthorizationStateExtended.UpdateFromToken_Token_token__Boolean_triggerSave___True_.md)|Updates from token.


