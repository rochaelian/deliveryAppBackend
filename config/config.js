const promise = require('bluebird');

const optioons = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(optioons);
const types = pgp.pg.types;
types.setTypeParser(1114,  function(stringValue){
    return stringValue;
});

const databaseConfig = {
    'host': '192.168.0.100',
    'port': 5432,
    'database': 'delivery_app',
    'user': 'your user',
    'password': 'your password'
};

const db = pgp(databaseConfig);

module.exports = db;