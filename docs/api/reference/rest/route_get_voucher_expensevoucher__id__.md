
GET Voucher/ExpenseVoucher/{id}/
================

Gets the specified [ExpenseVoucher](Type_ExpenseVoucher.md) by its identifier.         Will throw an exception if the [ExpenseVoucher](Type_ExpenseVoucher.md) does not exist, or it has not been created by the integration querying this method.

### Url
```http
https://api.poweroffice.net/Voucher/ExpenseVoucher/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ExpenseVoucher](Type_ExpenseVoucher.md)|No|ExpenseVoucher.

### Request Signature
```http
GET /Voucher/ExpenseVoucher/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



