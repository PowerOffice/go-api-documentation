API Calls, Filtering
====================

Filters for request follows the [oData spesification](http://msdn.microsoft.com/en-us/library/azure/dd894031.aspx) for oData query options.

To filter a request, add the $filter parameter to the request. The filter must be enclosed in parenthesis.

# Overview

## Common operators

Operator			| URI expression
--------------------|---------------
Equal	 			| eq
GreaterThan 		| gt
GreaterThanOrEqual	| ge
LessThan			| lt
LessThanOrEqual		| le
NotEqual			| ne
And					| and
Not					| not
Or					| or

## Query String Encoding

The following characters must be encoded if they are to be used in a query string:

Character			| Encoded
--------------------|---------------
Forward slash (/)	| %2F
Question mark (?)	| %3F
Colon (:)			| %3A
'At' symbol (@)		| %40
Ampersand (&)		| %26
Equals sign (=)		| %3D
Plus sign (+)		| %2B
Comma (,)			| %2C
Dollar sign ($)		| %24

## Fields
All properties returned for a data object can be filtered. 

> *** IMPORTANT NOTE ON CASING IN FILTERS ***
> Filter fields must be in ["Pascal Case" casing](https://msdn.microsoft.com/en-us/library/x2dbyw72%28v=vs.71%29.aspx), even though the data object is returned with camel casing.

It is not possible to select specific properties to be returned in the response body. All properties with value (not NULL) will always be returned in the response.

## Results

All results of a filtered query will be in the format

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"since": "2015-11-26",
		},
		{
			"id":"62"
			"code":"321",
			"name":"My second customer AS",
			"vatNumber":"987654321",
			"since": "2015-11-26",
		},
		"success":true, // The request was successfull 
		"count": 2		// Two records was returned
	}

## Other modificators

### Order the result set ascending or descending (Must be included when using $skip and/or $top)	 

	$orderby=Name asc

**REMARKS: Note that orderby must be lowercase, and properties that should be ordered must be in Pascal casing**

### Skip records in the result set

Do not return the first 10 records in the result set:

 	$skip=10

**REMARKS: Note that skip will not work without $top and $orderby. There are only some few places where $orderby is not required, but we recommend always including it.**

### Max number of records to return

Return a maximum of 10 records:

	$top=10

**REMARKS: Note that there is no standard order on most queries in the API. If implementing paging (using $skip and/or $top), and $orderby modification should always be included.**

Note that the count property in the result will contain the total number of records in the filtered result set independant of $skip and $top


## Examples

### Filter Trial Balance using top, skip and orderby

	GET https://api.poweroffice.net/reporting/trialbalance?$top=2&$skip=2&$orderby=AccountCode HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data": [
			{
				"accountCode": 1030,
				"accountName": "Patenter",
				"balance": 0.0,
				"budget": 0.0
			},
			{
				"accountCode": 1040,
				"accountName": "Lisenser",
				"balance": 0.0,
				"budget": 0.0
			}
		],
		"success": true,
		"count": 336
	}


### Filter customer on VatNumber:

	GET https://api.poweroffice.net/customer?$filter=(VatNumber eq '123456789') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"since": "2015-11-26",
			...
		},
		"success":true,
		"count": 1
	}

### Filter customers since a date:

	GET https://api.poweroffice.net/customer?$filter=(Since ge DateTime'2015-11-26') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"since": "2015-11-26",
			...
		},
		...
		"success":true,
		"count": 123
	}

### Filter customers by lastchanged (datetimeoffset)
> Note that all created and last changed dates are given in datetimeoffset, and must hence be specified as such in odata filter

	GET https://api.poweroffice.net/customer?$filter=(LastChanged gt DateTimeOffset'2023-01-01') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"lastChanged": "2023-10-25T07:58:57 +00:00",
			...
		},
		...
		"success":true,
		"count": 123
	}

### Filter customers on name:
> Note that filters is case sensitive. To perform a case insensitive search you must use the `tolower` function:

 	GET https://api.poweroffice.net/customer?$filter=(tolower(Name) eq 'my first customer as') HTTP/1.1
	Authorization: Bearer [Access Key]


### Filter customers names starting with:

 	GET https://api.poweroffice.net/customer?$filter=(startswith(Name, 'My ') eq true) HTTP/1.1
	Authorization: Bearer [Access Key]

Starts with, case insensitive:

 	GET https://api.poweroffice.net/customer?$filter=(startswith(tolower(Name), 'my ') eq true) HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"since": "2015-11-26",
			...
		},
		{
			"id":"62"
			"code":"321",
			"name":"My second customer AS",
			"vatNumber":"987654321",
			"since": "2015-11-26",
			...
		},
		"success":true,
		"count": 2
	}


### Filter customers on name and date:

	GET https://api.poweroffice.net/customer?$filter=(Name eq 'My first customer AS' and Since ge DateTime'2015-11-26') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data":
		{
			"id":"61"
			"code":"123",
			"name":"My first customer AS",
			"vatNumber":"123456789",
			"since": "2015-11-26",
			...
		},
		"success":true,
		"count": 1
	}

### Filter timetracking entries by employee code, activity code, fromdate and todate

	GET https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/?fromdate=2021-10-01&todate=2025-10-01&$filter=(EmployeeCode eq 1 and ActivityCode eq '902') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
    	"data": [
			{
				"id": 8,
				"activityCode": "902",
				"projectCode": "1",
				"departmentCode": "10",
				"employeeCode": 1,
				"date": "2024-04-07",
				"hours": 2.0000,
				"isLocked": false,
				"comment": "TEST",
				"internalComment": "",
				"lastChanged": "2025-11-04T09:57:29 +00:00",
				...
			}
    ],
    "success": true,
    "count": 1
	}

### Filter timetracking entries by employee code and date

	GET https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/?$filter=(EmployeeCode eq 1 and Date eq datetime'2019-09-03') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data": [
			{
				"id": 6,
				"activityCode": "700",
				"projectCode": "1",
				"departmentCode": "10",
				"employeeCode": 1,
				"date": "2024-05-03",
				"hours": 2.0000,
				"isLocked": false,
				"comment": "TEST",
				"internalComment": "",
				"lastChanged": "2025-11-04T09:55:09 +00:00",
				...
			}
		],
		"success": true,
		"count": 1
	}

### Filter timetracking entries by lastchanged

	GET https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/?$filter=(LastChanged ge DateTimeOffset'2025-11-04T09:56:10') and (LastChanged le DateTimeOffset'2025-11-04T11:07:37') HTTP/1.1
	Authorization: Bearer [Access Key]

Result:

	HTTP/1.1 200 OK
	Content-Type: application/json; charset=utf-8

	{
		"data": [
			{
				"id": 8,
				"activityCode": "902",
				"projectCode": "1",
				"departmentCode": "10",
				"employeeCode": 1,
				"date": "2024-04-07",
				"hours": 2.0000,
				"isLocked": false,
				"comment": "TEST",
				"internalComment": "",
				"lastChanged": "2025-11-04T09:57:29 +00:00",
				...
			}
		],
		"success": true,
		"count": 1
	}