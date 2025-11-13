
JournalEntryVoucher
================

Service providing methods for creating vouchers, editing and deleting ( [JournalEntryVoucher](Type_JournalEntryVoucher.md) ) that is ready to be posted by a user on the client.

**Base Url**: `https://api.poweroffice.net/JournalEntryVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[JournalEntryVoucher/](Route_GET_JournalEntryVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [JournalEntryVoucher](Type_JournalEntryVoucher.md) filtered by odata query.
[JournalEntryVoucher/](Route_POST_JournalEntryVoucher_.md)|POST|Saves the specified [JournalEntryVoucher](Type_JournalEntryVoucher.md) and returns the entity with an assigned Id.
[JournalEntryVoucher/{id}](Route_GET_JournalEntryVoucher__id__.md)|GET|Gets the specified [JournalEntryVoucher](Type_JournalEntryVoucher.md) by its id.
[JournalEntryVoucher/{id}](Route_DELETE_JournalEntryVoucher__id__.md)|DELETE|Deletes the specified [JournalEntryVoucher](Type_JournalEntryVoucher.md) by its id.
[JournalEntryVoucher/ForwardIncomingEhf](Route_POST_JournalEntryVoucher_ForwardIncomingEhf_.md)|POST|Insert EHF invoice into Go. Puts a CreateEhfImageMessage on the queue to the standard worker.


