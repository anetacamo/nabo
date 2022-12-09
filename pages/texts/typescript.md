### readability

For better readability of large numbers underscores are not gonna change a number value.

`const africaPop = 1287269147`

`const africaPop = 1_287_269_147`

### Guards

When there is multiple options (multiple types) you are expected, guards are a way to decide which type it is and use the right function that will not return an error

#### Typescript in operator

```typescript
const printDocument = (doc: DeliminatedDocument | PlainTextDocument) => {
    if ("separator" in doc) {
        printDeliminated(doc);
    } else {
        print PlainTextDocument(doc);
    }
};
```

#### Type Predicate

> Two underscores in the name are usually marking that the property is only used for the app internally. Here, the `__typename` will be assigned by the system and will be only used to check if the invoice is finished or if its draft. Its not something a customer fills.

```typescript
export type FinalInvoice = {
  __typename: "FinalInvoice";
  insertedAt: number;
  approvedBy: number;
  lineItems: LineItem[];
};

export type DraftInvoice = {
  __typename: "DraftInvoice";
  insertedAt: number;
  approvedBy?: number;
  lineItems: LineItem[];
};

export Type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice:Invoice): invoice is FinalInvoice =>
return invoice.__typename === "FinalInvoice";

export const isDraftInvoice = (invoice:Invoice): invoice is DraftInvoice =>
return invoice.__typename === "DraftInvoice";
```

By this, we create a simple check to decide what kind of instance of type do we have and how to treat it:

`isFinalInvoice(invoice)`

#### Assert function
