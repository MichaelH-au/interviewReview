/**
 * database Coping
 *
 * distribution database
 * load balancing
 */

/**
 * binlog
 * binlog_format = STATEMENT
 * SQL will be saved in file
 * pro:
 * size of data is relative small
 *
 * con:
 * remember the context
 *
 * binlog_format = ROW
 * binlog_rot_image = [FULL|MINIMAL|NOBLOB]
 * All the records in database will be record
 * pro: more safe
 * con: data size will be large
 *
 * binlog_format = MIXED
 */

/**
 * SBR
 * pro:
 * less data log saveIO
 * con:
 * consistence is hard for UUID
 * table will be lock
 *
 * RBR
 * pro:
 * consistence
 * con:
 * the table structure must be same
 * trigger may not be executed
 */

/**
 * Configuration of copying
 * 1. create a user in database
 * create user 'repl' @'IP' identified by 'password'
 *
 * 2.give access for the user
 * grant replication slave on *.* to 'repl' @ 'IP'
 *
 * 3. Master database server config
 * bin_log = mysql-bin
 * server_id = 100
 *
 * 4. Slave database server config
 * bin_log = mysql-bin
 * server_id = 101
 * relay_log = mysql-relay-bin
 * log_slave_update = on (options)
 * read_only = on (options)
 *
 * 5. Initialization of slave database
 * mysqldump --master-data = 2 -single-transaction
 *
 * xtrabackup --slave-info (non-blocking) (only suit for innodb)
 *
 * 6. make connection between master and slave
 * change master to master_host = 'master_host_ip',
 * master_user = 'repl',
 * master_password = 'password',
 * master_log_file = 'mysql_log_file_name',
 * master_log_pos = 4;
 */
