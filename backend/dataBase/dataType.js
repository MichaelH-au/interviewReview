/**
 * number > dataTime | String | Binary
 * small > large
 * data will be stored in a page(16k in innodb)
 */

/**
 * Integer number
 * type         size            signed              unsigned
 * tinyint      1byte           -128 - 127          0 - 255
 * smallint     2byte           32768 - 32767       0 - 65535
 * mediumint    3byte
 * int          4byte
 * bigint       8byte
 */

/**
 * R
 * FLOAT, DOUBLE, DECIMAL(accurate)
 * DECIMAL(18,9) -> total 18 digits, 9 fraction
 */

/**
 * VARCHAR and CHAR
 * the size is base on the number of characters(utf8 -> 3bits)
 *
 * varchar:
 * 1. the maximum size of string is larger than the avg(string.length)
 * 2. won't update frequently
 *
 * char:
 * 1. max size of char is 255
 * 2. fixed size of the string
 */