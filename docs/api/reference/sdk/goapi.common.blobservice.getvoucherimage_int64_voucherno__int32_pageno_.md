
public Stream GetVoucherImage(long voucherNo, int pageNo)
=======
**Namespace:** GoApi.Common

Get the image of a single page on a voucher as jpeg stream.

### Syntax
```csharp
	public Stream GetVoucherImage(long voucherNo, int pageNo)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
voucherNo|long|The voucher no of the voucher.
pageNo|int|The page number of the voucher pdf.


### Returns
Type | Description
:----|:------------
System.IO.Stream|A Stream containing the image data.



