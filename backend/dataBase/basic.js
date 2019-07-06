/**
 * Transaction
 * 1. Atomicity 2. Consistency 3. Isolation 4. Durability
 */

/**
 *  Different between drop, delete and truncate
 *  delete data will be record in log and can be rollback
 *
 *  truncate will not be record and can not recover after deletion
 *  truncate will not trigger events
 *
 *  drop will delete the table
 */

/**
 * Basic SQL
 *
 * alter table table1 alter column id set default 1;
 * insert into table2 select 2, "aaa";
 * select * from table2\G;
 * select * from table2 left join table1 on table1.id = table2.id\G;
 * is null, is not null
 * SELECT * FROM cinema WHERE description != "boring" AND MOD(id, 2) = 1 ORDER BY rating DESC;
 * UPDATE salary SET sex = (CASE WHEN sex='m' THEN 'f' WHEN sex='f' THEN 'm' END)
 */