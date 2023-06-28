const usersController = require('../controllers/usersController');
const UsersController = require('../controllers/usersController');

module.exports = (app, upload) => {


    app.get('/api/users/getAll', UsersController.getAll);


    app.post('/api/users/create', upload.array('image', 1), usersController.registerWithImage);
    app.post('/api/users/login', usersController.login);
}