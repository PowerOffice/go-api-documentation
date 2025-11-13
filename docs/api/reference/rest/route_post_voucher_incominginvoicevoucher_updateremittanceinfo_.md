
POST Voucher/IncomingInvoiceVoucher/UpdateRemittanceInfo/
================

Updates whether the invoice should use remittance or not, and related payment properties.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         If remittance is true, the invoice becomes payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.

### Url
```http
https://api.poweroffice.net/Voucher/IncomingInvoiceVoucher/UpdateRemittanceInfo/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[RemittanceInfoRequest](Type_RemittanceInfoRequest.md)|No|The remittance info request

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Success where true if voucher was updated or no changes performed, otherwise false.

### Request Signature
```http
POST /Voucher/IncomingInvoiceVoucher/UpdateRemittanceInfo/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "invoiceId": string (Guid),
    "useRemittance": boolean,
    "supplierBankAccountCode": string,
    "clientBankAccountCode": string,
    "paymentDate": Date,
    "amount": number,
    "cid": string,
    "onHold": boolean,
    "historyDescription": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "data": object,
        "success": boolean,
        "validation": {
            "errorLogReference": string,
            "summary": string,
            "exception": string,
            "exceptionDetails": object,
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[]
        },
        "count": number
    },
    "success": boolean
}

```



