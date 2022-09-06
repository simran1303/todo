const express = require('express');
const  router= express.Router();
const getController = require('../controllers/controller')

router.get('/',getController.getData);

router.get('/data/:id',getController.getById);

router.post('/add',getController.postData);

router.put('/update/:id',getController.putData);

router.delete('/delete/:id',getController.deleteData);


module.exports= router;