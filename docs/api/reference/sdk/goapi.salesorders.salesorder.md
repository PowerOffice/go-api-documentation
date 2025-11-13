
SalesOrder
================

SalesOrder representing a sales order used when importing ( [Import](GoApi.Import.Import.md) ).         Before starting to import sales orders, you need to make sure you've created all the customers and products the orders uses.         Sales Order is no longer recommended for use when importing invoices to be sent from PowerOffice Go. [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) is the preferred data object to be used.


### Properties
Name | Description
:----|:------------
[Id](GoApi.SalesOrders.SalesOrder.Id.md)|Gets or sets the identifier. This is assigned by PowerOffice Go when saving.
[BrandingThemeCode](GoApi.SalesOrders.SalesOrder.BrandingThemeCode.md)|Gets or sets the code of the [BrandingTheme](GoApi.Invoices.BrandingTheme.md) to be used when sending this order.
[ContactPersonId](GoApi.SalesOrders.SalesOrder.ContactPersonId.md)|Gets or sets the contact person identifier. This is the ID of a [ContactPerson](GoApi.Party.ContactPerson.md) previously created through [CustomerService](GoApi.Party.CustomerService.md) .
[ContractNo](GoApi.SalesOrders.SalesOrder.ContractNo.md)|Gets or sets the contract no.
[Currency](GoApi.SalesOrders.SalesOrder.Currency.md)|Gets or sets the currency.         If set to *null* , default currency code on the client will be used.
[CustomerCode](GoApi.SalesOrders.SalesOrder.CustomerCode.md)|Gets or sets the code of the [Customer](GoApi.Party.Customer.md) to receive this order.
[DeliveryDate](GoApi.SalesOrders.SalesOrder.DeliveryDate.md)|Gets or sets the delivery date.
[DepartmentCode](GoApi.SalesOrders.SalesOrder.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .
[MergeWithPreviousOrder](GoApi.SalesOrders.SalesOrder.MergeWithPreviousOrder.md)|Gets or sets a value indicating whether [merge with previous order]. If set to *true* , this SalesOrder will be         merged with another SalesOrder to the same customer if any. Defaults to *false* .
[OrderDate](GoApi.SalesOrders.SalesOrder.OrderDate.md)|Gets or sets the order date.
[OrderNo](GoApi.SalesOrders.SalesOrder.OrderNo.md)|Gets or sets the order number.
[PaymentTerms](GoApi.SalesOrders.SalesOrder.PaymentTerms.md)|Gets or sets the payment terms. This is the number of days until the invoice is due after it's sent.         If set to *null* , default payment term on customer will be used.
[ProjectCode](GoApi.SalesOrders.SalesOrder.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .
[PurchaseOrderNo](GoApi.SalesOrders.SalesOrder.PurchaseOrderNo.md)|Gets or sets the purchase order no.
[RecurringInfo](GoApi.SalesOrders.SalesOrder.RecurringInfo.md)|Gets or sets the recurring information ( [SalesOrderRecurringInfo](GoApi.SalesOrders.SalesOrderRecurringInfo.md) ). Should only be provided if you want to create this sales order as an         Recurring Invoice (repeating). Defaults to *null* .
[Reference](GoApi.SalesOrders.SalesOrder.Reference.md)|Gets or sets a Reference. This field is mapped to Purchase Order Number ( GoApi.SalesOrders.SalesOrder.PurchaseOrderNo and still remains due to backward compatibility.         If PurchaseOrderNo contains a value, this field is ignored.
[SalesOrderLines](GoApi.SalesOrders.SalesOrder.SalesOrderLines.md)|Gets or sets the sales order lines ( [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) ).
[SalesPersonEmployeeNo](GoApi.SalesOrders.SalesOrder.SalesPersonEmployeeNo.md)|Gets or sets the code of the [Employee](GoApi.Party.Employee.md) that is the sales person on this order.

### Constructors
Name | Description
:----|:------------
[SalesOrder(long orderNo, DateTime orderDate, long customerCode)](GoApi.SalesOrders.SalesOrder.SalesOrder_Int64_orderNo__DateTime_orderDate__Int64_customerCode_.md)|Initializes a new instance of the [SalesOrder](GoApi.SalesOrders.SalesOrder.md) class.

### Methods
Name | Description
:----|:------------
[AddSalesOrderLine(SalesOrderLine salesOrderLine)](GoApi.SalesOrders.SalesOrder.AddSalesOrderLine_SalesOrderLine_salesOrderLine_.md)|Adds the [SalesOrderLine](GoApi.SalesOrders.SalesOrderLine.md) to this sales order.


