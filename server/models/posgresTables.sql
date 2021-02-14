CREATE TABLE donations (
    _id int primary key, // 6
    name  varchar(80),
    amount float,
    credit_card int,
    phone_num int,
    date date,
    email text unique not null,
    _fk int references users _id
);

CREATE TABLE users(
    _id primary 
    user_name varchar(80) unique not null,
    password varchar(80),
)


CREATE TABLE donations (
    _id int primary key, 
    name  varchar(80),
    amount float,
    credit_card int,
    phone_num int,
    date date,
    email varchar(100) unique not null,
    _fk int
);

INSERT INTO donations(
  name,
  amount,
  credit_card,
  phone_num,
  email,
)

VALUES (
  'gabi',
  '2000000',
  '1234123412341234',
  '1234444444',
  'gabi@gabi.gitmaster',
  );



CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  user_name VARCHAR(80) UNIQUE,
  password VARCHAR(80)
);

CREATE TABLE donations (
    _id SERIAL PRIMARY KEY, 
    name  VARCHAR(80),
    amount FLOAT,
    credit_card INT,
    phone_num INT,
    date DATE,
    email VARCHAR(80),
    user_id int,
    FOREIGN KEY(user_id) REFERENCES users(_id)
);


- finds total amount of donations
SELECT sum(amount)
FROM "donations" ;


- insert into Table
INSERT INTO donations1(name, amount, credit_card, phone_num, date, email, user_id)
VALUES ('lucas', '100', '152635241', '36042992', 'dec-12-2019', 'lucas@gitMasterGabi.com', 1)
