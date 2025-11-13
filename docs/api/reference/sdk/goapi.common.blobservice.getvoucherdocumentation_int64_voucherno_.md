
public VoucherDocument GetVoucherDocumentation(long voucherNo)
=======
**Namespace:** GoApi.Common

Gets the voucher documentation.     It is recommended to use the GoApi.Common.BlobService.GetVoucherDocumentationList(System.Int64) to get all documents, as this function will only return a single documentation.

### Syntax
```csharp
	public VoucherDocument GetVoucherDocumentation(long voucherNo)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
voucherNo|long|The voucher no.


### Returns
Type | Description
:----|:------------
[VoucherDocument](GoApi.Common.VoucherDocument.md)|VoucherDocument



