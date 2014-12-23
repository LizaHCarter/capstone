create table tips(
  id serial primary key,
  sales money not null,
  tip money not null,
  created_at timestamp not null default now(),
  day varchar(25) not null,
  user_id integer not null references users(id)
);
