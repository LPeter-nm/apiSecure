import express from 'express';
import { RouterPost } from './routes/routePost';
import { RouterUser } from './routes/routeUser';

const app = express();

app.use(express.json());

app.use(RouterPost);
app.use(RouterUser);

app.listen(4000, () => console.log('Server running'));