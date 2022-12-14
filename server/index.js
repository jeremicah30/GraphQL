//MAIN FILE

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const cors = require("cors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//CONNECT TO DB
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema, //if schema filename is not 'schema' then do, schema:filename
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`)); //create npm script to run port
