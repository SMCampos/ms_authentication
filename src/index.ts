import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da Aplicação - Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);
app.use(jwtAuthenticationMiddleware);
app.use(authorizationRoute)

//Configurações do Handler de Erro
app.use(errorHandler);

//Inicialização do servidor

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000');
});
