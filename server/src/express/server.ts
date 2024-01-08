import express from 'express';
import helmet from 'helmet';
import {createServer} from 'node:http' 
const app = express();
const server = createServer(app)

app.use(helmet())    
const startExpress = () => {
  app.get('/', (req, res, next) => {
    console.log('[HTTP]: Endpoint Hit')
    res.send(`
    <html><body>
      <h1>Server Root</h1>
      <a href="http://localhost:5000">Apollo Dashboard</a>
    </body></html>
    `)
  });
  server.listen(4000, () => {
    console.log('[HTTP]: Listening on: http://localhost:4000/')
  });
}

export default startExpress;