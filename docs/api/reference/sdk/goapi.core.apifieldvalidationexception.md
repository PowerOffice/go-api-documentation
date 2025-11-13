
ApiFieldValidationException
================

This exception occurs when some of the fields/properties in the data object         sent to the server didn't validate. Validation rules on the server         prevented the requested action to be completed.         More info is found in the ValidationInfo, and ValidationInfo.Fields properties.


### Properties
Name | Description
:----|:------------
[ValidationInfo](GoApi.Core.ApiValidationException.ValidationInfo.md)|Details about the exception.

### Constructors
Name | Description
:----|:------------
[ApiException(string message)](GoApi.Core.ApiException.ApiException_String_message_.md)|Initializes a new instance of the [ApiException](GoApi.Core.ApiException.md) class with a specified error message.
[ApiFieldValidationException(string message, ValidationInfo validationInfo)](GoApi.Core.ApiFieldValidationException.ApiFieldValidationException_String_message__ValidationInfo_validationInfo_.md)|Initializes a new instance of the [ApiValidationException](GoApi.Core.ApiValidationException.md) class.



