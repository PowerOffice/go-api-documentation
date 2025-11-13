
SalesOrder (SalesOrder)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BrandingThemeCode|string|Gets or sets the code of the [BrandingTheme](Type_BrandingTheme.md) to be used when sending this order.
ContactPersonId|number|Gets or sets the contact person identifier. This is the ID of a [ContactPerson](Type_ContactPerson.md) previously created through [CustomerService](Type_CustomerService.md) .
ContractNo|string|Gets or sets the contract no.
Currency|string|Gets or sets the currency.         If set to *null* , default currency code on the client will be used.
CustomerCode|number|Gets or sets the code of the [Customer](Type_Customer.md) to receive this order.
DeliveryDate|Date|Gets or sets the delivery date.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .
Id|number|Gets or sets the identifier. This is assigned by PowerOffice Go when saving.
MergeWithPreviousOrder|boolean|Gets or sets a value indicating whether [merge with previous order]. If set to *true* , this SalesOrder will be         merged with another SalesOrder to the same customer if any. Defaults to *false* .
OrderDate|Date|Gets or sets the order date.
OrderNo|number|Gets or sets the order number.
PaymentTerms|number|Gets or sets the payment terms. This is the number of days until the invoice is due after it's sent.         If set to *null* , default payment term on customer will be used.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .
PurchaseOrderNo|string|Gets or sets the purchase order no.
RecurringInfo|[SalesOrderRecurringInfo](Type_SalesOrderRecurringInfo.md)|Gets or sets the recurring information ( [SalesOrderRecurringInfo](Type_SalesOrderRecurringInfo.md) ). Should only be provided if you want to create this sales order as an         Recurring Invoice (repeating). Defaults to *null* .
Reference|string|Gets or sets a Reference. This field is mapped to Purchase Order Number ( GoApi.SalesOrders.SalesOrder.PurchaseOrderNo and still remains due to backward compatibility.         If PurchaseOrderNo contains a value, this field is ignored.
SalesOrderLines|[SalesOrderLine](Type_SalesOrderLine.md)|Gets or sets the sales order lines ( [SalesOrderLine](Type_SalesOrderLine.md) ).
SalesPersonEmployeeNo|number|Gets or sets the code of the [Employee](Type_Employee.md) that is the sales person on this order.
