import Koa from 'koa';
import mount from 'koa-mount';
import { createHandler } from '../../lib/use/koa.mjs';
import { schema } from '../schema.mjs';

const port = parseInt(process.env.PORT || '');
if (isNaN(port)) {
  throw new Error('Missing PORT environment variable!');
}

const app = new Koa();
app.use(mount('/graphql', createHandler({ schema })));

app.listen({ port });

console.log(`Listening to port ${port}`);
