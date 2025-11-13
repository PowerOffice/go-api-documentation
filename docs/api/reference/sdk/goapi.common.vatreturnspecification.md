
VatReturnSpecification
================

Vat return specification used for giving extra vat information about the transaction. Will be reported from 2022 in the norwegian vat return.

### Fields
Name |Value | Description
:----|:-----|:-----------
None|0|None
Adjustment|1|Adjustments (Norwegian: Justering)
LossesOnClaims|2|Losses on claims (Norwegian: Tap på krav)
ReversalOfInputValueAddedTax|3|Reversal of input value added tax (Norwegian: Tilbakeføring av inngående merverdiavgift)
Withdrawals|4|Withdrawals (Norwegian: Uttak)
AdjustmentVatCompensationRealProperty|5|Adjustment of VAT compensation for real property (Norwegian: Justering av merverdiavgiftskompensasjon for fast eiendom)
PurchasesEligibleForCompensation|6|Purchases eligible for compensation (Norwegian: Kjøp med kompensasjonsrett). This specification can not be used by the API directly when creating vouchers/account transactions, but will appear on account transactions on outgoing vat on purchases on client's eligible for compensation.


### Constructors
Name | Description
:----|:------------
[VatReturnSpecification()](GoApi.Common.VatReturnSpecification.VatReturnSpecification__.md)|



