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
 * select Salary as SecondHighestSalary from Employee order by Salary limit 1,1
 * UPDATE salary SET sex = (CASE WHEN sex='m' THEN 'f' WHEN sex='f' THEN 'm' END)
 * delete from person
 * select * from table1 where name<>"bbba";
 * where id not in(select id from (select min(id) as id from person group by email) as t1);
 * show index from tablename;
 */

/**
 * Index
 * CREATE INDEX index_name ON table_name(col_name);
 * ALTER TABLE table_name DROP INDEX index_name;
 * INDEX index_name (col_name)
 */

/**
 * Timestamp and datetime
 * timestamp(4 byte ) is from 0 - 2038-01-19  will change if timezone is changed
 * datetime(8 byte ) is from 0 - 9999-12-31
 */
