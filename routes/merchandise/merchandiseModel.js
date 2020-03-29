const db = require("../../data/db-config.js")

module.exports = {
    find,
    findbyId,
    findByCategory,
    post,
    deletebyId
}

function find() {
    return db('merchandise').select('*')
}

function findbyId(id) {
    return db("merchandise").where("id", id).first()
}

function findByCategory(category) {
    return db('merchandise').where("category", category)
}
function post(merchandise) {
    return db('merchandise').insert(merchandise)
    .then(merch => {
        return find()
    })
}

function deletebyId(id) {
    return db('merchandise').where("id", id)
    .del()
}