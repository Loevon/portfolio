CREATE TABLE public.Projects
(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    subtitle VARCHAR(50),
	description VARCHAR(1000),
	repository VARCHAR(30),
	info VARCHAR(30),
	image VARCHAR(20)
);
CREATE UNIQUE INDEX Projects_id_uindex ON public.Projects (id);