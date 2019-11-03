const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Owners = require('./ownersModel.js')
const jwt = require('jsonwebtoken')


router.post('/', (req, res) => {
    let user = req.body
    //user.password = bcrypt.hashSync(user.password, 10)
   console.log('user', user)
    Owners.findBy(user)
    .first()
    .then(owner => {
        if (owner) {
            const token = generateToken(owner)
            res.status(200).json({message: "You are logged in", token})
        } else {
            res.status(401).json({message: "Incorrect creds"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "Failed to Login"})          
    })
})

router.get("/all", (req, res) => {
    Owners.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

function generateToken(owner) {
    const payload = {
        username: owner.username, id: owner.id
    }
    const secret = "keep it secret, keep it safe"
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secret, options)
}

module.exports = router
