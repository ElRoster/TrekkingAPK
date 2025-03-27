const Guide = require('../models/Guide');

const getGuide = async (req, res) => {
    try {
        const guides = await Guide.find();
        res.json(guides);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getGuideById = async (req, res) => {
    try {
        const { id } = req.params;
        const guide = await Guide.findById(id);

        if (!guide) {
            return res.status(404).json({ msg: "Guía no encontrado." });
        }

        res.json(guide);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const postGuide = async (req, res) => {
    try {
        const guide = new Guide(req.body);
        const savedGuide = await guide.save();
        res.json({ msg: 'Guía creado exitosamente.', guide: savedGuide });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const putGuide = async (req, res) => {
    const { id, name, lastname, email, cellphone, state } = req.body;

    if (!id) {
        return res.status(400).json({ msg: 'El ID es requerido.' });
    }

    try {
        const updatedGuide = await Guide.findByIdAndUpdate(
            id,
            { name, lastname, email, cellphone, state },
            { new: true, runValidators: true } // Devuelve el actualizado y aplica validaciones del modelo
        );

        if (!updatedGuide) {
            return res.status(404).json({ msg: 'Guía no encontrado.' });
        }

        res.json({ msg: 'Guía actualizado.', guide: updatedGuide });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteGuide = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ msg: 'El ID es requerido.' });
    }

    try {
        const deletedGuide = await Guide.findByIdAndDelete(id);

        if (!deletedGuide) {
            return res.status(404).json({ msg: 'Guía no encontrado.' });
        }

        res.json({ msg: 'Guía eliminado.' });
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error al eliminar el guía.' });
    }
};

module.exports = {
    postGuide,
    getGuide,
    getGuideById,
    putGuide,
    deleteGuide
};
