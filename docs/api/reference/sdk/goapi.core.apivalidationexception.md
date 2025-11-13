
ApiValidationException
================

Exception that occurs when the server was unable to complete the requested operation.         The ValidationInfo property can contain further information on the error.


### Properties
Name | Description
:----|:------------
[ValidationInfo](GoApi.Core.ApiValidationException.ValidationInfo.md)|Details about the exception.

### Constructors
Name | Description
:----|:------------
[ApiException(string message)](GoApi.Core.ApiException.ApiException_String_message_.md)|Initializes a new instance of the [ApiException](GoApi.Core.ApiException.md) class with a specified error message.
[ApiValidationException(string message, ValidationInfo validationInfo)](GoApi.Core.ApiValidationException.ApiValidationException_String_message__ValidationInfo_validationInfo_.md)|Initializes a new instance of the [ApiValidationException](GoApi.Core.ApiValidationException.md) class.



