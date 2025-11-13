
BasicTokenStore
================

Basic implementation of an ITokenStore.            This token store saves tokens to a file on disk, and encrypts the file if a crypto key has been provided.            If you want to implement your own saving and loading of tokens, you could derive this class      and implement the Save and Load methods.           If you need to use a different encryption scheme or support more advanced token stores you could implement ITokenStore instead.



### Constructors
Name | Description
:----|:------------
[BasicTokenStore(string fileName, string cryptoKey = )](GoApi.BasicTokenStore.BasicTokenStore_String_fileName__String_cryptoKey____.md)|Initializes a new instance of the [BasicTokenStore](GoApi.BasicTokenStore.md) class.

### Methods
Name | Description
:----|:------------
[GetToken(string clientKey)](GoApi.BasicTokenStore.GetToken_String_clientKey_.md)|Gets the token.
[SaveToken(string clientKey, Token token)](GoApi.BasicTokenStore.SaveToken_String_clientKey__Token_token_.md)|Saves the token.


