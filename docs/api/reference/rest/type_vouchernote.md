
VoucherNote (VoucherNote)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CreatedByUserId|string (Guid)|Gets the created by user id.
CreatedDate|Date|Gets the date this entity was created.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
LastChangedByUserId|string (Guid)|Gets the last updated by id.
LastChangedDate|Date|Gets the date this entity was last updated.
Text|string|Gets or sets the note content.
VoucherId|string (Guid)|Gets or sets the id of the [OutgoingInvoice](Type_OutgoingInvoice.md) or [RecurringInvoice](Type_RecurringInvoice.md) this note is connected to.
