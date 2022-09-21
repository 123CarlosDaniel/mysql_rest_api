create database if not exists companydb;

use companydb;

create table employee(
  id int(11) not null auto_increment,
  name varchar(45) default null,
  salary int(5) default null,
  primary key (id)
);

describe employee ;

insert into employee values 
( 1, 'pepe', 1000),
( 2, 'popi', 7000),
( 3, 'pipo', 5000),
( 4, 'pope', 3000),
( 5, 'pepi', 2000);
