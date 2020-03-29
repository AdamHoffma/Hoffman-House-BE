const router = require("express").Router()
const db = require('./merchandiseModel.js')
const restricted = require('../../auth/authMiddleware.js')

router.get("/", (req, res) => {
    db.find()
    .then(merch => {
        res.status(200).json(merch)
    })
    .catch(error => {
        res.status(500).json({message: "Could not pull up merch, server error"})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    console.log(req.params)
    db.findbyId(id)
    .then(merch => {
        res.status(200).json(merch)
    })
    .catch(error =>{
        res.status(500).json({message: "Could not find merch, server error"})
    })
})

router.get('merch/:category', (req, res) => {
    console.log(req.body)   
    db.findByCategory(category)
    .then(cat => {        
        res.status(200).json(cat)
    })
    .catch(error => {
        res.status(500).json({message: "Could not pull up products by categoy, server error"})
    })
})

router.post('/', (req, res) => {
    const merchs = req.body
    db.post(merchs)
    .then(merch => {
        res.status(200).json(merch)
    })
    .catch(error => {
        res.status(500).json({message: 'Could not post, server error'})
        console.log(error)
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db.deletebyId(id)
    .then(deleted => {
        if(deleted) {
            return res.end("Deleted!")
        } else {
            res.status(404).json({message: "Could not Delete"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Could not Delete, server error"})
    })
})

module.exports = router