# Automoção UI E-commerce Ebac Store com Cypress.

Projeto de conclusão do módulo 22 contendo a implementação de testes automatizados utilizando Cypress para o e-commerce Ebac Store. O foco está em garantir a funcionalidade e a usabilidade do sistema através de dois principais fluxos de teste:

## Funcionalidades testadas:

1. **Fluxo de Criação de Conta:**
   
   - Implementação de uma suíte de teste que valida o processo de criação de conta do usuário.
   - Utilização do Page Object Pattern para organizar e encapsular a lógica da interface de usuário, facilitando a manutenção e reutilização do código.

2. **Fluxo de Checkout (Carrinho de Compras):**
   
   - Implementação de uma suíte de teste para validar o processo de checkout na Ebac Store.
   - Utilização de App Actions para encapsular as ações do aplicativo, como adicionar produtos ao carrinho, aplicar cupons de desconto e finalizar a compra.

## Objetivos dos Testes:

   - Garantir que a criação de conta funcione corretamente, proporcionando uma experiência de usuário fluida e sem erros.
   - Validar a funcionalidade de checkout, assegurando que os usuários possam completar suas compras sem problemas.
     
## Estrutura do Projeto:

- **cypress/e2e:** Contém os testes principais.
- **cypress/support/pages:** Contém o código das páginas que facilitam o uso de Page Object Pattern.
- **cypress/support/commands.js:** Contém o código de comandos personalizados do Cypress.

## Tecnologias Utilizadas:

- **Cypress:** Framework de testes.
- **JavaScript:** Linguagem usada nos testes.
