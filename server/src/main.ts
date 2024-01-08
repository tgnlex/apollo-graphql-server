import startApollo from '../graphql/apollo.ts';
import startExpress from './server.ts';
const main = () => {
  startExpress();
  startApollo();
}

main();