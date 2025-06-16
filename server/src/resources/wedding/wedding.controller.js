const Wedding = require('./wedding.model');

// Créer un mariage
exports.create = async (req, res) => {
  try {
    const wedding = new Wedding({
      ...req.body,
      user: req.user._id
    });
    await wedding.save();
    res.status(201).json(wedding);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les mariages d'un utilisateur
exports.getAll = async (req, res) => {
  try {
    const weddings = await Wedding.find({ user: req.user._id });
    res.json(weddings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un mariage spécifique
exports.getOne = async (req, res) => {
  try {
    const wedding = await Wedding.findOne({ 
      _id: req.params.id,
      user: req.user._id
    });
    if (!wedding) {
      return res.status(404).json({ message: 'Mariage non trouvé' });
    }
    res.json(wedding);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un mariage
exports.update = async (req, res) => {
  try {
    const wedding = await Wedding.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!wedding) {
      return res.status(404).json({ message: 'Mariage non trouvé' });
    }
    res.json(wedding);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un mariage
exports.delete = async (req, res) => {
  try {
    const wedding = await Wedding.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    if (!wedding) {
      return res.status(404).json({ message: 'Mariage non trouvé' });
    }
    res.json({ message: 'Mariage supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
import Wedding from './wedding.model.js';

export const createWedding = async (req, res) => {
    try{
        const {name, date, place} = req.body;
        const wedding = new Wedding({name, date, place});
        await wedding.save();
        res.status(201).json(wedding);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Obtenir tous les mariages
export const getWeddings = async (req, res) => {
  try {
    const weddings = await Wedding.find();
    res.status(200).json(weddings);
  } catch (error) {
    console.error('Error in getWeddings:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des mariages' });
  }
}

export const getWeddingById = async (req, res) => {
    try{
        const {id} = req.params;
        const wedding = await Wedding.findById(id);
        res.status(200).json(wedding);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateWedding = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, date, place} = req.body;
        const wedding = await Wedding.findByIdAndUpdate(id, {name, date, place}, {new: true});
        res.status(200).json(wedding);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
export const deleteWedding = async (req, res) => {
    try{
        const {id} = req.params;
        await Wedding.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};