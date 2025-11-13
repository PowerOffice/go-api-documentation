Recommended Usage
==============

## Paging and filtering

We strongly recommend using paging and/or filtering on all GET api-calls to reduce the data-amount.

There is a max page size (item count limit) on many of the api request/payloads, see the limitations section for more info: 
[Limitations](Common/Limitations.md)

If the payload gets too large, there is the possibility that you could experience timeouts on the api-request.

Try limiting the inquired item amount by using filters like from/to-date to reduce the time-period range. One month is recommended on large data amount (like accounttransactions).

Never try to extract more than the max amount of items/rows each api-call allows - this can be controlled by using the parameters **top** and **skip**.

We are constantly monitoring our server load, and integrations that are making api requests irresponsibly will be contacted about this, and in worst-case be deactivated if they do not comply to our guidelines.


## Credentials

Application key and Client key forms the client credentials required to get access-token to our api-server, and as follows access to data stored on clients in poweroffice go.

Client key is thus regarded as a password and should be treated as such. Avoid exposing the client key in places where other parties can see it, it should preferably be stored in a secure place, encoded in a non-human readable form.

If client key is stolen, sensitive data could potentially go astray and find its way to malicious parties.