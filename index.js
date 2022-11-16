
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://yemolee:agbacoder@cluster0.8yibi81.mongodb.net/?retryWrites=true&w=majority"

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();
const port = 4000
app.use(bodyParser.json());

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
   console.log('connected to database');
  return app.listen({port: 4000});
    }).then(res => {
        console.log(`App running at  ${port}`);
        })
    .catch(err => {
        console.log(err);
        }
    );