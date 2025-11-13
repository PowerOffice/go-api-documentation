
BasicInMemoryTokenStore
================

A very basic implementation of an ITokenStore. This token store saves tokens to a dictionary held in memory.          We highly recommend implementing your own token store to suit the needs of the application integrating to PowerOffice Go. This can be done by implementing ITokenStore.



### Constructors
Name | Description
:----|:------------
[BasicInMemoryTokenStore()](GoApi.BasicInMemoryTokenStore.BasicInMemoryTokenStore__.md)|

### Methods
Name | Description
:----|:------------
[GetToken(string clientKey)](GoApi.BasicInMemoryTokenStore.GetToken_String_clientKey_.md)|Gets the token.
[SaveToken(string clientKey, Token token)](GoApi.BasicInMemoryTokenStore.SaveToken_String_clientKey__Token_token_.md)|Saves the token.


