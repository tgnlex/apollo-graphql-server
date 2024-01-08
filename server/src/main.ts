import startApollo from './graphql/apollo.ts';
import startExpress from './express/server.ts';
const main = () => {
  startExpress();
  startApollo();
}

main();