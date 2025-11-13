
GET Voucher/ExpenseVoucher/?options=&lt;options&gt;
================

Gets a list of [ExpenseVoucher](Type_ExpenseVoucher.md) filtered by odata query. This query will only return the expense created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.Expense .

### Url
```http
https://api.poweroffice.net/Voucher/ExpenseVoucher/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ExpenseVoucher](Type_ExpenseVoucher.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Voucher.ExpenseVoucher&gt;|No|DataPage&lt;ExpenseVoucher&gt;.

### Request Signature
```http
GET /Voucher/ExpenseVoucher/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "employeeCode": number,
        "dueDate": Date,
        "employeeBankAccountCode": string,
        "description": string,
        "currencyRate": number,
        "lines": [{
            "id": number,
            "amount": number,
            "projectCode": string,
            "departmentCode": string,
            "dim1Code": string,
            "dim2Code": string,
            "dim3Code": string,
            "locationCode": string,
            "productCode": string,
            "quantity": number,
            "accountCode": number,
            "vatCode": string,
            "vatReturnSpecification": VatReturnSpecification,
            "description": string,
            "externalImportLineReference": string,
            "agricultureDepartment": AgricultureDepartment
        }],
        "customMatchingReference": string,
        "id": string (Guid),
        "voucherDate": Date,
        "voucherNo": number,
        "importedVoucherNo": number,
        "projectCode": string,
        "departmentCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "locationCode": string,
        "currencyCode": string,
        "createdDate": Date,
        "isReversed": boolean,
        "externalImportReference": string,
        "hasImportedDocumentation": boolean,
        "saftSourceId": string,
        "saftBatchId": string
    }],
    "count": number,
    "success": boolean
}

```



