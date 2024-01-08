import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { addMocksToSchema } from '@graphql-tools/mock';
import { gql } from 'graphql-tag';
import { readFileSync } from 'fs';

const port = 4001;
const subgraph = 'Payment Methods';
const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));
const schema = buildSubgraphSchema({ typeDefs });

const server = new ApolloServer({
    schema: addMocksToSchema({ schema })
});

try {
    const { url } = await startStandaloneServer(server, {
        listen: {
            port
        }
    });
    console.log(`🚀 ${subgraph} Subgraph Apollo Server listening at: ${url}`);
} catch (error) {
    console.error(error);
}

