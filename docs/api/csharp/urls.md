C# SDK - URL's
=================================

With the SDK you can target the Demo or Production environment. You will need a different integration
key for each environment.

Please read more about the environments in [Registration and Client activation.](/Common/Registration.md)

The configuration for the environment will determine which base URL's is used when calling the
underlying REST API.

To route your request to one of the supported environments you must set the end point host of the 
AuthorizationSettings to either EndPointMode.Production (default) or EndPointMode.Demo

### Example

```csharp
// Set up authorization settings against the Demo environment
var authorizationSettings = new AuthorizationSettings
{
    ApplicationKey = "<You Application Key Here>",
    ClientKey = "<PowerOffice Go Client Key Here>",
    TokenStore = new BasicInMemoryTokenStore(),
    EndPointHost = Settings.EndPointMode.Demo // For authorization against the production environment - Change this to Settings.EndPointMode.Production
};

// Initialize the PowerOffice Go API and request authorization
var api = Go.CreateAsync(authorizationSettings).GetAwaiter().GetResult();

// Perform API call
var vatCodeList = api.VatCode.Get().ToList();
```