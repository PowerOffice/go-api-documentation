
RemittanceInfoRequest
================

Used to make changes to an invoice payment.


### Properties
Name | Description
:----|:------------
[InvoiceId](GoApi.Voucher.RemittanceInfoRequest.InvoiceId.md)|The identifier of the invoice to update. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[Amount](GoApi.Voucher.RemittanceInfoRequest.Amount.md)|The amount that will be paid. Cannot be a negative number, or larger than total amount on the voucher.
[Cid](GoApi.Voucher.RemittanceInfoRequest.Cid.md)|The Customer Identification Code (Norwegian: KID).
[ClientBankAccountCode](GoApi.Voucher.RemittanceInfoRequest.ClientBankAccountCode.md)|The bank account code of the [Client](GoApi.Client.Client.md) that should be paid from. If not provided, the CurrentBankAccount set in ClientSettings will be used.         Bank account code is required if UseRemittance is true.
[HistoryDescription](GoApi.Voucher.RemittanceInfoRequest.HistoryDescription.md)|Description of the current update that will be shown on invoice history in GO.
[OnHold](GoApi.Voucher.RemittanceInfoRequest.OnHold.md)|Sets if the invoice payment should be on hold.
[PaymentDate](GoApi.Voucher.RemittanceInfoRequest.PaymentDate.md)|The payment date. If not provided, the due date of the incoming invoice voucher will be used.         Payment date is required if UseRemittance is true.
[SupplierBankAccountCode](GoApi.Voucher.RemittanceInfoRequest.SupplierBankAccountCode.md)|The bank account code of the [Supplier](GoApi.Party.Supplier.md) that should be paid to. If not provided, the ReceivableBankAccount provided when invoice was posted will be used.         Bank account code is required if UseRemittance is true.
[UseRemittance](GoApi.Voucher.RemittanceInfoRequest.UseRemittance.md)|Sets whether the invoice should use remittance or not.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         Setting this property to true makes the invoice payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.

### Constructors
Name | Description
:----|:------------
[RemittanceInfoRequest()](GoApi.Voucher.RemittanceInfoRequest.RemittanceInfoRequest__.md)|



