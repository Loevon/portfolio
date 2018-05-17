using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Entities
{
	[Table("projects")]
    public class Project
    {
        [Key]
        public int id { get; set; }
        public String title { get; set; }
		public String subtitle { get; set; }
		public String description { get; set; }
		public String repo { get; set; }
		public String link { get; set; }
		public String image { get; set; }
    }
}
