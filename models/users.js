const knex = require('../knex')

module.exports = {
    getOne(email, password) {
        return knex('users')
        .select('id', 'name')
        .where({email, password})
    },
    create(body) {
        return knex('users')
        .insert(body)
        .returning('id')
    }
}