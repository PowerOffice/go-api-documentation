
QuoteService
================

Service containing methods for querying and manipulating [Quote](GoApi.Quotes.Quote.md) .     A Quote is representing an offer or estimate of a price for a job or a service that the client is offering a Customer.     Consist of the two sub-services [QuoteDetailsService](GoApi.Quotes.QuoteDetailsService.md) and [QuoteListItemService](GoApi.Quotes.QuoteListItemService.md)


### Properties
Name | Description
:----|:------------
[QuoteDetails](GoApi.Quotes.QuoteService.QuoteDetails.md)|Gets the quote list item sub-service.
[QuoteListItem](GoApi.Quotes.QuoteService.QuoteListItem.md)|Gets the quote details sub-service.

### Constructors
Name | Description
:----|:------------
[QuoteService(IAuthorization authorization, Host host)](GoApi.Quotes.QuoteService.QuoteService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [QuoteService](GoApi.Quotes.QuoteService.md) class.

### Methods
Name | Description
:----|:------------
[Delete(Quote entity)](GoApi.Quotes.QuoteService.Delete_Quote_entity_.md)|Delete a quote
[Get(Guid id)](GoApi.Quotes.QuoteService.Get_Guid_id_.md)|Get a Quote by its Id.
[List()](GoApi.Quotes.QuoteService.List__.md)|Query for listing quotes on a client.
[Save(Quote entity)](GoApi.Quotes.QuoteService.Save_Quote_entity_.md)|Saves the specified quote.


