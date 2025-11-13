
public static EqualityComparer&lt;T&gt; Create&lt;T&gt;(Func&lt;T, T, System.bool&gt; equals, Func&lt;T, System.int&gt; hash = , T schema = )
=======
**Namespace:** GoApi.Core.OData

Creates a [EqualityComparer&lt;T&gt;](GoApi.Core.OData.T.md) from the given equals and hash functions

### Syntax
```csharp
	public static EqualityComparer<T> Create<T>(Func<T, T, System.bool> equals, Func<T, System.int> hash = , T schema = )
```

### Parameters
Name | Type | Description
:----|:-----|:------------
equals|[Func&lt;T, T, System.bool&gt;](GoApi.Core.OData.T.md)|a function which returns true if two instances of the given type are equal. This function need not handle nulls
hash|[Func&lt;T, System.int&gt;](GoApi.Core.OData.T.md)|an optional function which computes a hash code for the given type. This function need not handle nulls
schema|[T](GoApi.Core.OData.T.md)|optionally specifies an example "schema" object to enable type-inference for anonymous types


### Returns
Type | Description
:----|:------------
[EqualityComparer&lt;T&gt;](GoApi.Core.OData.T.md)|



