
ValidationInfo
================

Exception that occurs when PowerOffice Go reports fail states.


### Properties
Name | Description
:----|:------------
[ErrorLogReference](GoApi.Core.ValidationInfo.ErrorLogReference.md)|Error reference that should be provided when contacting PowerOffice support
[Exception](GoApi.Core.ValidationInfo.Exception.md)|Exception type (as defined by PowerOffice Go)
[FieldsErrors](GoApi.Core.ValidationInfo.FieldsErrors.md)|This list is filled with field names and messages if         the exception is caused by misisng or invalid data in specific fields
[Summary](GoApi.Core.ValidationInfo.Summary.md)|The summary text message of the error.
[UniqueConstraintException](GoApi.Core.ValidationInfo.UniqueConstraintException.md)|This indicates that an error has occured due to unique constraints when trying to save an entity to the database.

### Constructors
Name | Description
:----|:------------
[ValidationInfo()](GoApi.Core.ValidationInfo.ValidationInfo__.md)|



