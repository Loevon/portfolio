CREATE TABLE public.Projects
(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    subtitle VARCHAR(50),
	description VARCHAR(1000),
	repo VARCHAR(30),
	link VARCHAR(200),
	image VARCHAR(20)
);
CREATE UNIQUE INDEX Projects_id_uindex ON public.Projects (id);




INSERT into public.Projects (title, subtitle, description, repo, link, image)
VALUES ('Portfolio', 'Angular, ASP.NET Core MVC', 'This is my portfolio, all code is available, ect', NULL,NULL, 'placeholder.png');

INSERT into public.Projects (title, subtitle, description, repo, link, image)
VALUES ('Adagio Medical: Cryo-Freeze Gen 2', 'C++, MFC Framework', 'GUI and firmware development for device that freezes a heart', NULL,NULL, 'adagio.png');

INSERT into public.Projects (title, subtitle, description, repo, link, image)
VALUES ('DB Safe: OasisPlus for Dubai', 'Android, Angular, Spring Boot', 'Earthquake app for Dubrai', NULL, 'https://play.google.com/store/apps/details?id=net.compositeapps.kmi&hl=en#_US', 'dbsafe.png');

INSERT into public.Projects (title, subtitle, description, repo, link, image)
VALUES ('CURA', 'JavaScript, HTML, CSS, jQuery, Spring 3', 'Description for CURA and its spin-offs', NULL, 'http://www.compositeapps.net/cura.php#background', 'cura.png');

INSERT into public.Projects (title, subtitle, description, repo, link, image)
VALUES ('IGT: Aurora Performance Intel', 'Ionic, Spring Boot', 'This is an extra long description of the project. This project will consist of a brief summary of what it was, what my role was, and the tech used.', NULL, 'https://www.pgridigitallibrary.com/uploads/4/3/1/5/43157305/igt_auroraperformanceintel_may-june_2017.pdf', 'igt.png');




































