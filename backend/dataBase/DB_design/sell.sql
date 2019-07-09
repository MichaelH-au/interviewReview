create table `products_info` (
    `product_id` varchar(32) not null,
    `product_name` varchar(64) not null comment 'product name',
    `product_price` decimal(8, 2) not null comment 'price',
    `product_stock` int not null comment 'stock',
    `product_description` varchar(64) comment 'descriptions',
    `product_icon` varchar(512) comment 'url link',
    `product_type` int not null comment 'number of type',
    `create_time` timestamp not null default current_timestamp comment 'create time',
    `update_time` timestamp not null default current_timestamp on update current_timestamp,

    primary key (`product_id`)
) comment 'products table';

create table `product_category` (
    `category_id` int not null auto_increment,
    `category_name` varchar(64) not null comment 'name',
    `category_type` int not null comment 'type number',
    `create_time` timestamp not null default current_timestamp comment 'create time',
    `update_time` timestamp not null default current_timestamp on update current_timestamp,
    primary key (`category_id`),
    unique key `uqe_category_type` (`category_type`)
) comment 'product category table'