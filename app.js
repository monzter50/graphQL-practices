require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers.js')


const port = process.env.port || 4000
// definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname,'lib','schema.graphql'),
  'utf-8'
)
var schema = makeExecutableSchema({typeDefs,resolvers});
console.log(resolvers)
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(port, () => console.log(`Now browse to localhost${port}:/graphql`));