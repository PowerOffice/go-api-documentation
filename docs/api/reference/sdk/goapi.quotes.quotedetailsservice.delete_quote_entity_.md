
public virtual bool Delete(Quote entity)
=======
**Namespace:** GoApi.Quotes

Delete a [Quote](GoApi.Quotes.Quote.md) . Only quotes in state draft can be deleted.

### Syntax
```csharp
	public virtual bool Delete(Quote entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[Quote](GoApi.Quotes.Quote.md)|The entity.


### Returns
Type | Description
:----|:------------
bool|Quote delete success.

### Exceptions
Type | Description
:----|:-----------
System.Exception|Quote.Id has no value.



