
ClientService
================

ClientService used to query and edit the [Client](GoApi.Client.Client.md) the client integration is connected to.         This service also provides a method for retrieving [ClientContact](GoApi.Client.ClientContact.md) (s) on the client.



### Constructors
Name | Description
:----|:------------
[ClientService(IAuthorization authorization, Uri baseUri)](GoApi.Client.ClientService.ClientService_IAuthorization_authorization__Uri_baseUri_.md)|Initializes a new instance of the [ClientService](GoApi.Client.ClientService.md) class. Obsolete and the constructor with GoApi.Core.Global.Settings.Host should be used instead of baseUri.
[ClientService(IAuthorization authorization, Host host)](GoApi.Client.ClientService.ClientService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ClientService](GoApi.Client.ClientService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Client.ClientService.Get__.md)|Get the [Client](GoApi.Client.Client.md) .
[GetContacts()](GoApi.Client.ClientService.GetContacts__.md)|Gets an array of [ClientContact](GoApi.Client.ClientContact.md) (s) on the client.
[Save(Client client)](GoApi.Client.ClientService.Save_Client_client_.md)|Saves changes to the [Client](GoApi.Client.Client.md) .


