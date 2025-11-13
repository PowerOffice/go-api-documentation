
CustomDimensionValue
================

CustomDimensionValue representing a custom dimension value on the client.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Dimension.CustomDimensionValue.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Code](GoApi.Dimension.CustomDimensionValue.Code.md)|Gets or sets the code. This code must be unique for each custom dimension value.
[CreatedFromImportJournalId](GoApi.Dimension.CustomDimensionValue.CreatedFromImportJournalId.md)|Gets the created from import journal identifier. If the custom dimension value was created from an import, this property will contain the ID of the [Import](GoApi.Import.Import.md) that created this custom dimension value.
[CustomDimensionOrdinal](GoApi.Dimension.CustomDimensionValue.CustomDimensionOrdinal.md)|Gets or sets the custom dimension ordinal.      When creating a new CustomDimensionValue either CustomDimensionDefinitionCode or CustomDimensionOrdinal must be provided and CustomDimensionDefinitionCode takes precedence when both are provided
[ExternalReference](GoApi.Dimension.CustomDimensionValue.ExternalReference.md)|The External reference must be unique for all files for the given client. This is mandatory when creating a new document or adding a new version.         This is to prevent external systems by accident adding many instances of the same file.         Max length is 50 characters.
[IsActive](GoApi.Dimension.CustomDimensionValue.IsActive.md)|Gets or sets a value indicating whether this instance is active.
[LastChanged](GoApi.Dimension.CustomDimensionValue.LastChanged.md)|Gets the last changed date.
[Name](GoApi.Dimension.CustomDimensionValue.Name.md)|Gets or sets the name of the custom dimension value.

### Constructors
Name | Description
:----|:------------
[CustomDimensionValue()](GoApi.Dimension.CustomDimensionValue.CustomDimensionValue__.md)|



