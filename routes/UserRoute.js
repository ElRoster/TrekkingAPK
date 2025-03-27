const express = require('express');
const router = express.Router();
const { getUser, getUserById, postUser, putUser, deleteUser } = require('../controllers/UserController');

// Definir las rutas
router.get('/', getUser);       
router.get('/:id', getUserById); 
router.post('/', postUser);    
router.put('/:id', putUser); 
router.delete('/:id', deleteUser); 

module.exports = router;
