/**
 * Purpose of database optimisation
 * 1. reduce the redundant data
 * 2. reduce the exception in update, insert and delete
 */

/**
 * Steps of design the database
 * 1. requirement analysis
 * 2. logic design
 * 3. physical design
 * 4. try to follow normal form but not always
 */

/**
 * 1NF
 * table should be like a matrix and only one element in each cell
 *
 * 2NF
 * partial dependency is not allow in table
 * this will happen only when there is combination of primary key
 *
 * 3NF
 * remove duplication
 *
 * Denormalization
 *
 */

/**
 *  Normalization
 *  pro:
 *  size of table is relative small
 *  update will be faster
 *  less redundant data
 *
 *  con:
 *  it is not efficient when do complicate read operation(join)
 *
 *
 *  Denormalization
 *  pro:
 *  reduce the number of table need to be joined
 *  con:
 *  redundant data
 *  take more time when update info
 *
 *
 */

/**
 * Physical design
 * 1. Definition of table and attribute name
 * 2. choose appropriate DB engine
 * 3. choose appropriate data type
 * 4. structure of DB
 */

/**
 * primary key design
 * 1. should be small
 * 2. should be auto increment
 */