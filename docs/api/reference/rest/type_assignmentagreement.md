
AssignmentAgreement (AssignmentAgreement)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountingSystem|string|Gets or sets the accounting system used. If PowerOffice Go is used, the property AccountingSystemIsPowerOfficeGo must be set to true. Represents the Accounting system found under Data and System in the Assignment Assessment tab.
AccountingSystemIsPowerOfficeGo|boolean|Gets or sets AccountingSystemIsPowerOfficeGo. If PowerOffice Go is used as accounting system, this property should be set to true.
AnnualDispoitionsReceivedBy|[AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md)|Gets or sets AnnualDispoitionsReceivedBy. [AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md) . Used if the Annual statement system is not PowerOffice Go. Represents the Annual dispoitions is received by found under Data and System in the Assignment Assessment tab.
AnnualStatementSystem|string|Gets or sets the Annual statement system. Represents the Annual statement system found under Data and System in the Assignment Assessment tab.
AssignmentAgreementRiskQuestionnaires|[AssignmentAgreementRiskQuestionnaire](Type_AssignmentAgreementRiskQuestionnaire.md)|Gets or sets AssignmentAgreementRiskQuestionnaires. The items is of type [AssignmentAgreementRiskQuestionnaire](Type_AssignmentAgreementRiskQuestionnaire.md) .     Represents the money laundering and risk questionnaire found under Money Laundering and Risk in the Assignment Assessment tab.
AssignmentRiskLevel|[AssignmentRiskLevel](Type_AssignmentRiskLevel.md)|Gets or sets the assignment risk level. GoApi.Quality.AssignmentAgreement.AssignmentRiskLevel This represents the risk found in the risk manage popup under Money laundering and risk in the Assignment Assessment tab.
AssociateCode|number|Gets or sets the associate code. This is an employee code. This represents the associate in the Assignment General tab in PowerOffice Go.
AuthorizationDocumentation|[AssignmentAuthorizationDocumentType](Type_AssignmentAuthorizationDocumentType.md)|Gets or sets AuthorizationDocumentation. [AssignmentAuthorizationDocumentType](Type_AssignmentAuthorizationDocumentType.md) This represents the Authorization documentation found under Customer Initiatives in the Assignment Assessment tab.
CashJournalSavedElectronically|boolean|Gets or sets CashJournalSavedElectronically. Represents "Cash journal is saved electronically by cash register" found under Data and System in the Assignment Assessment tab.
CashRegisterDataAccessedVia|[AssignmentCashRegisterDataAccessedViaType](Type_AssignmentCashRegisterDataAccessedViaType.md)|Gets or sets CashRegisterDataAccessedVia. [AssignmentCashRegisterDataAccessedViaType](Type_AssignmentCashRegisterDataAccessedViaType.md) . Represents "Cash register data accessed via" found under Data and System in the Assignment Assessment tab.
CashSalesRegisteredIn|string|Gets or sets CashSalesRegisteredIn. Represents "Cash sales registered in" found under Data and System in the Assignment Assessment tab.
CheckoutSystemRoutine|string|Gets or sets CheckoutSystemRoutine. Represents Checkout system routine found under Data and System in the Assignment Assessment tab.
CompanyCredentials|[AssignmentCompanyCredentialsType](Type_AssignmentCompanyCredentialsType.md)|Gets or sets CompanyCredentials. [AssignmentCompanyCredentialsType](Type_AssignmentCompanyCredentialsType.md) This represents the company credentials found under Customer Initiatives in the Assignment Assessment tab.
ContactPersonId|number|Gets or sets the contact person id. This is the id representing the customer contact person in the Assignment General tab in PowerOffice Go.
CreditCheckComment|string|Gets or sets the credit check comment. This value is found in the credit check found under Money laundering and risk in the Assignment Assessment tab.
CreditCheckCompleted|boolean|Gets or sets the credit check completed flag. If set to false the credit check is cleared.
CreditCheckPerformed|Date|Gets or sets the credit check performed date. The date represents the credit check date found under Money laundering and risk in the Assignment Assessment tab.
CreditScore|number|Gets or sets the credit score. This value is a part of the credit score found under Money laundering and risk in the Assignment Assessment tab.
CustomerAccountCode|number|Gets or sets the customer account code. This is the code representing the customer in the Assignment General tab in PowerOffice Go.
CustomerControlledByCode|number|Gets or sets the CustomerControlledByCode. This is an employee code. This represents the controlled by found under Customer Initiatives in the Assignment Assessment tab.
CustomerControlledDate|Date|Gets or sets CustomerControlledDate. This represents the controlled date found under Customer Initiatives in the Assignment Assessment tab.
DemandsStatus|[PreviousAccountantDemandsStatus](Type_PreviousAccountantDemandsStatus.md)|Gets or sets DemandsStatus. [PreviousAccountantDemandsStatus](Type_PreviousAccountantDemandsStatus.md) . Not used if IsNewlyEstablished == false. Represents Claims/disputes under Previous Accountant in the Assignment Assessment tab.
Description|string|Gets or sets the description. This value is found in the Description field in the Assignment General tab in PowerOffice Go.
EndDate|Date|Gets or sets the end date. This represents the end date in the Assignment General tab in PowerOffice Go.
HasCapacity|boolean|Gets or sets HasCapacity. This represents if the firm has sufficient capacity to take on the assignment. Found under Qualifications and Capacity in the Assignment Assessment tab.
HasCashSales|boolean|Gets or sets HasCashSales. Represents Cash sales found under Data and System in the Assignment Assessment tab.
HasExpertise|boolean|Gets or sets HasExpertise. This represents if the firm has the competence required to take on the assignment. Found under Qualifications and Capacity in the Assignment Assessment tab.
Id|number|Gets or sets the identifier.
IncomingInvoicesScannedByCustomer|boolean|Gets or sets IncomingInvoicesScannedByCustomer. Represents Incoming invoices scanned by found under Data and System in the Assignment Assessment tab.
IsDeleted|boolean|Gets IsDeleted. Set to true if the assignment agreement is deleted.
IsEthicallySound|boolean|Gets or set IsEthicallySound. This represents if the firm is ethically sound. Found under Qualifications and Capacity in the Assignment Assessment tab.
IsInterestingForTheAgency|boolean|Gets or sets IsInterestingForTheAgency. This represents if the assignment is in the firm's interest. Found under Qualifications and Capacity in the Assignment Assessment tab.
IsNewlyEstablished|boolean|Gets or sets IsNewlyEstablished. Represents "New establishment" found under Previous Accountant in the Assignment Assessment tab.
KeyAccountManagerCode|number|Gets or sets the key account manager code. This is an employee code. This represents the key account manager in the Assignment General tab in PowerOffice Go.
LicenseeIsCustomer|boolean|Gets or sets LicenseeIsCustomer. Represents Licensee found under Data and System in the Assignment Assessment tab.
ManagerCode|number|Gets or sets the manager code. This is an employee code. This represents the assignment manager in the Assignment General tab in PowerOffice Go.
NoticePeriod|number|Gets or sets the notice period. This represents the notice period in the Assignment General tab in PowerOffice Go.
OutgoingInvoicedGeneratedBy|string|Gets or sets OutgoingInvoicedGeneratedBy. Represents the "Outgoing invoices generated in" found under Data and System in the Assignment Assessment tab.
OutgoingInvoicedGeneratedByPowerOfficeGo|boolean|Gets or sets OutgoingInvoicedGeneratedByPowerOfficeGo. Should be set to true if outgoing invoices is generated by PowerOffice Go.
OutgoingInvoicesReceivedBy|[AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md)|Gets or sets OutgoingInvoicesReceivedBy. [AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md) . Used if the outgoing invoices is not generated by PowerOffice Go. Represents Outgoing invoices received by found under Data and System in the Assignment Assessment tab.
PayrollSystem|string|Gets or sets the PayrollSystem. Represents the Payroll system found under Data and System in the Assignment Assessment tab.
PayrollSystemIsPowerOfficeGo|boolean|Gets or sets PayrollSystemIsPowerOfficeGo. Should be set to true if the payroll system is PowerOffice Go.
PreviousAccountantEmail|string|Gets or sets PreviousAccountantEmail. Not used if IsNewlyEstablished == false. Represents E-mail under Previous Accountant in the Assignment Assessment tab.
PreviousAccountantName|string|Gets or sets PreviousAccountantName. Not used if IsNewlyEstablished == false. Represents Name under Previous Accountant in the Assignment Assessment tab.
PreviousAccountantRequestedDate|Date|Gets or sets PreviousAccountantRequestedDate. Not used if IsNewlyEstablished == false. Represents Statement requested under Previous Accountant in the Assignment Assessment tab.
PreviousAccountantResponse|string|Gets or sets PreviousAccountantResponse. Not used if IsNewlyEstablished == false. Represents Response under Previous Accountant in the Assignment Assessment tab.
ProxyControlledByCode|number|Gets or sets ProxyControlledByCode. This is an employee code. Used if ProxyControlledByExternalParties is set to false. Represents the controlled by found under Customer Initiatives in the Assignment Assessment tab.
ProxyControlledByExternalName|string|Gets or sets ProxyControlledByExternalName. Used if ProxyControlledByExternalParties is set to true. String represents the name of the external party that performed the control found under Customer Initiatives in the Assignment Assessment tab.
ProxyControlledByExternalParties|boolean|Gets or sets the ProxyControlledByExternalParties. If set to true, the value from ProxyControlledByExternalName must be set.     If set to false, ProxyControlledById must be set.     This represents the controlled by external parties found under Customer Initiatives in the Assignment Assessment tab.
ProxyControlledDate|Date|Gets or sets ProxyControlledDate. Represents the controlled date found under Customer Initiatives in the Assignment Assessment tab.
ProxyIdentification|[AssignmentProxyIdentificationType](Type_AssignmentProxyIdentificationType.md)|Gets or sets ProxyIdentification. [AssignmentProxyIdentificationType](Type_AssignmentProxyIdentificationType.md) . This represents the Attorney-in-fact identification found under Customer Initiatives in the Assignment Assessment tab.
ProxySignatorId|number|Gets or sets ProxySignatorId. This is the customer contact person id representing Attorney-in-fact found under Customer Initiatives in the Assignment Assessment tab.
RevisedDate|Date|Gets or sets the revised date. This represents the revised date in the Assignment General tab in PowerOffice Go.
RiskAssessmentComment|string|Gets or sets the risk assessment comment. This represents the comment found in the risk manage popup under Money laundering and risk in the Assignment Assessment tab.
RiskAssessmentPerformed|Date|Gets or sets the risk assessment performed date. This represents the date the risk level is set, and is found under Money laundering and risk in Assignment Assessment tab.
ShareholderListConfirmed|boolean|Gets or sets the ShareholderListConfirmed. If set to false the shareholders, PEP/RCA and UBO confirmation is cleared.
ShareholderListConfirmedComment|string|Gets or sets ShareholderListConfirmedComment. The comment is found in the history for the shareholders, PEP/RCA and UBO confirmation.
ShareholderListConfirmedDate|Date|Gets or sets the ShareholderListConfirmedDate. This represents the date shareholders, PEP/RCA and UBO is confirmed, and is found under Money laundering and risk in the Assignment Assessment tab.
SignedDate|Date|Gets or sets the signed date. This represents the signed date in the Assignment General tab in PowerOffice Go.
StartDate|Date|Gets or sets the start date. This represents the start date in the Assignment General tab in PowerOffice Go.
Status|[AssignmentAgreementStatus](Type_AssignmentAgreementStatus.md)|Gets the status. [AssignmentAgreementStatus](Type_AssignmentAgreementStatus.md) . Only assignment agreements in status AssignmentAgreementStatus.Draft can be edited via the API.
SystemAdministeredByCustomer|boolean|Gets or sets SystemAdministeredByCustomer. Represents system administrator found under Data and System in the Assignment Assessment tab.
SystemUsageInvoicedToCustomer|boolean|Gets or sets SystemAdministeredByCustomer. Represents system usage invoiced to found under Data and System in the Assignment Assessment tab.
TotalCreditScore|number|Gets or sets the total credit score. This value is a part of the credit score found under Money laundering and risk in the Assignment Assessment tab.
WageBasisReceivedBy|[AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md)|Gets or sets WageBasisReceivedBy. [AssignmentOutgoingInvoicesReceivedByType](Type_AssignmentOutgoingInvoicesReceivedByType.md) . Used if the payroll system is not PowerOffice Go. Represents the Payroll journal is received by found under Data and System in the Assignment Assessment tab.
