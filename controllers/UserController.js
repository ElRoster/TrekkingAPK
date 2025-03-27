const User = require('../models/User')

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado." });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const postUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json({ msg: 'Usuario creado exitosamente.', user: savedUser });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const putUser = async (req, res) => {
    const { id, username, email} = req.body;

    if (!id) {
        return res.status(400).json({ msg: 'ID is required' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { username, email},
            { new: true, runValidators: true } // Devuelve el actualizado y aplica validaciones del modelo
        );

        if (!updatedUser) {
            return res.status(404).json({ msg: 'Usuario no encontrado.' });
        }

        res.json({ msg: 'Usuario actualizado.', user: updatedUser });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ msg: 'ID is required' });
    }

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ msg: 'Usuario no encontrado.' });
        }

        res.json({ msg: 'Usuario eliminado.' });
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error al eliminar el usuario.' });
    }
};


module.exports = {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser
}