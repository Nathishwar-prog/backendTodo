const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');


router.post('/', ctrl.createTask);      
router.get('/', ctrl.getTasks);            
router.get('/:id', ctrl.getTaskById);      
router.put('/:id', ctrl.updateTask);       
router.patch('/:id', ctrl.patchTask);      
router.delete('/:id', ctrl.deleteTask);    

module.exports = router;
