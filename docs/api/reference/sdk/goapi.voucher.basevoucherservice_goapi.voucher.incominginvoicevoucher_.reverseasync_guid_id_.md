
public async virtual Task&lt;GoApi.Core.ApiResult&gt; ReverseAsync(Guid id)
=======
**Namespace:** GoApi.Voucher

Reverses a voucher previously posted asynchronously by the vouchers identifier.

### Syntax
```csharp
	public async virtual Task<GoApi.Core.ApiResult> ReverseAsync(Guid id)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
id|Guid|The Id of the voucher


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Core.ApiResult&gt;](GoApi.Core.ApiResult.md)|Task with true as result if the voucher was successfully reversed.



