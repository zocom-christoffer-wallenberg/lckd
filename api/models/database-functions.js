const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { hashPassword } = require('./hashPassword');

const adapter = new FileSync('users.json')
const database = low(adapter)

module.exports = {
    async getUser(user) {
        return await database.get('users').find({ uuid: user.uuid }).value();
    },

    async getUserFromId(id) {
        return await database.get('users').find({ id: parseInt(id) }).value();
    },

    async getUserFromEmail(user) {
        return await database.get('users').find({ email: user.email }).value();
    },

    async addAccountToUser(account, user) {
        return await database.get('accounts').push({ site: account.site, username: account.username, 
            password: await hashPassword(account.password), email: user}).write();
    },

    async getAccounts(email) {
        return await database.get('accounts').filter({ email: email }).value();
    }
}