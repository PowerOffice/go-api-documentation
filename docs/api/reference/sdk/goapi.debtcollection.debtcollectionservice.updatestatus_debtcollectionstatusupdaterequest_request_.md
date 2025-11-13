
public DebtCollectionCase UpdateStatus(DebtCollectionStatusUpdateRequest request)
=======
**Namespace:** GoApi.DebtCollection

Updates a debt collection case status by it's id and a status text.      The request will by default set the status of a debt collection case to Active, but can also close or reject cases by setting flags on the request.

### Syntax
```csharp
	public DebtCollectionCase UpdateStatus(DebtCollectionStatusUpdateRequest request)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
request|[DebtCollectionStatusUpdateRequest](GoApi.DebtCollection.DebtCollectionStatusUpdateRequest.md)|The debt collection status update request.


### Returns
Type | Description
:----|:------------
[DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md)|DebtCollectionCase.



