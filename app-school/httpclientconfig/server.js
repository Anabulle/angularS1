const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware pour parser le JSON
app.use(express.json());

// Modèle d'étudiant
const Etudiant = require('./Etudiant');

// Démarrage du serveur
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Route pour récupérer tous les étudiants
app.get('/etudiants', async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/etudiants', async (req, res) => {
  const { nom, prenom, classe } = req.body;

  const nouvelEtudiant = new Etudiant({
    nom,
    prenom,
    classe
  });

  try {
    const savedEtudiant = await nouvelEtudiant.save();
    res.status(201).json(savedEtudiant); // Renvoyer l'objet nouvellement créé
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Route pour récupérer un étudiant par son ID
app.get('/etudiants/:id', getEtudiant, (req, res) => {
  res.json(res.etudiant);
});

// Middleware pour récupérer un étudiant par son ID
async function getEtudiant(req, res, next) {
  let etudiant;
  try {
    etudiant = await Etudiant.findById(req.params.id);
    if (etudiant == null) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.etudiant = etudiant;
  next();
}

// Route pour mettre à jour un étudiant
app.put('/etudiants/:id', getEtudiant, async (req, res) => {
  if (req.body.firstname != null) {
    res.etudiant.firstname = req.body.firstname;
  }
  if (req.body.lastname != null) {
    res.etudiant.lastname = req.body.lastname;
  }
  if (req.body.schoolclass != null) {
    res.etudiant.schoolclass = req.body.schoolclass;
  }

  try {
    const updatedEtudiant = await res.etudiant.save();
    res.json(updatedEtudiant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route pour supprimer un étudiant
app.delete('/etudiants/:id', getEtudiant, async (req, res) => {
  try {
    await res.etudiant.deleteOne();
    res.json({ message: 'Étudiant supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});