import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway } from "@apollo/gateway";
import { readFileSync } from 'fs';

const supergraphSdl = readFileSync('./supergraph.graphql').toString();

const gateway = new ApolloGateway({
    supergraphSdl
});

const server = new ApolloServer({gateway});

startStandaloneServer(server, {
    listen: {
        port: 4444
    }
})
    .then(({ url }) => console.log(`🚀 Gateway ready at ${url}`))
    .catch( err => { console.error(err) });
