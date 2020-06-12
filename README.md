<h1 align="center">
  Next Level Week #01
</h1>

<p align="center">
  <a href="#project">Project</a>   |   
  <a href="#built-with">Built With</a>   |   
  <a href="#installation">Installation</a>   |   
  <a href="#deployment">Deployment</a>   |   
  <a href="#license">License</a>
</p>

<br>

# Project

O projeto Ecoleta foi desenvolvido durante a Next Level Week 01 (NLW#1) da Rocketseat (Junho/2020).

O e-Coleta funciona como um marketpalce onde estabelecimentos, apelidados de pontos de coleta, podem se oferecer como ponto de depósito para determinados itens como Óleo, Pilhas, Lixo, etc. Para isso os estabelecimentos se cadastram em um portal web dizendo quais itens pode coletar, e o público através de um aplicativo mobile busca no mapa os pontos de coleta próximos de acordo com os itens que deseja descartar. Depois disso o usuário pode entrar em contato através de e-mail ou Whatsapp.



Funcionalidades Extras:

* Web:
  
  * Tela de conclusão com animação
  
  * 
  
  * Tratamento de campos e erros durante o cadastro

<br>

## Frontend

![Frontend](./assets/web.gif)

<br>

## Mobile

<!---<img src="./assets/mobile/mobile.gif" height="500"> --->

![Mobile](./assets/mobile.gif)

<br>

# Built With

Este projeto foi desenvolvido em Typescript com as seguintes tecnologias:



Backend:

- [Node](https://nodejs.org/en/)
- [Insomnia](https://insomnia.rest/download/)
- [Express]()
- [Knex](http://knexjs.org/)
- [SQLite3]()
- [multer]()
- [celebrate](https://github.com/arb/celebrate)
- []()
- []()

Frontend:

* [React JS](https://reactjs.org/)

* [react-icons](https://react-icons.github.io/react-icons/)

* [react-navigation](https://reactnavigation.org/docs/getting-started)



* [react-leaflet](https://react-leaflet.js.org)

* [axios]()
  


* [API IBGE](https://servicodados.ibge.gov.br/api/v1)

* [react-dropzone](https://servicodados.ibge.gov.br/api/v1)

* [react-lottie](https://github.com/chenqingspring/react-lottie)



Mobile:

* [React Native](https://facebook.github.io/react-native/)

* [Expo](https://expo.io/)

<br>

# Installation

## Requirements

- Node

- Yarn

- Expo-cli
  
  ```
  yarn global add install expo-cli
  ```

<br>

## Installation Steps

- Clone this repository
  
  ```
  git clone https://github.com/renanxr3/semanaomnistack11
  ```

- Install Backend dependencies
  
  ```
  cd omnistack11-backend
  yarn install
  ```

- Create database
  
  ```
  yarn knex migrate:latest
  ```

- Install frontend dependencies
  
  ```
  cd omnistack11-frontend
  yarn install
  ```

- Install mobile dependencies
  
  ```
  cd omnistack11-mobile
  yarn install
  ```

<br>

# Deployment

## Backend

```
cd omnistack11-backend
yarn dev
```

## Frontend

```
cd omnistack11-frontend
yarn start
```

## Mobile

```
cd omnistack11-mobile
yarn start
```

<br/>

# Authors

- [Renan Santos](https://github.com/renanxr3)

<br/>

# License

This project is licensed under the [MIT License](LICENSE.md).

<br/>

# Acknowledgments

- [Rocketseat](https://rocketseat.com.br/)
- [Semana Omnistack 11 ](https://rocketseat.com.br/week-11/aulas)
