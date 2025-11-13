
RemittanceInfoRequest (RemittanceInfoRequest)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Amount|number|The amount that will be paid. Cannot be a negative number, or larger than total amount on the voucher.
Cid|string|The Customer Identification Code (Norwegian: KID).
ClientBankAccountCode|string|The bank account code of the [Client](Type_Client.md) that should be paid from. If not provided, the CurrentBankAccount set in ClientSettings will be used.         Bank account code is required if UseRemittance is true.
HistoryDescription|string|Description of the current update that will be shown on invoice history in GO.
InvoiceId|string (Guid)|The identifier of the invoice to update. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
OnHold|boolean|Sets if the invoice payment should be on hold.
PaymentDate|Date|The payment date. If not provided, the due date of the incoming invoice voucher will be used.         Payment date is required if UseRemittance is true.
SupplierBankAccountCode|string|The bank account code of the [Supplier](Type_Supplier.md) that should be paid to. If not provided, the ReceivableBankAccount provided when invoice was posted will be used.         Bank account code is required if UseRemittance is true.
UseRemittance|boolean|Sets whether the invoice should use remittance or not.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         Setting this property to true makes the invoice payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.
