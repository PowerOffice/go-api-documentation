
PayItem (PayItem)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Benefit|string|Gets the benefit type. This is the benefit type reported on A02 when sending A-Melding to Altinn.
Code|string|Gets the code. This is an unique identification of the pay item.
Description|string|Gets the description. This is the benefit description reported on A02 when sending A-Melding to Altinn.
Id|string (Guid)|Gets the ID of the pay item.
IsActive|boolean|Gets a value indicating whether this pay item is active.
Name|string|Gets the name of the pay item.
ProcessingType|[PayItemProcessingType](Type_PayItemProcessingType.md)|Gets the processing type of the pay item.     They contain rules about how properties on the [SalaryLine](Type_SalaryLine.md) should be calculated among other things.
