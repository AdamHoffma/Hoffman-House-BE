const db = require("../../data/db-config.js")

module.exports = {
    find,
    findbyId,
    post,
    deletebyId,
    
}

function find() {
    return db('shows').select("*")
}

function findbyId(id) {
    return db('shows').where("id", id).first()
}

function post(show) {
    return db('shows').insert(show)
    .then(id => {
        return find()
    })
}

function deletebyId(id) {
    return db('shows').where("id", id)
    .del()  
}
    