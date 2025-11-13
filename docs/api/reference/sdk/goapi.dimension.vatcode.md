
VatCode
================

VatCode representing the Value Added Tax (VAT) codes on the client. (Norwegian: MVA-kode)


### Properties
Name | Description
:----|:------------
[Id](GoApi.Dimension.VatCode.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Code](GoApi.Dimension.VatCode.Code.md)|Gets or sets the code.
[Description](GoApi.Dimension.VatCode.Description.md)|Gets or sets the description.
[IsActive](GoApi.Dimension.VatCode.IsActive.md)|Gets or sets a value indicating whether this instance is active.
[IsCustom](GoApi.Dimension.VatCode.IsCustom.md)|Gets or sets a value indicating whether this VAT code is custom created.
[IsVatCompensationCode](GoApi.Dimension.VatCode.IsVatCompensationCode.md)|Gets or sets a value indicating whether this VAT code is a code used for VAT compensation
[Name](GoApi.Dimension.VatCode.Name.md)|Gets or sets the name.
[Rate](GoApi.Dimension.VatCode.Rate.md)|Gets or sets the rate. This is a value between 0 and 100. With 0 representing 0% VAT and 100 representing 100% VAT.
[ValidFrom](GoApi.Dimension.VatCode.ValidFrom.md)|Gets the date that this VAT code is active from.
[Validto](GoApi.Dimension.VatCode.Validto.md)|Gets the date which the VAT code expires.
[VatBasisRatio](GoApi.Dimension.VatCode.VatBasisRatio.md)|Gets or sets the VAT basis ratio (Norwegian: Forholdsmessig fradrag MVA). This is a value between 0 and 1. With 0 representing 0% VAT basis ratio and 1 representing 100% VAT basis ratio. Example: 1000 kr with 50% VAT basis ratio and 25% VAT rate is calculated: 1000 * 0.5 * 0.25 = 125 kr.

### Constructors
Name | Description
:----|:------------
[VatCode()](GoApi.Dimension.VatCode.VatCode__.md)|



