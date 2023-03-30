DROP DATABASE if exists organick;
CREATE DATABASE IF NOT EXISTS organick;
USE organick;

CREATE TABLE category
(
   id int not null primary key AUTO_INCREMENT,
   categoryName VARCHAR(20) NOT NULL
);

CREATE TABLE `user`
(
   id int not null primary key auto_increment,
   userName varchar(20) not null,
   surName varchar(20) not null,
   phone varchar(10) not null,
   email varchar(30),
   address varchar(50)
);

CREATE TABLE subscriber
(
   id int not null primary key auto_increment,
   email varchar(30) not null
);

CREATE TABLE news
(
   id int not null primary key auto_increment,
   author varchar(30),
   title varchar(50) not null,
   text varchar(150) not null,
   `date` datetime not null,
    imagePath varchar(100)
);

CREATE TABLE testimonial
(
   id int not null primary key auto_increment,
   author varchar(30),
   position varchar(20) not null,
   text varchar(100) not null,
   stars int not null,
   imagePath varchar(100)
);


CREATE TABLE `order`
(
   id int not null primary key auto_increment,
   `date` date not null
);

CREATE TABLE product
(
   id int not null primary key auto_increment,
   categoryId int not null,
   productName varchar(40) not null,
   price decimal(5, 2) not null,
   discount int,
   star int,
   imagePath varchar(100),
   foreign key (categoryId) references category(id),
   constraint chk_star check (star>=0 and star <=5)
);

CREATE TABLE product_order
(
   id int not null primary key auto_increment,
   orderId int not null,
   productId int not null,
   userId int not null,
   productCount decimal(5, 3) not null,
   productPrice decimal(5, 2) not null,
   productDiscount int,
   productSum decimal(10, 2) not null,
   foreign key (orderId) references `order`(id),
   foreign key (productId) references product(id),
   foreign key (userId) references `user`(id)
   ON UPDATE CASCADE 
);

INSERT INTO category(categoryName) VALUES ('vegetable'),('fresh'),('millets'), ('health'),('nuts');

INSERT INTO product(categoryId,productName,price,discount,star,imagePath)
VALUES (1,'Mung Bean',11,null,3,'/product/Image.png'),
(1,'calabrese broccoli',20,35,4,'/product/Image.png'),
(2,'Fresh Banana Fruites',20,30,5,'/product/Image1.png'),
(1,'Brown Hazelnut',12,null,0,'/product/Image.png'),
(3,'White Nuts',30,35,4,'/product/Image.png'),
(1,'Vegan Red Tomato',20,35,5,'/product/Image.png'),
(4,'Mung Bean',20,35,4,'/product/Image.png'),
(1,'Onion',17,null,4,'/product/Image.png'),
(5,'Brown Hazelnut',20,35,4,'/product/Image.png'),
(2,'Eggs',20,35,4,'/product/Image.png'),
(2,'Zelco Suji Elaichi Rusk',20,35,4,'/product/Image.png'),
(4,'Mung Bean',20,35,4,'/product/Image.png'),
(5,'White Hazelnut',20,40,3,'/product/Image.png'),
(2,'Fresh Corn',20,30,4,'/product/Image.png'),
(2,'Organic Almonds',15,null,4,'/product/Image.png'),
(1,'Cabbage',17,null,2,'/product/Image.png');

select * from category;
select * from `order`;
select * from product_order;
select * from  `user` where phone ='0664036838';
select * from product;
delete from product where id=2;
update product set categoryId="1",productName="dgd", price=25, discount=null, star=3, imagePath=null where id=18;

insert into `order` (`date`) values (now());
insert into product_order set `orderId` = 1, `productId` = 12, `userId` = 1, `productCount` = 2, `productPrice` = 10, `productDiscount` = 1, `productSum` = 3000.22

