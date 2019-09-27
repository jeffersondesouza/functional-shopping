# Architeture Based on Functional Programaing

## A very Simple Shopping List e-commerce like application

The idea is to create an frontend architeture based on Functional Architeture Principles

### Components

- São Dumbs
- Tentar evitar ao máximo o drilling props, com isso mandar o Context do Container pai para o filho;
- Cada component pode ter filhos e neto(como folder) mas nunca bisnetos como folder:
  --BillingHistoryBlock (folder)/ \
  ---- BillingHistoryHeader/ \
  ------ index.js \
  ---- BillingItem(folder)/ \
  ------ BillingItemHeader\
  ------ BillingItemSummary(folder)\
  -------- Amount.js\
  -------- Table.js\
  ---- BillingHistoryFooter/

### utils

- LoadingBlock.js
- naturalValue
