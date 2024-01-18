const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(express.json());

const sequelize = new Sequelize("sqlite::memory:");

const Pokemon = sequelize.define("Pokemon", {
  name: DataTypes.STRING,
  pokemon_type: DataTypes.STRING,
  level: DataTypes.INTEGER,
  evolution: DataTypes.STRING,
});

sequelize.sync();

// API pour récupérer tous les Pokémons
app.get("/pokemons", async (req, res) => {
  const pokemons = await Pokemon.findAll();
  res.json({
    pokemons,
  });
});

// API pour récupérer un Pokémon spécifique par son ID
app.get("/pokemons/:id", async (req, res) => {
  let message = "Le pokemon " + req.params.id + " n'existe pas";
  const pokemon = await Pokemon.findByPk(req.params.id);
  // Vérifie si le pokemon existe
  if (pokemon) {
    message = pokemon;
  }
  res.json({
    message,
  });
});

// API pour créer un nouveau Pokémon
app.post("/pokemons", async (req, res) => {
  const pokemon = await Pokemon.create({
    name: req.body.name,
    pokemon_type: req.body.pokemon_type,
    level: req.body.level,
    evolution: req.body.evolution,
  });
  res.json({
    pokemon,
  });
});

// API pour mettre à jour les informations d'un Pokémon par son ID
app.put("/pokemons/:id", async (req, res) => {
  let message = "Modification du pokemon " + req.params.id;
  const pokemon = await Pokemon.findByPk(req.params.id);
  // Vérifie si le pokemon existe
  if (pokemon) {
    pokemon.update({
      name: req.body.name,
      pokemon_type: req.body.pokemon_type,
      level: req.body.level,
      evolution: req.body.evolution,
    });
  } else {
    message = "Le pokemon " + req.params.id + " n'existe pas";
  }
  res.json({
    message,
  });
});

// API pour supprimer un Pokémon par son ID
app.delete("/pokemons/:id", async (req, res) => {
  let message = "Suppression du pokemon " + req.params.id;
  const pokemon = await Pokemon.findByPk(req.params.id);
  // Vérifie si le pokemon existe
  if (pokemon) {
    pokemon.destroy();
  } else {
    message = "Le pokemon " + req.params.id + " n'existe pas";
  }
  res.json({
    message,
  });
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
