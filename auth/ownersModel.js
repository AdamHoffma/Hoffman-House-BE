const db = require('../data/db-config.js')

module.exports = {
    findBy,
    find
}

function findBy(filter) {
    return db('owners').where(filter)
}

function find() {
    return db('owners').select("*")
}