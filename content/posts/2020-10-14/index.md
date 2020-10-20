---
title: "Calculate MySQL Memory Footprint"
cover: "https://source.unsplash.com/_1fByLYHA_0/1280x500"
coverAuthor: "Vishwarajsinh Rana"
coverSource: "https://unsplash.com/photos/_1fByLYHA_0"
coverSourceText: "Unsplash"
author: "chefbc"
date: "2020-10-14"
category: "tech"
tags:
    - technology
    - mysql
    - memory
    - sql
---


This is intended as a quick reference to calculate memory footprint of a mysql server.


### Calcuate MySQL Memory

Total/Maximum RAM
```sql
SELECT ( @@key_buffer_size
+ @@query_cache_size
+ @@innodb_buffer_pool_size
+ @@innodb_log_buffer_size
+ @@max_connections * ( @@read_buffer_size
+ @@read_rnd_buffer_size
+ @@sort_buffer_size
+ @@join_buffer_size
+ @@binlog_cache_size
+ @@thread_stack
+ @@tmp_table_size )
) / (1024 * 1024 * 1024) AS MAX_MEMORY_GB;
```


Parameter Sizes
```sql
select @@key_buffer_size / 1024 / 1024 AS key_buffer_size_mb;
select @@query_cache_size;
select @@innodb_buffer_pool_size / 1024 / 1024 / 1024  AS innodb_buffer_pool_size_gb;
select @@innodb_log_buffer_size / 1024 / 1024 AS innodb_log_buffer_size_mb;
select @@max_connections;

select @@read_buffer_size / 1024  AS innodb_log_buffer_size_kb;
select @@read_rnd_buffer_size / 1024  AS read_rnd_buffer_size_kb;
select @@sort_buffer_size / 1024  AS sort_buffer_size_kb;
select @@join_buffer_size / 1024  AS join_buffer_size_kb;
select @@binlog_cache_size  / 1024  AS binlog_cache_size_kb;
select @@thread_stack / 1024  AS thread_stack_kb;
select @@tmp_table_size / 1024 / 1024  AS tmp_table_size_mb;
```


##### Links
* [mysqlcalculator](http://www.mysqlcalculator.com)
* [mysql-memory-calculator](https://dannyda.com/mysql-memory-calculator/)
* [calculate-number-of-connections](https://journeyontux.wordpress.com/2011/12/22/calculate-number-of-connections-for-mysql-server/)




