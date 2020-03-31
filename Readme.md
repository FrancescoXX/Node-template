# Node Template API

## Installation without docker

- clone the repository
- install node modules: 
  ```
  npm i
  ```
- from the folder where the index.js is located
  ```
  node index.js
  ```

  then you can visit the the url: 

  http://localhost:3000/api-docs


## Installation with docker

If you have docker installed , you can 
```
docker-compose up --build
```

```
docker run --init --name nta -p 3000:3000 node-template-api:0.0.1
```

## Test with docker

If you have docker installed on your machine, you can use my image stored on docker hub

```
docker run --init --name nta -p 3000:3000 francescoxx/node-template-api:0.0.1
```