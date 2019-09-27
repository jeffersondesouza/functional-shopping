# Functional Frontend
## Uma abordagem Arquitetural para o Frontend baseada em Programação Funcional
- The idea is to create an frontend architeture based on Functional Architeture Principles

- A ideia central desse repositório é de criar uma aplicação frontend cujo paradígma central de desenvolvimento basea-se fortemente na programação funcional;
- Esperamos com essa baordagem, obter uma arquitetura escalável, flexível e de fácil manutenção;
- O ponto central trata-se da separação arquitetural em Domain, View e Storage. Onde cada um desses módulos arquiteturais tem uma funções claas diante da app;

OBS: Na pasta 'server' encontra-se o backend desta aplicação. Com isso desconsideremos as técnicas adotadas neste diretório ja que nosso foco é o frontend.



### Sobre o protótipo de aplicação
- Uma micro e simples "e-commerce like application"
- Funcionalidades: 
  - Sign Up e Login; 
  - Listar e Criar criar produtos; 
  - Adicionar produtos ao carrinho;
  - Listar os produtos no carrinho;
  - Deletar ou realizar uma Compra; 


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
