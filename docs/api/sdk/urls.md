C# SDK - URL's
=================================

With the SDK you can target the Demo or Production environment. You will need a different integration
key for each environment.

Please read more about the environments in [Registration and Client activation.](/Common/Registration.md)

The configuration for the environment will determin which base URL's is used when calling the
underlying REST API.

To route your request to one of the supported environments you must set the global static
property GoApi.Global.Settings.Mode to either EndPointMode.Production (default) or EndPointMode.Demo

### Example

```csharp
// Before executing any requests to the API target the Demo environment
GoApi.Global.Settings.Mode = EndPointMode.Demo;

// Query a customer
var api = new Go(authorizationSettings);
var customer = api.Customer.Get().FirstOrDefault(c => c.VatNumber == vatNumber);
```
