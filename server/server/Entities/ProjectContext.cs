using System;
using Microsoft.EntityFrameworkCore;

namespace server.Entities
{
	public class ProjectContext : DbContext
    {
		public ProjectContext(DbContextOptions<ProjectContext> dbContextOptions) 
			: base(dbContextOptions)
        {
			
        }
        
		public DbSet<Project> Todos { set; get; }
    }
}
