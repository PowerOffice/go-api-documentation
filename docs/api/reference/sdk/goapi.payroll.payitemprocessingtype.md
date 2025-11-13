
PayItemProcessingType
================

Enum PayItemProcessingType specifying the rules used when processing a [SalaryLine](GoApi.Payroll.SalaryLine.md) .

### Fields
Name |Value | Description
:----|:-----|:-----------
FixedAmount|0|Fixed amount
FixedAmountWithQuantity|5|Fixed amount with quantity
FixedAmountWithQuantitySubjectToWithholdingTax|6|Fixed amount with quantity subject to withholding tax. Link to another pay item.
QuantityAndRate|10|Rate based with quantity and rate.
QuantityAndRateSubjectToWithholdingTax|11|Pay items with this processing type is the same as "quantity and rate" but have a link to another pay item where extra tax should be withheld.
QuantityAndFixedRate|12|Rate based with a fixed rate specified on pay item level.
QuantityAndRateReportingZeroAsQuantity|13|Rate based with quantity and rate, that always reports 0 as quantity in A-melding (A02).
QuantityAndFixedRateReportingZeroAsQuantity|14|Rate based with quantity and fixed rate specified on pay item level, that always reports 0 as quantity in A-melding (A02).
FixedSalary|20|Fixed salary
HourlyWage|30|Hourly wage
PercentOfHourlyWage|40|Percent of hourly wage (overtime)
HolidayPay|50|Holiday pay. No tax should be calculated from this amount.
HolidayPayOver60Years|51|The holiday pay for employees that are 60 years or older. Taxes should be calculated from this amount.
HolidayPayForSpecifiedYear|52|Same as Holiday Pay, except the user is allowed to select the holiday pay year.
WageDeductionForHoliday|55|Deduction in fixed pay for taking a holiday.
WageDeductionForHolidayOver60Years|56|Deduction in fixed pay for taking a holiday.
HolidayPayCorrection|57|Correction of holiday pay under 60.
HolidayPayCorrectionOver60|58|Correction of holiday pay under 60.
ElectronicCommunications|60|The electronic communications
ExpenseRefund|80|The expense refund
SalaryAdvance|90|Used when giving an employee a salary advance.
FreeCarStandardRule|100|The free car standard rule
FreeCarOther|101|Used when the car is very expensive and the benefit becomes unreasonably high.
FreeCarOutsideStandardRule|102|Used on larger vehicles (more than 7500kg) or buses with more than 15 passenger seats.
WorkCarListPrice|103|Used for small commercial trucks less than 7501kg based on the list price.
WorkCarKilometers|104|Used for small commercial trucks less than 7501kg based on the number of km driven privately by the employee.
DeductionWithBalance|110|Deduction that has a start balance that should be reduced each payroll.
BackPaymentOfPensionAndAnnuities|120|Post-payment of pension and annuity. Requires from / until date. (Norwegian: Etterbetaling av pensjon og livrente)
Lott|130|Lott that will report number of days.
CommuterWithPersonTypeAndQuantity|140|Reise kost og lojsi (ofte pendler) som skal rapportere type pendler og antall
CommuterWithPersonType|141|Reise kost og lojsi (ofte pendler) som skal rapportere type pendler
CommuterWithNumberOfJourneys|142|Reise kost og lojsi (ofte pendler) som skal rapportere antall reiser
CommuterWithPersonTypeQuantityAndRate|143|Reise kost og lojsi (ofte pendler) som skal rapportere type pendler og antall, og skal beregne med bruk av sats
HomeVisitsForCommuters|144|Besøksreiser til hjemmet for pendlere
SeafarersAllowanceDaysAtSea|801|Særskilt fradrag for sjøfolk - antall dager ombord
HolidayPayFinalSettlement|900|The holiday pay final settlement. Used when an employee quits their job and want all of this years holiday pay paid.     Taxes should be calculated from this amount.     This must be calculated after all pay items that have IncludeInHolidayPay set to true.
TradeUnionDeduction|999|Trade union deduction.
PensionDeduction|1000|Pension deduction limited to 2% of 1G.
PensionDeductionUnlimited|1001|Pension deduction not limited to 2% of 1G.
AttachmentOfEarnings|1010|The attachment of earnings
AttachmentOfEarningsTax|1015|The attachment of earnings tax     Note: this processing type needs to be done after trade union and pension deduction.
SeafarersAllowanceDeduction|1020|Særskilt fradrag for sjøfolk skattefradrag     Note: this processing type needs to be done after trade union and pension deduction.
PercentOfFixedSalary|1030|Percent of fixed salary
DailyWageFiveDayWeek|1040|Daily wage (5 day week)
DailyWageSixDayWeek|1050|Daily wage (6 day week)
CorrectionOfAdditionalEmployersContribution|2000|Correction of additional employer's contribution


### Constructors
Name | Description
:----|:------------
[PayItemProcessingType()](GoApi.Payroll.PayItemProcessingType.PayItemProcessingType__.md)|



