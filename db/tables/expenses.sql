create table expenses(
  id serial primary key,
  rent money not null,
  groceries money default 0,
  utilities money default 0,
  savings money default 0,
  other money default 0,
  percent varchar(25),
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  user_id integer not null references users(id)
);