
QuoteDetailsService
================

Service for creating, retrieving, manipulating and deleting [Quote](GoApi.Quotes.Quote.md) .



### Constructors
Name | Description
:----|:------------
[QuoteDetailsService(IAuthorization authorization, Host host)](GoApi.Quotes.QuoteDetailsService.QuoteDetailsService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [QuoteDetailsService](GoApi.Quotes.QuoteDetailsService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Quote entity)](GoApi.Quotes.QuoteDetailsService.Delete_Quote_entity_.md)|Delete a [Quote](GoApi.Quotes.Quote.md) . Only quotes in state draft can be deleted.
[Get(Guid id)](GoApi.Quotes.QuoteDetailsService.Get_Guid_id_.md)|Get a [Quote](GoApi.Quotes.Quote.md) by its Id.
[Save(Quote entity)](GoApi.Quotes.QuoteDetailsService.Save_Quote_entity_.md)|Saves the specified [Quote](GoApi.Quotes.Quote.md) . Only new quotes or quotes in state draft can be saved.


