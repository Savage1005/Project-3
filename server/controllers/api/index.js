const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/income', require('./incomeController'));
apiControllers.use('/expense', require('./expenseController'));
apiControllers.use('/savings', require('./savingsController'));
apiControllers.use('/stock', require('./stockController'));
module.exports = apiControllers;
