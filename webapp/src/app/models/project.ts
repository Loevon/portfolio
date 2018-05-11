class Project {
  title: string;
  subtitle: string;
  description: string;
  image: string; // TODO: base64 string?
  link: string;
  repo: string;

  public constructor(project: any) {
    this.title = project.title;
    this.subtitle = project.subtitle;
    this.description = project.description;
    this.image = project.image;
    this.link = project.link;
    this.repo = project.repo;
  }
}
