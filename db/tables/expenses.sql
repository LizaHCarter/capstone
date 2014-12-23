create table expenses(
  id serial primary key,
  rent money not null,
  rent_due timestamp default now(),
  groceries money,
  utilities money,
  savings money,
  other money,    
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  user_id integer not null references users(id)
);