
public virtual bool UpdateRemittanceInfo(RemittanceInfoRequest entity)
=======
**Namespace:** GoApi.Voucher

Updates whether the invoice should use remittance or not, and related payment properties.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         If remittance is true, the invoice becomes payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.

### Syntax
```csharp
	public virtual bool UpdateRemittanceInfo(RemittanceInfoRequest entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[RemittanceInfoRequest](GoApi.Voucher.RemittanceInfoRequest.md)|The data object.


### Returns
Type | Description
:----|:------------
bool|bool where true if voucher was successfully updated, false if no changes performed.



