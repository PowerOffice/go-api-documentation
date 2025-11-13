
GET Quality/QualityAssignment/
================

Get a list of [AssignmentAgreement](Type_AssignmentAgreement.md) by an OData query.

### Url
```http
https://api.poweroffice.net/Quality/QualityAssignment/
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
DataPage&lt;GoApi.Quality.AssignmentAgreement&gt;|No|[AssignmentAgreement](Type_AssignmentAgreement.md) .

### Request Signature
```http
GET /Quality/QualityAssignment/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "customerAccountCode": number,
        "contactPersonId": number,
        "description": string,
        "managerCode": number,
        "keyAccountManagerCode": number,
        "associateCode": number,
        "startDate": Date,
        "endDate": Date,
        "signedDate": Date,
        "revisedDate": Date,
        "noticePeriod": number,
        "riskAssessmentPerformed": Date,
        "assignmentRiskLevel": AssignmentRiskLevel,
        "riskAssessmentComment": string,
        "shareholderListConfirmedDate": Date,
        "shareholderListConfirmed": boolean,
        "shareholderListConfirmedComment": string,
        "creditCheckPerformed": Date,
        "creditCheckCompleted": boolean,
        "totalCreditScore": number,
        "creditScore": number,
        "creditCheckComment": string,
        "hasExpertise": boolean,
        "hasCapacity": boolean,
        "isEthicallySound": boolean,
        "isInterestingForTheAgency": boolean,
        "companyCredentials": AssignmentCompanyCredentialsType,
        "customerControlledDate": Date,
        "customerControlledByCode": number,
        "proxySignatorId": number,
        "authorizationDocumentation": AssignmentAuthorizationDocumentType,
        "proxyIdentification": AssignmentProxyIdentificationType,
        "proxyControlledByExternalParties": boolean,
        "proxyControlledByExternalName": string,
        "proxyControlledByCode": number,
        "proxyControlledDate": Date,
        "accountingSystem": string,
        "accountingSystemIsPowerOfficeGo": boolean,
        "licenseeIsCustomer": boolean,
        "incomingInvoicesScannedByCustomer": boolean,
        "systemUsageInvoicedToCustomer": boolean,
        "systemAdministeredByCustomer": boolean,
        "outgoingInvoicedGeneratedByPowerOfficeGo": boolean,
        "outgoingInvoicedGeneratedBy": string,
        "outgoingInvoicesReceivedBy": AssignmentOutgoingInvoicesReceivedByType,
        "payrollSystem": string,
        "payrollSystemIsPowerOfficeGo": boolean,
        "wageBasisReceivedBy": AssignmentOutgoingInvoicesReceivedByType,
        "annualStatementSystem": string,
        "annualDispoitionsReceivedBy": AssignmentOutgoingInvoicesReceivedByType,
        "hasCashSales": boolean,
        "cashSalesRegisteredIn": string,
        "checkoutSystemRoutine": string,
        "cashJournalSavedElectronically": boolean,
        "cashRegisterDataAccessedVia": AssignmentCashRegisterDataAccessedViaType,
        "isNewlyEstablished": boolean,
        "previousAccountantName": string,
        "previousAccountantEmail": string,
        "previousAccountantRequestedDate": Date,
        "previousAccountantResponse": string,
        "demandsStatus": PreviousAccountantDemandsStatus,
        "assignmentAgreementRiskQuestionnaires": [{
            "id": number,
            "companyIndustryMoneyLaundering": QuestionnaireAnswer,
            "companyCashSales": QuestionnaireAnswer,
            "companyExplanation": string,
            "businessPurposeUnderstandable": QuestionnaireAnswer,
            "businessPurposeComplex": QuestionnaireAnswer,
            "businessPurposeNaturalOrganization": QuestionnaireAnswer,
            "businessPurposeOperationalDiscrepancies": QuestionnaireAnswer,
            "businessPurposeExplanation": string,
            "companyFiguresStockCompany": boolean,
            "companyFiguresShareCapital": number,
            "companyFiguresEquityRatio": number,
            "companyFiguresSoundEquity": QuestionnaireAnswer,
            "companyFiguresAcceptableLiquidity": QuestionnaireAnswer,
            "companyFiguresExplanation": string,
            "foreignAffiliationOwnersAbroad": QuestionnaireAnswer,
            "foreignAffiliationAnyPeps": QuestionnaireAnswer,
            "foreignAffiliationBusinessAbroad": QuestionnaireAnswer,
            "foreignAffiliationCountryMoneyLaundering": QuestionnaireAnswer,
            "foreignAffiliationExplanation": string,
            "businessTransactionsWithMoneyLaunderingCountries": QuestionnaireAnswer,
            "businessTransactionsUnusualNature": QuestionnaireAnswer,
            "businessTransactionsExplanation": string,
            "employeesConvictedOfFinancialCrime": QuestionnaireAnswer,
            "employeesDisposersOfAssetsHaveNaturalRole": QuestionnaireAnswer,
            "employeesExplanation": string,
            "totalNumOfQuestions": number,
            "numOfQuestionsAnswered": number,
            "numOfHighRiskIndicators": number,
            "numOfMediumRiskIndicators": number,
            "completedDate": Date,
            "isCompleted": boolean
        }],
        "isDeleted": boolean,
        "status": AssignmentAgreementStatus
    }],
    "count": number,
    "success": boolean
}

```



