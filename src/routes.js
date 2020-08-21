import {Router} from 'express';

import SendEmail from './controllers/EmailController';

const routes = new Router();

routes.post('/sendemail', SendEmail.index);

export default routes;