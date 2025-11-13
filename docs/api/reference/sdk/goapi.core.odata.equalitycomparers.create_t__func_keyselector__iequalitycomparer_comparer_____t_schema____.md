
public static EqualityComparer&lt;T&gt; Create&lt;T&gt;(Func&lt;T, GoApi.Core.OData.TKey&gt; keySelector, IEqualityComparer&lt;GoApi.Core.OData.TKey&gt; comparer = , T schema = )
=======
**Namespace:** GoApi.Core.OData

Creates an [EqualityComparer&lt;T&gt;](GoApi.Core.OData.T.md) from which compares objects of type T via the keys returned by the given key selector

### Syntax
```csharp
	public static EqualityComparer<T> Create<T>(Func<T, GoApi.Core.OData.TKey> keySelector, IEqualityComparer<GoApi.Core.OData.TKey> comparer = , T schema = )
```

### Parameters
Name | Type | Description
:----|:-----|:------------
keySelector|[Func&lt;T, GoApi.Core.OData.TKey&gt;](GoApi.Core.OData.T.md)|returns a key for a given T instance by which instances can be compared. This function need not handle nulls
comparer|[IEqualityComparer&lt;GoApi.Core.OData.TKey&gt;](GoApi.Core.OData.TKey.md)|an optional comparer specifying how keys are compared
schema|[T](GoApi.Core.OData.T.md)|optionally specifies an example "schema" object to enable type-inference for anonymous types


### Returns
Type | Description
:----|:------------
[EqualityComparer&lt;T&gt;](GoApi.Core.OData.T.md)|



