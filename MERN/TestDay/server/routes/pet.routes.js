
const PetController = require('../controllers/pet.controller');

module.exports = function(app) {
    app.get('/api', PetController.index);
    app.post('/pet', PetController.createPet);
    app.get('/', PetController.getAllPets);
    app.get('/pets', PetController.getAllPets);
    app.get('/pets/:id', PetController.getPet);
    app.put('/pet/:id', PetController.updatePet);
    app.delete('/pets/:id', PetController.deletePet);
}