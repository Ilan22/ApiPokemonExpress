## Installation

```bash
npm install
```

## Modèle Pokemon

Le modèle Pokemon est défini avec les attributs suivants :

- **name (String)**: Le nom du Pokemon.
- **pokemon_type (String)**: Le type du Pokemon.
- **level (Integer)**: Le niveau du Pokemon.
- **evolution (String)**: La forme évoluée du Pokemon.

## API

### GET /pokemons

Récupère tous les Pokemons de la base de données.

**Exemple d'appel** :

- URL: http://localhost:3000/pokemons

**Retourne** :

```json
{
  "pokemons": [
    {
      "id": 1,
      "name": "Pikachu",
      "pokemon_type": "Electric",
      "level": 1,
      "evolution": "Raichu",
      "createdAt": "2024-01-18T13:11:47.239Z",
      "updatedAt": "2024-01-18T13:11:47.239Z"
    }
  ]
}
```

### GET /pokemons/:id

Récupère un Pokemon spécifique en fonction de l'ID fourni.

**Exemple d'appel** :

- URL: http://localhost:3000/pokemons/1

**Retourne** :

```json
{
  "pokemon": {
    "id": 1,
    "name": "Pikachu",
    "pokemon_type": "Electric",
    "level": 1,
    "evolution": "Raichu",
    "createdAt": "2024-01-18T13:11:47.239Z",
    "updatedAt": "2024-01-18T13:11:47.239Z"
  }
}
```

### POST /pokemons

Ajoute un nouveau Pokemon à la base de données.

**Exemple d'appel** :

- URL: http://localhost:3000/pokemons
- Body:

```json
{
  "name": "Pikachu",
  "pokemon_type": "Electric",
  "level": 1,
  "evolution": "Raichu"
}
```

### PUT /pokemons/:id

Met à jour les informations d'un Pokemon existant en fonction de l'ID fourni.

**Exemple d'appel** :

- URL: http://localhost:3000/pokemons/1
- Body:

```json
{
  "name": "Pikachu",
  "pokemon_type": "Electric",
  "level": 2,
  "evolution": "Raichu"
}
```

### DELETE /pokemons/:id

Supprime un Pokemon en fonction de l'ID fourni.

**Exemple d'appel** :

- URL: http://localhost:3000/pokemons/1

**Retourne** :

```json
{
  "message": "Suppression du pokemon 1"
}
```

### Général

Pour les appels avec l'ID en paramètre, si le pokemon n'existe pas le message suivant est retourné :

```json
{
  "message": "Le pokemon 1 n'existe pas"
}
```
