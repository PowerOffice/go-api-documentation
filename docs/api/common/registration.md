Registration and Client activation
==================================

## Register as a PowerOffice Go user

You must have a PowerOffice Go user before you can register your application.

Currently you can request access to PowerOffice Go [here](https://poweroffice.no/prov-gratis/) or an existing user must invite you. If you want a test user for API testing, don't hesitate to contact us on [go-api@poweroffice.no](mailto:go-api@poweroffice.no).


## Registering your application

Each application that will connect to PowerOffice Go using the Go-Api must be registered before it can access the api functions.

Once your PowerOffice Go user has been activated, you can register an application and receive an *application key*.

>Currenly you must email us to receive an application key. To apply for an application to use PowerOffice Go API, send an e-mail to [go-api@poweroffice.no](mailto:go-api@poweroffice.no) stating your company name, system name, who you're representing, contact e-mail address and the purpose of the integration.

### Application Key

When you register your application you will receive an *application key*. This key is used to request authorization when performing API calls.

## Client activation

To allow your application to access a PowerOffice Go client the administrator of the client must grant your application access rights by activating it in the PowerOffice Go *extensions settings*.

### Client Key
When the user has activated your application, the user will see a *client key* in PowerOffice Go. This key identifies the PowerOffice Go client for your application.

The user must provide you with this key.

### Demo Environment vs. Production Environment

When you first register with us for an integration key you will get a key and a client in our Demo environment.

The demo environment implements a lot of safeguards and simulators allowing you to test
most functions without the risk of eg. sending a test invoice to a real supplier.

When your integration is ready for production you should request a new application key for
the production environment, and switch the base URL's to point to the production
environment.

Please read about URL's in Demo and Production Environment in the chapters below:

[REST: URL's in Demo and Production Environment](/Rest/Urls.md)

[C# SDK: Demo and Production Environment Configuration](/Sdk/Urls.md)