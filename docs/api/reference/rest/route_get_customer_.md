
GET Customer/
================

Gets a list of parties ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) filtered by the odata query

### Url
```http
https://api.poweroffice.net/Customer/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.Customer&gt;|No|DataPage&lt;Party&gt;.

### Request Signature
```http
GET /Customer/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "invoiceDeliveryType": InvoiceDeliveryType,
        "isVatFree": boolean,
        "discountPercent": number,
        "invoiceEmailAddress": string,
        "invoiceEmailAddressCC": string,
        "hourlyRate": number,
        "invoiceBrandingThemeCode": string,
        "paymentTerms": number,
        "useFactoring": boolean,
        "departmentCode": string,
        "sendReminders": boolean,
        "doNotAddLatePaymentFees": boolean,
        "doNotAddLatePaymentInterest": boolean,
        "reminderDeliveryType": InvoiceDeliveryType,
        "noticeOfDebtCollectionDeliveryType": InvoiceDeliveryType,
        "reminderEmailAddress": string,
        "ourReferenceEmployeeCode": number,
        "deliveryTerm": string,
        "transferToDebtCollectionAgency": boolean,
        "customerCreatedDate": Date,
        "useInvoiceFee": boolean,
        "name": string,
        "legalName": string,
        "contactPersonId": number,
        "vatNumber": string,
        "websiteUrl": string,
        "since": Date,
        "isPerson": boolean,
        "currencyCode": string,
        "id": number,
        "code": number,
        "externalCode": number,
        "mailAddress": {
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        },
        "streetAddresses": [{
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        }],
        "emailAddress": string,
        "phoneNumber": string,
        "isArchived": boolean,
        "lastChanged": Date,
        "createdDate": Date,
        "contactGroups": string,
        "createdFromImportJournalId": string (Guid),
        "firstName": string,
        "lastName": string,
        "dateOfBirth": Date,
        "socialSecurityNumber": string,
        "subledgerNumberSeriesId": string (Guid),
        "reportInternationalId": boolean,
        "internationalIdCountryCode": string,
        "internationalIdType": InternationalIdType,
        "internationalIdNumber": string,
        "externalImportReference": string
    }],
    "count": number,
    "success": boolean
}

```



