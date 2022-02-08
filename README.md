# Front-End UI

Projeto global de Componentes, DesignSystem e Helpers.

## Rodando o Projeto

#### Requisitos

- NodeJS 12.10.0 +
- NPM 6.10.3 +

Tenha o `.npmrc` configurado na raiz do projeto com o seguinte conteúdo:

```

//registry.npmjs.org/:_authToken=NPM_TOKEN
scope=lendico

```

Pronto agora basta instalar as dependências com `npm install` e seguir um dos fluxos abaixo.


## Fluxos de Desenvolvimento

- Para testar os componentes conseguimos validar atraves do storybook.

- Para testar o designSystem conseguimos validar atraves dos componentes no storybook.

- Para testar os helpers podemos validar atraves dos testes unitários ou caso algum componente utilize podemos validar pelo storybook.

- Para testar em um projeto que esteja consumindo nosso pacote podemos rodar o nosso projeto com o `npm run build:npm:watch` depois rodamos o `npm link` para ficar exposto como um pacote local, já no projeto que consome esse pacote iremos rodar o comando `npm link @lendico/pay-ui`, pronto agora a cada alteração no projeto ui deverá refletir no projeto consumidor.


## DOC

- [Boas Práticas](./doc/BEST_PRACTICES.md)

- [Commandos do Projeto](./doc/COMMANDS.md)

- [Estrutura do Projeto](./doc/PROJECT_STRUCTURE.md)
