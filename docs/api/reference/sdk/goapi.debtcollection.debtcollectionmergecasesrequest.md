
DebtCollectionMergeCasesRequest
================

Request that should be created when merging multiple [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) together.


### Properties
Name | Description
:----|:------------
[CaseIds](GoApi.DebtCollection.DebtCollectionMergeCasesRequest.CaseIds.md)|Gets the identifiers of the debt collection cases to merge.
[CaseNo](GoApi.DebtCollection.DebtCollectionMergeCasesRequest.CaseNo.md)|Gets the debt collection case number that the case should have after merging cases
[ExternalCaseUrl](GoApi.DebtCollection.DebtCollectionMergeCasesRequest.ExternalCaseUrl.md)|External link to this case, if any exists, that should appear on the merged case. This could be used as a link from PowerOffice Go to an external system.

### Constructors
Name | Description
:----|:------------
[DebtCollectionMergeCasesRequest(string caseNo, Guid[] caseIds)](GoApi.DebtCollection.DebtCollectionMergeCasesRequest.DebtCollectionMergeCasesRequest_String_caseNo___caseIds_.md)|Initializes a new instance of the [DebtCollectionMergeCasesRequest](GoApi.DebtCollection.DebtCollectionMergeCasesRequest.md) class.



