<h1 align="center">Resorts Brazil</h1>

## Sumário

- [Introdução](#introdução)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Observação](#observação)
- [Resultados](#resultados)
- [Considerações Finais](#considerações-finais)

## Introdução

O aplicativo **ResortsBrazil** surge mediante à ingressão no Curso de Desenvolvimento de Aplicativos, ofertado pelo Instituto Federal de Alagoas - Campus Arapiraca, cujo objetivo é o desenvolvimento de uma aplicação utilizando React Native. Diante disso, visando a conclusão do curso com êxito, o projeto em questão foi construído com base no ranking dos [30 melhores resorts do Brasil](https://viagemeturismo.abril.com.br/materias/os-30-melhores-resorts-do-brasil/), publicado por Fernando Leite no site Viagem e Turismo. Assim sendo, o aplicativo busca apresentar dez desses resorts e algumas das suas informações relevantes.

## Tecnologias

Em suma, o projeto foi desenvolvido com as seguintes tecnologias:

- [Expo CLI](https://expo.dev)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Prisma](https://www.prisma.io)

## Instalação

Para a instalação, faz-se necessário que o usuário tenha em sua máquina o Node.js instalado.

Com isso, segue os principais passos para executar a aplicação:

**1. Clone o repositório:**

```bash
$ git clone https://github.com/pedrohenriquee8/resorts-brazil
```

**2. Acesse a pasta do projeto:**

```bash
$ cd resorts-brazil
```

**3.1.1. Acesse a pasta mobile:**

```bash
$ cd mobile
```

**3.1.2. Instale as dependências:**

```bash
$ npm install
```

**3.2.1. Acesse a pasta server:**

```bash
$ cd mobile
```

**3.2.2. Instale as dependências:**

```bash
$ npm install
```

**4. Na pasta mobile, inicie a aplicação:**

```bash
$ expo start
```

**5. Na pasta server, inicie a aplicação:**

```bash
$ nodemon index.js
```

Caso o usuário queira utilizar o banco de dados, basta inserir na pasta server:

```bash
$ npx prisma studio
```

## Observação

Um ponto a ser destacado é que, em services da pasta mobile, deve ser criado um arquivo chamado _config.js_, em que deve ser semelhante ao que foi proposto em _configService.js_.

## Resultados

Para ter acesso aos resultados, basta acessar o seguinte link: [Resorts Brazil.](https://github.com/pedrohenriquee8/resorts-brazil/blob/main/mobile/README.md)

## Considerações Finais

Desse modo, o projeto em questão, mediante as tecnologias mencionadas, é a primeira grande aplicação desenvolvida por mim, logo, é possível que haja alguns erros de lógica e/ou programação. Entretanto, foi de suma importância para o meu aprendizado, pois proporcionou uma visão mais sólida e mais ampla acerca do desenvolvimento de aplicativos.

[⬆ Voltar ao topo](#sumário)
