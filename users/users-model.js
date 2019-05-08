const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getUserBy,
    getUserById,
    addUser
}

function getUsers() {
    return db('users')
        .select('id', 'username', 'password', 'department');
}

function getUserBy(filter) {
    return db('users')
        .where(filter);
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

async function addUser(user) {
    const [id] = await db('users')
        .insert(user);
    return getUserById(id);
}