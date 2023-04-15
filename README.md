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

- <a href="https://www.docker.com/">Docker</a>
- <a href="https://vitejs.dev/">Vite</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API">WebSocket</a>
- <a href="https://insomnia.rest/download">Insominia</a>
- <a href="https://developer.android.com/studio">Android Studio</a>

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


## How run aplication :arrow_forward:

## Step 1

- Install <a href="https://insomnia.rest/download">Insominia</a>
- Install <a href="https://www.docker.com/">Docker</a>
- Install <a href="https://developer.android.com/studio">Android Studio</a>

## Step 2

- Open Android Studio and create Virtual Device

## Step 3

Clone the repository:

```
git clone https://github.com/rafaelpereirafront/food-app-native.git
```

Enter the project folder:

```
cd lanchonete
```

Install the dependecies: 

```
npm install
```
Open the Docker and install MongoDb image: 
```
docker pull mongo
```

Install Database Image:

```
docker pull rafaelpereirarj/mongo:db
```

Enter the API folder: 

```
cd api

npm run dev
```

Enter the Web Dashboard folder: 

```
cd fe

npm run dev
```

Start the Android emulator: 

```
cd app

npm start

npx react-native run-android
```
