const express = require('express');
const router = express.Router();
const userSchema = require('../model/user');
const collection = require('../collection');
const schema = require('../model/user');


router.get('/', async (req,res)=>{
    const users = await collection.find({});
    res.json(users);
});

router.post('/', async (req,res)=>{
    try{
        const value = await schema.validateAsync(req.body);
        const inserted = await collection.insert(value);
        res.send(inserted);
    }catch(error){
        res.send(error);
    }

});

router.delete('/:id',async (req,res)=>{
    try {
        const deleted = await collection.remove({_id: req.params.id});
        res.send(deleted);
    } catch (error) {
        res.send(error);
    }
});

router.put('/:id',async (req,res)=>{
    try {
        const value = await schema.validateAsync(req.body);
        const updated = await collection.update({_id: req.params.id},{$set: value});
        res.send(updated);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;