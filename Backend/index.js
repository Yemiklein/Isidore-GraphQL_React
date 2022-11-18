const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./graphql/Schema.js")
const mongoose = require('mongoose')
const isAuth = require("./middleware/is-auth.js")
const config = dotenv.config()

MONGODB = "mongodb+srv://yemolee:agbacoder@cluster0.8yibi81.mongodb.net/eventDB?retryWrites=true&w=majority"

const app = express()
port = 8000
app.use(cors())
app.use(express.json())
app.use(isAuth)

// const monogoURL = config.parsed.MONGO_URL
// mongoose.connect(monogoURL, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: true
// })

// mongoose.connection.once( 'open' ,() => console.log("DB connected..."))

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// app.use(
//     "/graphql",
//     graphqlHttp({
//       schema,
//     //   rootValue: graphQlResolvers,
//       graphiql: true,
//     })
//   );

// app.get("/", (req, res) => res.send("Server is runing..."))

// app.listen(8000, () => console.log("Server is runing at 8000..."))

mongoose
  .connect(MONGODB, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true  })
  .then(() => {
    console.log("Connected to MongoDB_DataBase 🎯");
    return app.listen({ port: 8000 });
  })
  .then((res) => {
    console.log(`App firing full throtle on port ${port} 🪐🚀`);
  })
  .catch((err) => {
    console.log(err);
  });
