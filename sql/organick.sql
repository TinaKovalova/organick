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
   `date` datetime not null,
   message varchar(100)
);

CREATE TABLE product
(
   id int not null primary key auto_increment,
   categoryId int not null,
   productName varchar(40) not null,
   `description` varchar(300),
   fullDescription varchar(600),
   exstraInformation varchar(500),
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
   quantity decimal(5, 3) not null,
   productPrice decimal(5, 2) not null,
   productDiscount int,
   foreign key (orderId) references `order`(id),
   foreign key (productId) references product(id),
   foreign key (userId) references `user`(id)
   ON UPDATE CASCADE 
);

INSERT INTO category(categoryName) VALUES ('vegetable'),('fresh'),('millets'), ('health'),('nuts');

INSERT INTO product(categoryId,productName,`description`,fullDescription,exstraInformation, price,discount,star,imagePath)
VALUES (1,'Mung Bean',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
11,null,3,'/product/mung_bean.png'),
(1,'calabrese broccoli', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,4,'/product/broccoli.png'),
(2,'Fresh Banana Fruites', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,30,5,'/product/banana.png'),
(1,'Brown Hazelnut', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
12,null,0,'/product/brown.png'),
(3,'White Nuts',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
30,35,4,'/product/nuts.png'),
(1,'Vegan Red Tomato',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,5,'/product/tomato.png'),
(4,'Mung Bean',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 20,35,4,'/product/mung_.png'),
(1,'Onion',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
17,null,4,'/product/onion.png'),
(5,'Zelco Suji Elaichi Rusk',
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 20,35,4,'/product/rusk.png'),
(2,'Eggs', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,4,'/product/eggs.png'),
(2,'Fresh Corn', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,4,'/product/corn.png'),
(4,'Mung Bean', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,35,4,'/product/corn.png'),
(5,'White Hazelnut', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,40,3,'/product/hazelnut.png'),
(2,'Fresh Corn', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
20,30,4,'/product/corn.png'),
(2,'Organic Almonds', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
15,null,4,'/product/almonds.png'),
(1,'Cabbage', 
"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
"A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
 17,null,2,'/product/cabagge.png');


select * from category;
select * from `order`;
select * from product_order;
select * from `user`;
select * from  `user` where phone ='0664036838';
select * from product;

