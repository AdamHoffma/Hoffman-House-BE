const router = require("express").Router()
const db = require('./showsModel.js')
const restricted = require('../../auth/authMiddleware.js')

router.get("/", (req, res) => {
    db.find()
    .then(shows => {
        res.status(200).json(shows)
    })
    .catch(error => {
        res.status(500).json({message: "Could not pull up shows, server error"})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db.findbyId(id)
    .then(show => {
        res.status(200).json(show)
    })
    .catch(error => {
        res.status(500).json({message: "Could not find show, server error"})
    })
})

router.post("/", (req, res) => {
    const shows = req.body
    db.post(shows)
    .then(show => {
        res.status(200).json(show)
    })
    .catch(error => {
        res.status(500).json({message: "Could not post show, server error"})
    })
})

router.delete("/:id", (req, res) => {
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
        res.status(500).json({message: "Failed to Delete, server error"})
    })
})

module.exports = router