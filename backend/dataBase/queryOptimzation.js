/**
 * slow query log
 *
 * configuration
 * slow_query_log
 * slow_query_log_file
 * long_query_time
 */

/**
 * tools mysqldumpslow
 *
 * pt-query-digest \
 * --explain h=127.0.0.1, u=root,p=password \
 * slow-mysql.log
 */

/**
 * cache in SQL
 * it is better turn the cache off when there are frequent query requests
 * query_cache_type
 * query_cache_size
 * query_cache_limit
 * query_cache_wlock_invalidate
 * query_cache_min_res_unit
 */