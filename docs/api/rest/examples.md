Examples
========

# Get a customer

If the customer id is known (for instance 61), you can request the customer data like this:

```http
GET https://api.poweroffice.net/customer/61 HTTP/1.1
Authorization: Bearer [Access Key]
```

The response would then be something like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"data":
	{
		"id":"61"
		"code":"123",
		"name":"Example Customer",
		"vatNumber":"123456789"
	},
	"success":true
}
```

If the vat number is known the customer can be requested using oData query filter:

```http
GET https://api.poweroffice.net/customer/?$filter=(VatNumber%20eq%20'123456789') HTTP/1.1
Authorization: Bearer [Access Key]
```

The response will be something like:

```http
{
	"data": [
		{
			"name": "Accomodo Regnskap AS",
			"vatNumber": "989746111",
			"id": 1,
			"code": 15591,
		}
	],
	"success": true,
	"count": 1
}
```

For more on filtering, see: [Filtering](Filtering.md)

# Create a customer

To create a new customer you would use the `POST` verb. If the customer is determined to be an existing customer (i.e. when request contains id for existing entity), the customer will instead be updated.

```http
POST https://api.poweroffice.net/customer/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
	"code":"123",
	"name":"My first customer AS",
	"vatNumber":"123456789"
}
```

The request will return the full Customer data object after it has been updated:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"data":
	{
		"id":"61"
		"code":"123",
		"name":"My first customer AS",
		"vatNumber":"123456789"
	},
	"success":true
}
```

# Update customer

You can update a customer using the `POST` verb and sending in an existing ID:

```http
POST https://api.poweroffice.net/customer/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
	"id":"61",
	"name":"My only customer AS"
}
```

The request will return the full Customer data object after it has been updated:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"data":
	{
		"id":"61"
		"code":"123",
		"name":"My only customer AS",
		"vatNumber":"123456789"
	},
	"success":true
}
```

# Delete customer

To delete a customer you must use the `DELETE` verb. 

```http
DELETE https://api.poweroffice.net/customer/61 HTTP/1.1
Authorization: Bearer [Access Key]
```

The response after a success full delete would be something like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"success":true
}
```

Customers with any child data created can not be deleted. If this is the case, the customer property `archived` should be set to true instead, using the `POST` verb, to remove the customer from the list of active customers.

If you try to delete a customer that can not be deleted the response from the server will be something like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"validation":
	{
		summary:"The entity could not be deleted due to related data"
	},
	"success":false
}
```
