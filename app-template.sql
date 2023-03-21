-- -- creates empty database
-- create database 'app-template';
-- -- add pgcrypto extension to database
-- create extension if not exists pgcrypto;

-- create table for common metadata that other tables will inherit
create table public.meta (
  creation_user bigint,
  creation_time bigint,
  modification_user bigint,
  modification_time bigint
);

-- creates users schema
create schema users;

-- create table users.user
create table users.user
(
  id              bigserial                                                primary key,
  username        text                                                     not null,
  email           text                                                     not null,
  pass            text                                                     not null,
  full_name       text
)
  inherits (meta);

-- add a user named "dev" with password "dev"
insert into users.user (username, email, pass)
values ('dev', 'dev@mail.to', crypt('dev', gen_salt('bf')));
