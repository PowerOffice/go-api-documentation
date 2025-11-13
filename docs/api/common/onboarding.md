# Onboarding

This documentation describes how integrations between a client and an integrating partner can be activated.

## Prerequisites
Before you can use clientAuth, you must first [register as a developer](/Common/Registration.md) to obtain an *application key*, and your callback and redirect URL's must be approved and added to whitelist by Go.

# Sequence
![Onboarding Sequence](https://gopublicfiles.blob.core.windows.net/docs/Onboarding.png)

#### 1. User requests activation of integration with PowerOffice Go.
#### 2. Third party server initiates a onboarding by requesting a temporary URL from PowerOffice Go.

    POST https://api.poweroffice.net/clientauth/createtemporaryurl
    {
        "applicationKey": "application key",
        "clientOrganizationNo": "123456789",
        "callbackUri": "https://callback.somedomain.com/12345",
        "redirectUri": "https://redirect.somedomain.com/12345"
    }

See [clientAuth](Reference/Rest/Service_ClientAuth.md) for specification.

#### 3. PowerOffice Go returns a temporary URL

    {
        "data": {
            "temporaryUrl": "https://go.poweroffice.net/auth/{token}",
            "validUntil": "2018-04-17 11:30:00"
        },
        "success": true
    }

#### 4. Third party redirects user to temporary url
#### 5. User navigates to temporary URL, authenticates and accepts integration.
The user must have the privilege settings->organization (or be an administrator) to be able to accept the integration.
#### 6. PowerOffice Go calls callbackUrl with the result of the onboarding.

    POST https://callback.somedomain.com/12345
    {
        "success": true,
        "client_key": "client key guid",
        "client_organization_number": "123456789",
        "client_name": "client name",
        "user_email": "user email",
        "reason": null,
        "reasonCode": null
    }

If the user denied authorization request, the callback payload will be:

    {
        "success": false,
        "reason": "User rejected authorization",
        "reasonCode": "UserRejected"
    }

If the user does not have permission to activate integration, the callback payload will be:

    {
        "success": false,
        "reason": "User's role not authorized to add integrations to the client",
        "reasonCode": "NoAccess"
    }

#### 7. Third party handles callback, and stores client key appropriately
Client key is a secret, and should be stored as such.
#### 8. PowerOffice Go redirects user
User is redirected to `redirectUri` if redirect url is specified. If not, the onboarding ends here.
#### 9. Third party site handles redirect.
Api should now be ready for use.

## Using onboarding with C# SDK (PowerOfficeGoSdk nuget)
To use the same onboarding functionality in c# you can create a new instance of the ClientAuthService directly (without going through the GoApi.Go object):

```csharp
{
    var applicationKey = new Guid("<Application key here>");
    var clientOrganizationNo = "123456789";
    var callbackUri = "https://callback.somedomain.com/12345";
    var redirectUri = "https://redirect.somedomain.com/12345";

    var clientAuthService = new ClientAuthService(Settings.EndPointMode.Demo); //Change to Settings.EndPointMode.Production for production environment

    var result = await clientAuthService.CreateTemporaryUrlAsync(applicationKey, clientOrganizationNo, new Uri(callbackUri), new Uri(redirectUri));

    Console.WriteLine($"Temp url {result.TemporaryUrl}, valid until: {result.ValidUntil}");
}
```