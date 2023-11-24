const { Router } = require('express');
const router = Router();
const { listUsers, storeUser, updateUser, findUser } = require('../controllers/usersController')

router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.put('/user/:id', updateUser);
router.post('/find', findUser);

module.exports = router