/**
 * MySQL index
 *
 * B+tree
 * MyISAM the leaf node point to physical address
 * InnoDB the leaf node point to primary key
 *
 * the index must be at the most left side of the query (union index)
 */

/**
 * Hash index
 * can only be used in "=" query
 * cannot use for match data in range
 * it is not suit for the limited data
 */

/**
 * if the index attribute is warped with function, index will not work
 */

/**
 * check the detail of query
 * explain select language_id from film where language_id = 1\G
 */

/**
 * duplicate index
 * 1. primary key, unique key, index
 * 2. primary key, index(a,id)
 *
 * tool for checking the duplicate inde
 * pt-duplicate-key-checker h=127.0.0.1
 *
 * remove the index that is not used
 */

