# Local Demo for Apollo Gateway or Router with GraphOS Supergraph  
  
## Local installation
1. Locally install and verify [Node.js 18.x.x and npm 9.x.x](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and also [Docker Compose](https://docs.docker.com/compose/install/).
2. Clone repo to local workstation.
3. In terminal at project root (location of `docker-compose.yaml`), enter `docker compose up`. Wait for successful completion of all docker processes.
4. In browser, for Apollo Gateway, navigate to http://localhost:4444.
5. Click on the button labeled **Query Your Server**.
6. In Apollo Sandbox Explorer, enter the following query in the **Operation** window:
```
query ApolloOPADemo {
    planByUser {
        id
        name
        features
    }
}
```
7. Click on the bright blue button in the top-right of the **Operation** window that has a play button triangle and says "ApolloOPADemo".
  
## Build the supergraph
```
rover supergraph compose --config ./supergraph-config.yaml --output supergraph.graphql  
```
  
## Download the Apollo Router
Navigate to the router folder -- `cd router` -- and download the router binary.
```
curl -sSL https://router.apollo.dev/download/nix/latest | sh
```  
  
If the above cURL doesn't work, check the [Apollo Router documentation](https://www.apollographql.com/docs/router/quickstart/#1-download-and-extract-the-apollo-router-binary) for other options.
  
## Use an Apollo License for Apollo Router
To run this demo, the router requires the APOLLO_KEY and APOLLO_GRAPH_REF with Apollo Studio license.  

To start the router manually from the command line, navigate into the `router` folder of this project and type the following, either storing your license variables in your environment or replacing $APOLLO_KEY and $APOLLO_GRAPH_REF with your license values.  
```
APOLLO_KEY=$APOLLO_KEY APOLLO_GRAPH_REF=$APOLLO_GRAPH_REF ./router --supergraph supergraph.graphql --config router.yaml --dev
```
