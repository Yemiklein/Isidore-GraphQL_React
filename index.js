
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://yemolee:agbacoder@cluster0.8yibi81.mongodb.net/?retryWrites=true&w=majority"

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/midAuth');

const app = express();
const port = 4000
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);


   

mongoose
  .connect(
    MONGODB,{useNewUrlParser: true}
  )
  .then(() => {
   console.log('Connected to MongoDB_DataBase 🎯');
  return app.listen({port: 4000});
    }).then(res => {
        console.log(`App firing full throtle on port ${port} 🪐🚀`);
        })
    .catch(err => {
        console.log(err);
        }
    );