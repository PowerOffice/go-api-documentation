
ODataEntity
================

A dynamic entity type to provide support for dynamic client queries



### Constructors
Name | Description
:----|:------------
[ODataEntity(IEnumerable&lt;System.Collections.Generic.KeyValuePair&lt;System.string, System.object&gt;&gt; values)](GoApi.Core.OData.ODataEntity.ODataEntity_IEnumerable_values_.md)|Constructs a entity from the given set of key value pairs

### Methods
Name | Description
:----|:------------
[Denormalize(Expression expression)](GoApi.Core.OData.ODataEntity.Denormalize_Expression_expression_.md)|Reverts changes to an expression made by GoApi.Core.OData.ODataEntity.Normalize(System.Linq.Expressions.Expression)
[Get(string propertyName)](GoApi.Core.OData.ODataEntity.Get_String_propertyName_.md)|Gets the strongly-typed value of the named property. This method can be used in OData queries as long as &lt;paramref name="propertyName"&gt;&lt;/paramref&gt; is a constant or local variable capture
[Normalize(Expression expression)](GoApi.Core.OData.ODataEntity.Normalize_Expression_expression_.md)|Replaces calls to GoApi.Core.OData.ODataEntity.Get``1(System.String) with property accesses


