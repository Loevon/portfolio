CREATE TABLE public.projects
(
	project_id SERIAL PRIMARY KEY,
	title VARCHAR(100),
	subtitle VARCHAR(100),
	description VARCHAR(250),
	repository VARCHAR(100),
	info VARCHAR(100)
);



