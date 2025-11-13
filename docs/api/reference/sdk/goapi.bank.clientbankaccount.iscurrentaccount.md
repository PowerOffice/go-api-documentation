
ClientBankAccount.IsCurrentAccount
================
**Namespace:** GoApi.Bank

Gets a value indicating whether bank account is the clients current account/operating account (Norwegian: driftskonto).     The current account is the bank account where the most of the day-to-day liquidity goes through.     Invoices billed from the client have the current account as the bank account that the invoice should be paid too.

### Syntax
```csharp
	public Nullable<System.bool> IsCurrentAccount { get; internal set; }
```

### Type

System.Nullable&lt;System.bool&gt;



