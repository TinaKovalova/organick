CREATE DATABASE IF NOT EXISTS organick;
USE organick;

DROP TABLE if exists category;
CREATE TABLE category
(
   id int not null primary key AUTO_INCREMENT,
   categoryName VARCHAR(20) NOT NULL
);
INSERT INTO category(categoryName) VALUES ('vegetable'),('fresh'),('millets'), ('health'),('nuts');


DROP TABLE if exists product;
CREATE TABLE product
(
   id int not null primary key auto_increment,
   productName varchar(20) not null,
   price decimal(5, 2) not null,
   discount int not null,
   star int,
   imagePath varchar(100)
);

DROP TABLE if exists `user`;
CREATE TABLE `user`
(
   id int not null primary key auto_increment,
   userName varchar(20) not null,
   surName varchar(20) not null,
   phone varchar(10) not null,
   email varchar(30),
   address varchar(50)
);

DROP TABLE if exists `order`;
CREATE TABLE `order`
(
   id int not null primary key auto_increment,
   `date` datetime not null
);

DROP TABLE if exists product_order;
CREATE TABLE product_order
(
   id int not null primary key auto_increment,
   orderId int not null,
   productId int not null,
   userId int not null,
   productCount decimal(5, 3) not null,
   productPrice decimal(5, 2) not null,
   productDiscount int not null,
   productSum decimal(5, 2) not null,
   foreign key (orderId) references `order`(id),
   foreign key (productId) references product(id),
   foreign key (userId) references `user`(id)
);


select * from category;



