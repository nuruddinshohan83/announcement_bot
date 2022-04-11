CREATE TABLE posts (
  id bigint generated by default as identity primary key,
  title text,
  content text,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null
);
user_id uuid references auth.users not null,
  