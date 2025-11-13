REST - Performing a REST API Call
============================

This document describes the basics of GO-API calls. 

The examples in this document assumes you have read the [Authentication section](Authentication.md). Details about the *access key* will not be discussed here.

# Overview

## Design pattern

The GO-API calls is loosely based on the [REST design pattern](http://en.wikipedia.org/wiki/Representational_state_transfer). We do however some times deviate from the pattern.

## HTTP Verbs

We try to use the HTTP verbs as follows:

 Verb 	| Description
:-------|:------------
GET  	| Retreive data of an entity or a list of entities.
POST	| Create a new entity or a list of entities. If ID for an existing entity is provided, the existing entity will be updated.
DELETE	| Remove an existing entity or a list of entities.


## Filters

Filters for request follows the [oData spesification](http://msdn.microsoft.com/en-us/library/azure/dd894031.aspx) for oData query options. 

For more on filtering, see: [Filtering](Filtering.md)

## Data format

All input and response data is transfered using the [JSON format](http://www.json.org/). Response data is always wrapped in an object with a `success` boolean property and a `data` property containing the actual object returned by the api call.

Data is always expected to be UTF-8 encoded.

## Error handling

All well formed request should return HTTP 200 OK. If business logic or parameter data provided is invalid the `success` property will be set to `false`, and there will be no `data` property. Instead a `validation` property will be returned with details of the error.

Example:

```http
	{
  		"success": false,
  		"validation": {
    		"errorLogReference": "2sxuf3bp2jq-0810110719",
    		"summary": "Invalid operator",
    		"exception": "OData"
  		}
	}
```
