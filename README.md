# Teste E-commerce Ebac Store com Cypress.

Projeto de conclusão do módulo 23 tendo como objetivo principal validar respostas da funcionalidade carrinho de compras, incluindo adição, remoção e edição de produtos, além de garantir que o fluxo de checkout seja completado com sucesso. Os testes utilizam o comando cy.intercept para interceptar e mockar respostas de API, garantindo que diferentes cenários sejam cobertos.

## Funcionalidades testadas:

1. **Fluxo completo de checkout**:
   - Valida o processo de compra do início ao fim, garantindo que os usuários possam finalizar uma compra com sucesso.

2. **Carrinho de compras**:
   -  Verifica se os produtos estão corretamente adicionados ao carrinho.
   -  Valida se o carrinho está vazio após a remoção de todos os itens.
   -  Garante que é possível alterar a quantidade de um produto no carrinho.

3. **Interceptação de requisições de API**:
   - O uso de `cy.intercept` permite interceptar as requisições para a API de carrinho de compras e simular diferentes estados de resposta, como carrinho cheio, vazio ou com alterações de quantidade de produtos.

## Pré-requisitos:

- **Node.js** e **npm** instalados.
- Cypress instalado globalmente ou como dependência do projeto.
- Configurar variáveis de ambiente no arquivo `.env`:
  - `EMAIL`: Email do usuário para login.
  - `PASSWORD`: Senha do usuário para login.
  - `USER_ID`: ID do usuário para associar ao carrinho de compras.

## Estrutura do Projeto:

- **cypress/e2e:** Contém os testes principais.
- **cypress/fixtures:** Contém os arquivos JSON usados para mockar respostas de API.
- **cypress/support/pages:** Contém o código das páginas que facilitam o uso de Page Object Pattern.
- **cypress/support/commands.js:** Contém o código de comandos personalizados do Cypress.

## Tecnologias Utilizadas:

- **Cypress:** Framework de testes.
- **JavaScript:** Linguagem usada nos testes.
