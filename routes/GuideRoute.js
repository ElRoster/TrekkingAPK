const express = require('express');
const router = express.Router();
const { getGuide, getGuideById, postGuide, putGuide, deleteGuide } = require('../controllers/GuideController');

// Definir las rutas
router.get('/', getGuide);       // Obtener todos los guías
router.get('/:id', getGuideById);  // Obtener un guía por ID
router.post('/', postGuide);     // Crear un nuevo guía
router.put('/:id', putGuide);    // Actualizar un guía
router.delete('/:id', deleteGuide); // Eliminar un guía por ID

module.exports = router;
