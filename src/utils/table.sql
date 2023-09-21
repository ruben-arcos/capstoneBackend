DROP TABLE IF EXISTS regUsers;

CREATE TABLE regUsers(
	id int primary key auto_increment,
  username varchar(20) not null unique,
  password_hash varchar(1000) not null,
	full_name varchar(100) not null
);