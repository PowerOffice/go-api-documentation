
SalesOrderLine
================

SalesOrderLine representing a line on a [SalesOrder](GoApi.SalesOrders.SalesOrder.md) SalesOrderLines without GoApi.SalesOrders.SalesOrderLine.ProductCode will be generated as a description line. So make sure that all sales order lines with amount has ProductCode.


### Properties
Name | Description
:----|:------------
[Id](GoApi.SalesOrders.SalesOrderLine.Id.md)|Gets or sets the identifier of the line. This is assigned by PowerOffice Go when saving.
[DepartmentCode](GoApi.SalesOrders.SalesOrderLine.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .
[Description](GoApi.SalesOrders.SalesOrderLine.Description.md)|Gets or sets the description.
[Discount](GoApi.SalesOrders.SalesOrderLine.Discount.md)|Gets or sets the discount.
[ProductCode](GoApi.SalesOrders.SalesOrderLine.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) .
[ProjectCode](GoApi.SalesOrders.SalesOrderLine.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .
[Quantity](GoApi.SalesOrders.SalesOrderLine.Quantity.md)|Gets or sets the quantity.
[SalesOrderLineUnitPrice](GoApi.SalesOrders.SalesOrderLine.SalesOrderLineUnitPrice.md)|Optional property: Gets or sets the sales order line unit price. If no sales order line unit price is set it will         default to the Product's price.
[SortOrder](GoApi.SalesOrders.SalesOrderLine.SortOrder.md)|Gets or sets the sort order of the line.
[VatReturnSpecification](GoApi.SalesOrders.SalesOrderLine.VatReturnSpecification.md)|Gets or sets the vat return specification.

### Constructors
Name | Description
:----|:------------
[SalesOrderLine()](GoApi.SalesOrders.SalesOrderLine.SalesOrderLine__.md)|Initializes a new instance of the [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) class. Default constructor.
[SalesOrderLine(string description)](GoApi.SalesOrders.SalesOrderLine.SalesOrderLine_String_description_.md)|Initializes a new instance of the [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) class.         This constructor should be used when creating [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) containing only free text.
[SalesOrderLine(string productCode, decimal quantity, Nullable&lt;System.decimal&gt; discount = )](GoApi.SalesOrders.SalesOrderLine.SalesOrderLine_String_productCode__Decimal_quantity__Nullable_discount____.md)|Initializes a new instance of the [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) class.         This constructor should be used when creating [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) containing sales lines.



