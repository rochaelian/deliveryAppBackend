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
    'host': '192.168.0.249',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgres',
    'password': 'postpanda'
};

const db = pgp(databaseConfig);

module.exports = db;