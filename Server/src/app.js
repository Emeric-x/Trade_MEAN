const express = require('express');
const app = express()
const port = 3000;
const mongoose = require('./database/mongoose')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors')

app.use(cors())
app.use(express.json())

//Import routes
const gamesRoute = require("./routes/games")
app.use('/games', gamesRoute)
const usersRoute = require("./routes/users")
app.use('/users', usersRoute)
const countriesRoute = require("./routes/countries")
app.use('/countries', countriesRoute)
const postsRoute = require("./routes/posts")
app.use('/posts', postsRoute)
const groupsRoute = require("./routes/groups")
app.use('/groups', groupsRoute)
const chatsRoute = require("./routes/chats")
app.use('/chats', chatsRoute)

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

/*app.get('/', (req, res) => {
    res.send('Hello World!')
});*/

app.listen(port, () => {
    console.log(`Server connected on port ${port} !`)
});