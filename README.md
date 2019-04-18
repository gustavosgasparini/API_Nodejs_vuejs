# Teste backend Tilix

Api desenvolvida com **NodeJs**, **VueJs**, **Express** e banco de dados **MongoDb**

## 1.Pré-requisitos

Para que a API funcione é necessário o **MongoDb** e o **npm** instalados no sistema

### 2.Instalação

Clone o repositório para uma pasta qualquer e acesse a pasta principal que possui o arquivo index.js, nessa pasta escreva no terminal:

```
$ npm i
```
com isso instalará todas as dependências do primeiro arquivo **package.json**. Depois acesse a pasta client
```
$ cd client/
```
nessa pasta escreva no terminal
```
$ npm i
```
instalará todas as dependências do **package.json** para rodar o vuejs corretamente

### 3.Rodando a API

Com a instalação concluída agora é necessário que tenha três abas do terminal rodando simultaneamente o MongoDb, a API e o VueJs.
```
$ mongod
```
Código para rodar o MongoDb no mac, agora, na segunda aba, vá para a pasta principal onde se encontra o arquivo index.js e escreva no terminal:
```
$ npm start
```
Isso fará com que a API comece a funcionar em conjunto com o banco de dados. Por último, na terceira aba, entre na pasta client e escreva:
```
$ npm run serve
```
Assim vc terá o MongoDb, a API e o VueJs funcionando em conjunto.

### 4.Portas
A API e o VueJs possuem portas específicas para que funcionem, a API roda na seguinte porta:
```
http://localhost:5000/api/fatura
```
E o VueJs
```
http://localhost:8080
```
Só para que fique claro se está funcionando nas portas corretas.
