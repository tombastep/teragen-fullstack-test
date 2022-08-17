import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/Root.route';
import { handleErrors } from './controllers/Errors.controller';
import { port } from './env';
import cors from './utils/cors';
const app = express();
app.use(cors);
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(handleErrors);
app.listen(port, () => console.log(`Server running at port ${port}`));
//# sourceMappingURL=index.js.map