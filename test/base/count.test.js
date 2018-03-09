/*eslint-disable */
const knex = require('knex');
const Test = require('../test-runner.js');
const baseparser = require('../../lib/parser/base.js');


describe('Query Generation ::', function () {
    describe('Grouping statements with COUNT', function () {
        it('should generate a query when an COUNT statement', function (done) {
            Test({
                outcomes: [
                    {
                        dialect: 'mysql',
                        config: {
                            db_type: 'mysql',
                            db_host: '127.0.0.1',
                            db_port: 3306,
                            db_name: 'test',
                            db_user: 'root',
                            db_pwd: '',
                            db_prefix: 'think_',
                            db_charset: 'utf8',
                            db_ext_config: {safe: true, db_log_sql: true, db_pool_size: 10}
                        },
                        options: {method: 'SELECT'},
                        parser:baseparser,
                        client: knex({client: 'mysql'}).count().from('think_user AS User'),
                        query: {
                            where: {id: {'>=': 0}}
                        },
                        sql: "select count(*) from `think_user` as `User` where `User`.`id` >= 0"
                    },
                    {
                        dialect: 'postgresql',
                        config: {
                            db_type: 'postgresql',
                            db_host: '127.0.0.1',
                            db_port: 5432,
                            db_name: 'test',
                            db_user: 'root',
                            db_pwd: '',
                            db_prefix: 'think_',
                            db_charset: 'utf8',
                            db_ext_config: {safe: true, db_log_sql: true, db_pool_size: 10}
                        },
                        options: {method: 'SELECT'},
                        parser:baseparser,
                        client: knex({client: 'postgresql'}).count().from('think_user AS User'),
                        query: {
                            where: {id: {'>=': 0}}
                        },
                        sql: 'select count(*) from "think_user" as "User" where "User"."id" >= 0'
                    },
                ]
            }, done);
        });
    });
});
