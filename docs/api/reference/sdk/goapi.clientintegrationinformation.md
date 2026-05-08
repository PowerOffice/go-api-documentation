ClientIntegrationInformation
================

Detailed information about the current client integration.
Reflects the decoded claims of the access token issued from `/OAuth/Token`.


### Properties
Name | Description
:----|:------------
[ActiveClientSubscriptions](GoApi.ClientIntegrationInformation.ActiveClientSubscriptions.md)|All active Go-subscriptions for the client. Available subscriptions: Accounting (Regnskap og faktura), TimeTracking (Timeregistrering), Payroll (Lønn), TravelExpense (Reiseregning), AccountingMicro (Regnskap Mikro), Quality, HolidayAndLeave (Ferie og fravær), CustomerCheck (kundesjekk.no), AccountingNano (Regnskap og faktura), YearEndSoleProprietorship (Skattemelding ENK).
[ClientId](GoApi.ClientIntegrationInformation.ClientId.md)|Id of the client.
[ClientName](GoApi.ClientIntegrationInformation.ClientName.md)|Name of the client.
[InvalidPrivileges](GoApi.ClientIntegrationInformation.InvalidPrivileges.md)|All invalid privileges for the integration based on the active Go-subscriptions for the client.
[UserId](GoApi.ClientIntegrationInformation.UserId.md)|Id of the integration user.
[ValidPrivileges](GoApi.ClientIntegrationInformation.ValidPrivileges.md)|All valid privileges for the integration based on the active Go-subscriptions for the client.