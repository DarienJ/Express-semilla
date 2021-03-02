import {Router, routes} from 'express';

const routes = Router();

Router.get('/',categoriaGet);

Router.post('/',categoriaPost);

Router.put('/');

Router.put('/Activar');

Router.put('/Desactivar');

Router.delete('/');

