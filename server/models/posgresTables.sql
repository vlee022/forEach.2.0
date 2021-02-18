CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  user_name VARCHAR(80) UNIQUE not null,
  password VARCHAR(80) not null,
  f_name VARCHAR(280) not null,
  l_name VARCHAR(280)
);

CREATE TABLE shoutouts (
  _id SERIAL PRIMARY KEY,
  shoutout VARCHAR(280) not null,
  claps_count INT DEFAULT 0,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(_id)
  ON DELETE SET NULL
);

CREATE TABLE donations (
  _id SERIAL PRIMARY KEY, 
  amount FLOAT not null,
  f_name VARCHAR(280) not null,
  l_name VARCHAR(280),
  billing_cc_num VARCHAR(280) not null,
  billing_cvv VARCHAR(280) not null,
  billing_mm INT not null,
  billing_yy INT not null,
  billing_country VARCHAR(80) not null,
  billing_zip_code INT not null,
  billing_name_on_card VARCHAR(280) not null,
  phone_num INT,
  donation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  email VARCHAR(100) not null,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(_id)
  ON DELETE SET NULL
);


- 'finds total amount of donations'
SELECT sum(amount)
FROM "donations" ;

- 'insert values into shoutouts'
INSERT INTO shoutouts(_id, shoutout, claps_count, user_id )
VALUES (default, 'cohort 41 <3', default, '5')

- 'insert values into table'
INSERT INTO donations(amount, f_name, l_name, billing_cc_num, billing_ccv, billing_mm, billing_yy, billing_country, billing_zip_code ,billing_name_on_card, phone_num, donation_date, email, user_id)
VALUES ('80.25', 'John', 'Doe', '36042992', '347', '12', '12','USA','11236', 'John Doe','123456789', default, 'john@doe.com', '1')

SELECT f_name, l_name, amount
FROM donations 
ORDER BY donation_date