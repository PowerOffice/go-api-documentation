
AssignmentAgreementRiskQuestionnaire (AssignmentAgreementRiskQuestionnaire)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BusinessPurposeComplex|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the business is unusually large or complex. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
BusinessPurposeExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessPurposeUnderstandable , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessPurposeComplex , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessPurposeNaturalOrganization and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessPurposeNaturalOrganization questions.
BusinessPurposeNaturalOrganization|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company is organized in a way that is natural in terms if its business. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
BusinessPurposeOperationalDiscrepancies|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if there are any recorded discrepancies between the company's stated purpose and its actual operations. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
BusinessPurposeUnderstandable|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the business purpose is understandable and legitimate. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
BusinessTransactionsExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessTransactionsWithMoneyLaunderingCountries and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.BusinessTransactionsUnusualNature questions.
BusinessTransactionsUnusualNature|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if there are transactions of an unusual nature. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
BusinessTransactionsWithMoneyLaunderingCountries|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if there are any transactions from or to persons and companies in countries or areas that do not have satisfactory measures against money laundering or terrorist financing. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompanyCashSales|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company has cash sales. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompanyExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyCashSales and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyIndustryMoneyLaundering questions.
CompanyFiguresAcceptableLiquidity|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company's liquidity is to be considered to be acceptable. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompanyFiguresEquityRatio|number|Gets or sets the equity ratio of the total capital.
CompanyFiguresExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyFiguresStockCompany , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyFiguresShareCapital , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyFiguresEquityRatio , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyFiguresSoundEquity and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.CompanyFiguresAcceptableLiquidity questions.
CompanyFiguresShareCapital|number|Gets or sets the company share capital
CompanyFiguresSoundEquity|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company's equity is to be considered as sound. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompanyFiguresStockCompany|boolean|Gets or sets if it is a joint-stock company
CompanyIndustryMoneyLaundering|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company is in an industry prone to money laundering. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompanyNaceCode|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company has adequate nace code. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
CompletedDate|Date|Gets or sets the date this questionnaire is completed. If this is null, the questionnaire is in progress.
EmployeesConvictedOfFinancialCrime|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if there are knowledge if any of the company's senior employees are convicted of money laundering or any other form of financial crime. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
EmployeesDisposersOfAssetsHaveNaturalRole|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if all disposers of the company's cash or assets have a natural role in the company. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
EmployeesExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.EmployeesConvictedOfFinancialCrime and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.EmployeesDisposersOfAssetsHaveNaturalRole questions.
ForeignAffiliationAnyPeps|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if any of the foreign owners are politically exposed or closely associated with a PEP. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
ForeignAffiliationBusinessAbroad|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company have business abroad or with foreign business players. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
ForeignAffiliationCountryMoneyLaundering|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the country with the owner/business is located in a country particularly susceptible to money laundering. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
ForeignAffiliationEmployeesAbroad|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company has employees or suppliers abroad. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
ForeignAffiliationExplanation|string|Gets or sets explanation. Elaboration text to the GoApi.Quality.AssignmentAgreementRiskQuestionnaire.ForeignAffiliationOwnersAbroad , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.ForeignAffiliationAnyPeps , GoApi.Quality.AssignmentAgreementRiskQuestionnaire.ForeignAffiliationBusinessAbroad and GoApi.Quality.AssignmentAgreementRiskQuestionnaire.ForeignAffiliationCountryMoneyLaundering questions.
ForeignAffiliationOwnersAbroad|[QuestionnaireAnswer](Type_QuestionnaireAnswer.md)|Gets or sets if the company has owners abroad. [QuestionnaireAnswer](Type_QuestionnaireAnswer.md) .
Id|number|Gets or sets the identifier.
IsCompleted|boolean|Gets or sets if the questionnaire is completed.
NumOfHighRiskIndicators|number|Gets the number of high risk indicators found
NumOfMediumRiskIndicators|number|Gets the number of medium risk indicators found.
NumOfQuestionsAnswered|number|Gets the number of questions answered with either Yes or No. Null or Not Sure does not count.
TotalNumOfQuestions|number|Gets the total number of questions.
