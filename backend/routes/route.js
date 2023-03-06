const express=require('express');
const router=express.Router();
const controller=require('../controller/crud')
const db=require('./dbconfig')
router.get('/display',controller.display);
router.put('/edit/:id',controller.edit)
router.post('/create',controller.create)
router.delete('/del/:id',controller.del)

module.exports = router;
