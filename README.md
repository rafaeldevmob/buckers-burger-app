<h1>Bucker's Burger</h1>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"/>
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>
<br>

<br>

> Status do Projeto: Em finalização :warning:

<br>

## Demonstração

<img src='./gif.gif' alt='gif' />

<br>

### Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-page_with_curl)

:small_blue_diamond: [Funcionalidades](#funcionalidades-heavy_check_mark)

:small_blue_diamond: [Funcionalidades em aberto](#funcionalidades-em-aberto-warning)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

<br>

## Descrição do projeto :page_with_curl:

<p align="justify">
  Projeto ....
</p>

## Dependencias

 - Express
 - Nodemon
 - Ts-node
 - Mongoose
 - Axios

## Database

- Mongodb

## Biblioteca

- Multer
- Styled Componets

## Tools

- Docker
- vite
- WebSocket
- Insominia

## Technology

- React
- Typescript
- React Native

## Funcionalidades :heavy_check_mark:

- [X] Gerenciamento de pedidos.
- [X] Cancelamento e confirmação.

## Funcionalidades em aberto :warning:

- [ ] Cadastro de produtos.
- [ ] Deletar produtos.
- [ ] Cadastro de categorias.
- [ ] Deletar de categorias.


## Como rodar a aplicação :arrow_forward:

```
git clone https://github.com/rafaelpereirafront/food-app-native.git
```

Entre na pasta do projeto:

```
cd lanchonete
```

Instale as dependências: 

```
npm install
```
Abra o Docker e Instale a do imagem mongo
```
docker pull mongo
```

Instale a imagem do Database

```
docker pull rafaelpereirarj/mongo:db
```

Execute a Api: 

```
cd api

npm run dev
```

Execute o Dashboard: 

```
cd fe

npm run dev
```

Execute o emulador do Android: 

```
cd app

npm start

npx react-native run-android
```
